export  function changeLanguage(language) {     
     return {
          type: 'CHANGE_LANGUAGE',
          payload: language
     }
}

export function changeLoader(data) {
     return {
          type: 'CHANGE_LOADER',
          payload: data
     }
}