import { convertEnNumToFa } from "@helpers/convertEnNumToFa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <h5>کلاسبن</h5>
      <h6>{convertEnNumToFa(1403)}</h6>
    </footer>
  );
};

export default Footer;
