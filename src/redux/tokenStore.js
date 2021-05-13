function tokenStore(state = [], action) {
  switch (action.type) {
    case "SET_USER":
      return (state[0] = action.payload);

    default:
      return state;
  }
}

export default tokenStore;
