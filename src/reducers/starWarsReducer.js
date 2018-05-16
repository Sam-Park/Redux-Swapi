import { FETCHING, FETCHED, ERRORS } from '../actions';
const initialState = {
  chars: [],
  fetching: false,
  error: null,
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED:
      return Object.assign({}, state, {
        chars: state.chars.concat(action.payload),
        fetching: false
      });
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case ERRORS:
      return Object.assign({}, state, { error: console.error()});
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
