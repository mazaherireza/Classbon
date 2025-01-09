import { createContext, useReducer, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";
import { types } from "./constant";

const AppContext = createContext();

const initialState = {
  language: localStorage.getItem("language") || "fa",
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  useEffect(() => {
    const { language } = state;
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    const $ = document;
    $.dir = language == "fa" ? "rtl" : "ltr";
  }, [state.language]);

  const changeLanguage = (language) => {
    dispatch({ type: types.CHANGE_LANGUAGE, payload: language });
  };

  return (
    <AppContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
