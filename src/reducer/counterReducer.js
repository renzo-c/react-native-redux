import { INCREMENT, DECREMENT, CLEAR, SET_COUNTER } from '../actions/types';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return 0;
    case SET_COUNTER:
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
