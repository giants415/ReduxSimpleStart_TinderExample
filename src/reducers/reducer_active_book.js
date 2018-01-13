// State argument is not application state, only the state that
// this reducer is responsible for

// In ES6, the "state = null" that is passed in below, signifies
// that in the absence of defined state (in this case, a selected book)
// then state will be set to null as it would otherwise be undefined which
// will throw an error
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
