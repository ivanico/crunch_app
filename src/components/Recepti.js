import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


export class Recepti extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div id="recepti-top">
        <div id="slider">
        <h2>Pause On Hover</h2>
        {this.props.recipes.length > 0 ?
        <Slider {...settings}>
          {this.props.recipes.slice(5,10).map(recipe =>{
            return(
            <div key={recipe.id}><Link id="a-link" to={"recepti/" + recipe.id}><img class="sliki" src={"https://spoonacular.com/recipeImages/"+recipe.image} />{recipe.title}</Link></div>
            )
          })}
        </Slider> : <h3>Loading Slider</h3>  
        }
        
        </div>
        <div id="recepti-mid">
          {this.props.recipes.length > 0 ?
          <ul id="recepti-list">
            
              {this.props.recipes.map(recipe =>{
                return(
                  <li class="recepti-li" key={recipe.id}><Link id="a-link" to={"recepti/" + recipe.id}><img class="sliki" src={"https://spoonacular.com/recipeImages/"+recipe.image} />{recipe.title}<hr/></Link><h3>Total prep time: {recipe.readyInMinutes} min Servings: {recipe.servings}</h3></li>
                )
              })}
            
          </ul> : <h2>Loading Recipes</h2>
          }
        </div>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return{
    recipes: state.ReceptiReducer.recipes,
    receptiError: state.ReceptiReducer.error
  };
}

Recepti = connect(MapStateToProps, null)(Recepti);