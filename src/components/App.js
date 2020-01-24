import React from 'react';
import { Recepti } from './Recepti';
import { connect } from 'react-redux';
import { FetchRecepti } from "../actions/ReceptiActions";
import { Switch, Route, Link} from "react-router-dom";
import { Recept } from './Recept';

export class App extends React.Component{

  componentDidMount(){
    this.props.FetchRecepti();
  }

  render(){
    return(
      <div id="app">
        <div id="header">
          <div id="container">
            <div id="main-menu">
        <Link to="/" >HOME</Link>
           </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Recepti}/>
          <Route path="/recepti/:id" component={Recept}/>
        </Switch>
       
        <h2>app</h2>
      </div>
    )
  }
}

const MapDispatchToProps = (dispatch) =>{
  return{
    FetchRecepti: () =>{
      dispatch(FetchRecepti());
    }
  };
}

App = connect(null,MapDispatchToProps)(App);