import { createContext, useReducer, useContext, useEffect } from "react";
import appReducer from "./app-reducer";
import { types } from "./constant";

const AppContext = createContext();

const initialState = {
  language: localStorage.getItem("language") || "fa",
  theme: localStorage.getItem("theme") || "light",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // const { i18n } = useTranslation();

  useEffect(() => {
    // i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.dir = state.language == "fa" ? "rtl" : "ltr";
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const changeLanguage = (language) => {
    dispatch({ type: types.CHANGE_LANGUAGE, payload: language });
  };

  const changeTheme = (theme) => {
    dispatch({ type: types.CHANGE_THEME, payload: theme });
  };

  return (
    <AppContext.Provider value={{ ...state, changeLanguage, changeTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
