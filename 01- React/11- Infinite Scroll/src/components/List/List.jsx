import { useState, useEffect } from "react";
import Comment from "../Comment/comment";
import "./List.css";

const List = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastElement, setLastElement] = useState(null);
  const [page, setPage] = useState(1);

  const refObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  });

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://react-mini-projects-api.classbon.com/Comments/${page}`
    );
    const data = await response.json();
    data.length === 0
      ? setLastElement(null)
      : setComments((prevComments) => [...prevComments, ...data]);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    if (lastElement) refObserver.observe(lastElement);

    return () => {
      if (lastElement) refObserver.unobserve(lastElement);
    };
  }, [lastElement]);

  return (
    <div className="list-wrapper">
      {!loading ? (
        comments.map((comment) => (
          <div key={comment.id} ref={setLastElement}>
            <Comment {...comment}></Comment>
          </div>
        ))
      ) : (
        <p className="loading">Load ...</p>
      )}
    </div>
  );
};

export default List;
