import { PRESS_BUTTON } from '../actions/types';

const initialState = {
  helloText: 'Hello!',
  buttonPressed: false,
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRESS_BUTTON:
      return { ...state, buttonPressed: true };
    default:
      return state;
  }
};

export default helloReducer;
