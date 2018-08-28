// These are all of the modules that are being imported
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel';

import registerServiceWorker from './registerServiceWorker';
// Importing styles to target this js file in particular.
import './index.css';

// Rendering the kennel and all its item to the DOM.
ReactDOM.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root'));

registerServiceWorker();