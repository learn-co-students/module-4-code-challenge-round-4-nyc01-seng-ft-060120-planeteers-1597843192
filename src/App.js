import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

   state = {
    planeteers: [],
    searchResult: ""
  }

  componentDidMount(){
        fetch("http://localhost:4000/planeteers")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => this.setState({planeteers: data}))
      }

    



  render(){
    console.log(this.state.planeteers)
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
