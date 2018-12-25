const counterInitial = {
  sum: 0,
  incClicked: 0,
  decClicked: 0
};
export function counter(state = counterInitial, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, sum: state.sum + 1, incClicked: state.incClicked + 1 };
    case "DECREMENT":
      return { ...state, sum: state.sum - 1, decClicked: state.decClicked + 1 };
    default:
      return state;
  }
}

const notifyInitial = {
  sum: 0,
  incClicked: 0,
  decClicked: 0
};
export function notify(state = notifyInitial, action) {
  switch (action.type) {
    case "NOTIFY":
      state = { ...action.data };
      return state;
    default:
      return state;
  }
}
