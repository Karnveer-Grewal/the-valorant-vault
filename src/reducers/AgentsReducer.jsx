export const agentsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_AGENTS':
      return action.payload;

    default:
      return state;
  }
};
