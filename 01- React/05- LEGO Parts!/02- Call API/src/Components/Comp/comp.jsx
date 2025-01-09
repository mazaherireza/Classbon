import axios from "../../../axios";
import { useEffect, useState } from "react";

const Comp = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("END_POINT");
      setList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>; // <Loading /> Component
    } else {
      return (
        <ul>
          <li>
            <a href="#">All</a>
          </li>

          {list.map((item) => {
            const { id, title } = item;
            return <li key={id}>{title}</li>;
          })}
        </ul>
      );
    }
  };
  return <div className="comp-container">{renderContent()}</div>;
};

export default Comp;
