import { convertEnNumToFa } from "@helpers/convertEnNumToFa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <h4>کلاسبن</h4>
      <h4>{convertEnNumToFa(1403)}</h4>
    </footer>
  );
};

export default Footer;
