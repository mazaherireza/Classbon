import Header from "./components/Header/header";
import { useAppContext } from "@contexts/app/app-context";
import { useEffect } from "react";

const $ = document;
const head = $.head;
const link = $.createElement("link");
link.rel = "stylesheet";

function App() {
  const { theme } = useAppContext();

  useEffect(() => {
    link.href = `/css/${theme}.css`;
    head.appendChild(link);

    return () => {
      head.removeChild(link);
    };
  }, [theme]);

  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
