const storeReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MOVIES_INIT":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MOVIES_SUCCESS":
      return {
        // ...state, <------ ?!
        movies: payload,
        isLoading: false,
        isError: false,
      };
    case "FETCH_MOVIES_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    default:
      return state;
  }
};

export { storeReducer };
