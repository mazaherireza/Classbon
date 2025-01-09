const storeReducer = (state, { type, payload }) => {
  switch (type) {
    case "STORIES_FETCH_INIT":
      return {
        ...state,
        isLoading: true,
      };
    case "STORIES_FETCH_SUCCESS":
      return {
        //...state, <-------- ?!
        stories: payload,
        isLoading: false,
        isError: false,
      };
    case "STORIES_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        stories: state.stories.filter((movie) => movie.id !== payload),
      };
    default:
      return state;
  }
};

export { storeReducer };
