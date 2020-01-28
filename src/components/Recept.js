import React from "react";
import axios from "axios";


export class Recept extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            recipeInfos: [],
            recipeImage: [],
            instructions: [],
            title: [],
            readyInMinutes:[]


        }
    }
    
    FetchRecipeInfo = () => {
        axios.get("https://api.spoonacular.com/recipes/"+ this.props.match.params.id +"/information?includeNutrition=false&apiKey=9bd87c0f8846411eb8007ed51e147ede")
            .then(res => this.setState({
                 recipeInfos: res.data.extendedIngredients,
                 recipeImage: res.data.image,
                 instructions: res.data.analyzedInstructions.length > 0 && res.data.analyzedInstructions[0].steps,
                 title:res.data.title,
                 readyInMinutes:res.data.readyInMinutes
                }))
            .catch(err => console.log(err))
    }



    componentDidMount() {
        this.FetchRecipeInfo();
    }
    
    render() {
        return(
            this.state.recipeInfos.length > 0 ?
            <div id="recept">
                <div id="recepti-slika">
                <img  src={this.state.recipeImage} />
                </div>
                <h2 className="how-to">Descripton</h2>
                <div id="descripton">
                 <h2 className="description"><h1>{this.state.title}</h1>
                 <p><i class="far fa-star"></i>4.1 | 204 reviews<i class="far fa-bookmark"></i></p>
                 <i class="far fa-clock"></i>Total prep time: {this.state.readyInMinutes}min</h2>
                </div>
                <h2 className="how-to">Ingredients</h2>
                <div id="ingredients">
                <table id="ing-table">
                    {this.state.recipeInfos.map(recipeInfo => {
                        return(
                        <tr key={recipeInfo.id} id="recept-list-ingredients"><th>{recipeInfo.amount}</th><td className="ing-amount">{recipeInfo.unit} {recipeInfo.originalName}</td></tr>
                    )
                })}
                </table>
                </div>
                <h2 className="how-to">How to make it</h2>
                <div id="steps">
                <ul id="recept-list-steps">
                    {this.state.instructions.map(instruction => {
                        return(
                            <li key={instruction.number}><h2 className="step">Step {instruction.number}</h2>{instruction.step}</li>
                        )
                    })}
                </ul>
                </div>

            </div> : <h2>Loading Recipe</h2>
        )
    }
}