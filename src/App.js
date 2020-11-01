import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
      }

  render() {
    return (
      <div className="App" class="fname">
        <form>
         <label> FirstName:
    <input type="text" name="Fname" />
  </label> <br />
  <label> LastName:
    <input type="text" name="Lname" />
  </label><br />
  <label> Gender : 
    <input type="radio" name="Gender"  /> Male
    <input type="radio" name="Gender" /> Female
  </label> <br />
  <input type="submit" value="Submit" />
   </form>
      
      </div>
      
    );
  }
}

export default App;
