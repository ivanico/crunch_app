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
        <Link to="/" >HOME</Link>
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