import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './layout/Home';


class App extends Component {
  render() {
    return (

        /*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div> */


      <BrowserRouter>
                  
        <Layout>

          <Route exact path="/" component={Home} />
          {/* <Route path="/rooms" component={Rooms} />
          <Route path='/activities' component={Activities}/>
          <Route path='/mangareva' component={Mangareva}/> */}
              
            
        </Layout>

      </BrowserRouter>

      
    );
  }
}

export default App;
