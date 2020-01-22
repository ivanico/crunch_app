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
        axios.get("https://api.spoonacular.com/recipes/search?query=yogurt&apiKey=592e189ab4204c25ba8eed20aea0d155")
        .then(res => dispatch(FetchReceptiStart(res.data.results)))
        .catch(err =>dispatch(FetchReceptiError(err)))
    }
}