

const initialState = {
   count : 0 ,
   //100 more keys 
   

   //information 

   
}

// 10 more reducer 

export const counterReducer = (state = initialState , action ) => {
    // increament , decreament , reset  // action.type -> {type: increament} , {type: decreament} , {type: resent}
    switch (action.type){
        case "Increament" : return {...state, count: state.count + 1} // number
        case "Decreament" : return {...state, count: state.count - 1}
        case "Reset" : return {...state , count : 0} 
        case "Fetch" : return () => {
        }
        default : return state ;
    }
}


// CounterContext -> same 
// ThemeContext

function test(number = 5) {
    console.log(number) ; // number will get printed
}

test(10);// 10
test() ; // 5