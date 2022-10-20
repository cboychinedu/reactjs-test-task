// Importing the necessary modules 
import Dashboard from './Components/Dashboard';
import React, { Component } from "react"; 

// Creating the ui page 
class App extends Component {
  // Render 
  render() {
    return(
      <React.Fragment> 
         <Dashboard /> 
      </React.Fragment>
    )
  }
}

export default App;
