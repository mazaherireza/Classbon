import TheHeader from "./components/TheHeader/the-header";
import TheMain from "./components/TheMain/the-main";
import { useEffect } from "react";
import { useAppContext } from "@contexts/app/app-context";
import "./core/i18n";

function App() {
  const { language } = useAppContext();
  useEffect(() => {
    const $ = document;
    const head = $.head;
    const link = $.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${language}.css`;
    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [language]);
  return (
    <>
      <TheHeader></TheHeader>
      <TheMain></TheMain>
    </>
  );
}

export default App;
