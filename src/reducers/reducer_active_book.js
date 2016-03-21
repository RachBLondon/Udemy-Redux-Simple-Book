// state here only refers to books, ie the state that is broken down to this reducers
export default function( state = null, action ){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
