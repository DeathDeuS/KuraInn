import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Presentation from './layout/Presentation';
import Bungalow from './layout/Bungalow';
import Activites from './layout/Activites';
import Mangareva from './layout/Mangareva';



class App extends Component {

  render() {
    
    return (

      <BrowserRouter>
                  
        <Layout>

          <Route exact path="/" component={Presentation} />
          <Route path="/rooms" component={Bungalow} />
          <Route path='/activities' component={Activites}/>
          <Route path='/mangareva' component={Mangareva}/>
              
            
        </Layout>

      </BrowserRouter>

      
    );
  }
}

export default App;
