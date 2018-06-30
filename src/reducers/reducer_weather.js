import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([ action.payload.data ]); // concat doesn't mutate state, but creates new state instance
    return [ action.payload.data, ...state ]; // replace with spread operator
  }
  return state;
}
