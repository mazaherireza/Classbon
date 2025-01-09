import { types } from "./constant";

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case types.CHANGE_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
