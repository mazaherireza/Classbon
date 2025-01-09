import { TbLanguageHiragana } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { useAppContext } from "@contexts/app/app-context";
import "./the-header.css";

const $ = document;

const TheHeader = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const { language, changeLanguage } = useAppContext();

  useEffect(() => {
    const checkIfClickedOutside = ({ target }) => {
      if (show && ref.current && !ref.current.contains(target)) setShow(false);
      return () => {
        $.removeEventListener("mousedown", checkIfClickedOutside);
      };
    };
    $.addEventListener("mousedown", checkIfClickedOutside);
  }, [show]);

  return (
    <header>
      <div className="container">
        <div className="icon-wrapper" onClick={() => setShow(true)}>
          <TbLanguageHiragana style={{ fontSize: "2rem", cursor: "pointer" }} />
          <p>{language == "fa" ? "فا" : "En"}</p>

          {show && (
            <div className="dropdown-content" ref={ref}>
              <div
                className="dropdown-item"
                style={{ fontFamily: "IranYekan" }}
                onClick={() => changeLanguage("fa")}
              >
                فا
              </div>
              <div
                className="dropdown-item"
                style={{ fontFamily: "Inter" }}
                onClick={() => changeLanguage("en")}
              >
                en
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
