import {createStore , applyMiddleware } from "redux" ;
import {thunk} from "redux-thunk";

const initialState = {
    users: [] ,
    loading: false ,
    error: null ,
    value: 0
}


function reducer(state=initialState , action ){

    switch(action.type){
        case "Pending" : return {...state , loading : true , error : null} ;
        case "Success" : return {...state , loading : false, error : null , users: action.payload};
        case "Failed" : return {...state , loading : false , error : action.payload};
        default : return state ;
    }
}


const store = createStore(reducer , applyMiddleware(thunk));
export default store ;