import React from "react";
import axios from "axios";


export class Recept extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            recipeInfos: [],
            recipeImage: [],
            instructions: []

        }
    }
    
    FetchRecipeInfo = () => {
        axios.get("https://api.spoonacular.com/recipes/"+ this.props.match.params.id +"/information?includeNutrition=false&apiKey=592e189ab4204c25ba8eed20aea0d155")
            .then(res => this.setState({
                 recipeInfos: res.data.extendedIngredients,
                 recipeImage: res.data.image,
                 instructions: res.data.analyzedInstructions.length > 0 && res.data.analyzedInstructions[0].steps
                }))
            .catch(err => console.log(err))
    }



    componentDidMount() {
        this.FetchRecipeInfo();
    }
    
    render() {
        return(
            this.state.recipeInfos.length > 0 ?
            <div>
                <img src={this.state.recipeImage} />
                <h2>Ingredients</h2>
                <ul>
                    {this.state.recipeInfos.map(recipeInfo => {
                        return(
                            <li key={recipeInfo.id}>{recipeInfo.original}</li>
                    )
                })}
                </ul>
                <h2>How to make it</h2>
                
                <ul>
                    {this.state.instructions.map(instruction => {
                        return(
                            <li key={instruction.number}>{instruction.step}</li>
                        )
                    })}
                </ul>


            </div> : <h2>Loading Recipe</h2>
        )
    }
}