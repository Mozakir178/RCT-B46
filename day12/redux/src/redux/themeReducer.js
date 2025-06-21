

const initialState = {
        theme: "light" ,
        value: 0
}


export const themeReducer = ( state = initialState ,action) => {
    // action : toggle

    switch(action.type) {
        case "Toggle": return {theme: state.theme == "light"? "dark" : "light"} ;
        case "Increament": return {...state , value : state.value + 1}
        default : return state ;
    }
}