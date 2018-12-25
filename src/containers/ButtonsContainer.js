import { connect } from "react-redux";

import { increment, decrement, notify } from "../actions";
import Buttons from "../components/Buttons";

const sumMultiplyByIncClick = (sum, incClick) => {
  return sum * incClick;
};

const mapState = state => ({
  notifySum: state.notify.sum,
  notifyIncClick: state.notify.incClicked,
  notifyDecClick: state.notify.decClicked,
  multiply: sumMultiplyByIncClick(state.notify.sum, state.notify.incClicked),
  counter: state.counter
});

const mapDispatch = { increment, decrement, notify };

export default connect(
  mapState,
  mapDispatch
)(Buttons);
