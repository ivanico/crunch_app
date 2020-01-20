const initialState = {
    recipes: [],
    error: ""
}

const ReceptiReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_RECEPTI" :
            return {
                ...state,
                recipes: action.payload
            }
        case "FETCH_RECEPTI_ERROR" :
            return{      
                ...state,
                error: action.payload        
                }
        default: return state;
    }
}
export default ReceptiReducer;