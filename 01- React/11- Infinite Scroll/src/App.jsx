import Head from "./components/Head/head";
import Comment from "./components/Comment/comment";
import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://react-mini-projects-api.classbon.com/Comments/${page}`
    );
    const data = await response.json();
    setLoading(false);
    data.length == 0
      ? setLastElement(null)
      : setComments((prev) => [...prev, ...data]);
  };

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // entry is in viewport
        setPage((prev) => prev + 1);
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = observerRef.current;
    if (lastElement) {
      observer.observe(lastElement);
    }
    return () => {
      if (lastElement) {
        observer.unobserve(lastElement);
      }
    };
  }, [lastElement]);

  return (
    <>
      <Head></Head>
      <div className="container">
        {comments.map((comment) => (
          <div key={comment.id} ref={setLastElement}>
            <Comment {...comment} />
          </div>
        ))}

        {loading && <span className="loading">در حال بارگذاری ...</span>}
      </div>
    </>
  );
}

export default App;
