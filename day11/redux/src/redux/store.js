
// if your file is completely js code, then prefer .js extension

import {createStore , combineReducers} from "redux" ;
import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

// createStore will be creating a centralized container

const rootReducer = combineReducers({
    counter: counterReducer ,
    theme : themeReducer 
})


"counter/counterReducer"

// rootReducer.counter.count -> count 
// rootReducer.theme.theme -> theme 
export const store = createStore(rootReducer ) ; // this will be taking reducers state =  {count : 0}

// created store , keep possible actions, reducer

// store -> state = {
//     counter : {count : 0} , 
//     theme : {theme: "light"},
//     card : {items :[array of items inside the card]},
//     auth: {isAuthenticated: false , user : null}
// }

//  const count = useSelector((state) => state.count) ;

// state.counter.count

