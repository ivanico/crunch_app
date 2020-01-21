import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Recept } from "./Recept";

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
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
        <div id="recepti-mid">
          {this.props.recipes.length > 0 ?
          <ul>
            
              {this.props.recipes.map(recipe =>{
                return(
                  <li key={recipe.id}><Link to={"recepti/" + recipe.id}><img src={recipe.image} /><hr/>{recipe.title}</Link></li>
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