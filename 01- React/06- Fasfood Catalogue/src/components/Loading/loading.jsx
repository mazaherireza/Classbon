import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <h4 className="title">Loading</h4>
      <div className="loader">
        <span className="element"></span>
        <span className="element"></span>
        <span className="element"></span>
      </div>
    </div>
  );
};

export default Loading;
