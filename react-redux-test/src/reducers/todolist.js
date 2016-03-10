const initialState = [
  {
    text: 'initial',
    complete: false
  }
]

function todolistReducer(state = initialState, action){
  switch(action.type){
    case 'add':
      return [
        {
          text: action.text,
          complete: false
        },
        ...state
      ];
    default:
      return state;
  }
}

module.exports = todolistReducer;