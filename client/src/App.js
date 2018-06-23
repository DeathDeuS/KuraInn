import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Presentation from './layout/Presentation';


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

          <Route exact path="/" component={Presentation} />
          {/* <Route path="/rooms" component={Rooms} />
          <Route path='/activities' component={Activities}/>
          <Route path='/mangareva' component={Mangareva}/> */}
              
            
        </Layout>

      </BrowserRouter>

      
    );
  }
}

export default App;
