import img from "../../assets/pizza.jpg";
import "./head.css";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";

const PRICE = 158000;
const Head = () => {
  return (
    <div className="head-wrapper">
      <img src={img} alt="Pizza"></img>
      <div className="info">
        <h3>پیتزا استیک (یک نفره)</h3>
        <h5>ترکیبات:</h5>
        <p>
          خمیر پیتزا کلاسیک {convertEnNumToFa(26)} سانتی‌متری، استیک فیله گوشت،
          پنیر، قارچ، فلفل دلمه‌ای، سس کچاپ مخصوص
        </p>

        <p className="price">
          قیمت: {convertEnNumToFa(PRICE.toLocaleString())} تومان
        </p>
      </div>
    </div>
  );
};

export default Head;
