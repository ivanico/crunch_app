import axios from "axios";

export const FetchReceptiStart = (recipes) => {
    return{
        type:"FETCH_RECEPTI",
        payload: recipes
    }
}

export const FetchReceptiError = (err) => {
    return {
        type: "FETHC_RECEPTI_ERROR",
        payload:err
    }
}

export const FetchRecepti = () => {
    return dispatch => {
        axios.get("https://api.spoonacular.com/recipes/search?query=yogurt&apiKey=c0351e3b8c8547b683bfd9609f08011d")
        .then(res => dispatch(FetchReceptiStart(res.data)))
        .catch(err =>dispatch(FetchReceptiError(err)))
    }
}