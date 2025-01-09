import { types } from "./constant";

const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHANGE_LANGUAGE:
      return {
        ...state, 
        language: payload
      };
    default:
      return state;
  }
};

export default appReducer;
