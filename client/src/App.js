import React from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';

 class App extends React.Component {
  render() {
    <div className='App'>
      <header className='App-header'>
        <h1>GoodThings</h1>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/register">Register</Link></li>
          <li><Link to ="/login">Login</Link></li>
        </ul>
      </header>
      <main>
        <Route>
          <Route path="/" />
          <Route path="/register" />
          <Route path="/login" />
        </Route>
      </main>
    </div>
  }

  componentDidMount(){
    axios.get('https://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data
      }) 
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          GoodThings
        </header>
        {this.state.data}
      </div>
    );
  }
}

export default App;
