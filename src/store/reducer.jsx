const InitialState = {
     lang : 'en',
     isLoading : false
}

function languageReducer(state = InitialState, action) {
     switch (action.type) {
          case 'CHANGE_LANGUAGE':
               return {
                    ...state,
                    lang: action.payload
               }
          case 'CHANGE_LOADER':
               return {
                    ...state,
                    isLoading: action.payload
               }
          default:
               return state;
     }
}

export default languageReducer;