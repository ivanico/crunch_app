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
        axios.get("https://api.spoonacular.com/recipes/search?query=yogurt&apiKey=9bd87c0f8846411eb8007ed51e147ede")
        .then(res => dispatch(FetchReceptiStart(res.data.results)))
        .catch(err =>dispatch(FetchReceptiError(err)))
    }
}