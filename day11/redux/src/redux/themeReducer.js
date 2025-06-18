

const initialState = {
        theme: "light" 
}


export const themeReducer = ( state = initialState ,action) => {
    // action : toggle

    switch(action.type) {
        case "Toggle": return {theme: state.theme == "light"? "dark" : "light"} ;
        default : return state ;
    }
}