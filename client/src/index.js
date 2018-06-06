import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebook from '@fortawesome/fontawesome-free-solid/faFacebook';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'; */

//import { LocalizeProvider } from "react-localize-redux";



// React Localize Redux
/* const App = props => (
    <LocalizeProvider>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </LocalizeProvider>
  ); */


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
