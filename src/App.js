import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios'
import data from './weather.json'

class App extends Component {
//   componentDidMount(){
//     axios.get("https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=c3abec633ca27fe45a68efb3019866a5")
//       .then((response)=>{
//         console.log(response.data);
//     })
// 
  render() {
    // c3abec633ca27fe45a68efb3019866a5
    console.log("first", data.list[0])
    console.log("last", data.list[35])
    return (
      <div className="App">
    
          <h1 className="App-title">whather App</h1>
         

           
      </div>
    );
  }
}

export default App;
