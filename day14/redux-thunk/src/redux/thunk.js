

// will fetch the data using thunk -> a function that will return another function 

export function fetchUsers() {
    return async (dispatch) => {
        // waiting 
        dispatch({type: "Pending"});
        try {
            const res = await fetch("https://dummyjson.com/users?limit=5");
            const data = await res.json() ;
            dispatch({type: "Success" , payload: data.users })
        } catch (error) {
            dispatch({type: "Failed" , payload: error.message})
        }
    
    }
}


// fetchUsers -> it will return a function -> how many parameter 