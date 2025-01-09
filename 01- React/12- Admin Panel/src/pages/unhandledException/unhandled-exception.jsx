import "./unhandled-exception.css";

const UnhandledException = () => {
  return (
    <div className="unhandled-exception-wrapper">
      <h2>500</h2>
      <h4>امکان پردازش خطای شما از سمت سرور وجود ندارد.</h4>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
};

export default UnhandledException;
