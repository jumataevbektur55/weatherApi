const initialState = {
  world: {},
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WORLD":
      return {
        world: action.payload,
      };
    default:
      return state;
  }
};
