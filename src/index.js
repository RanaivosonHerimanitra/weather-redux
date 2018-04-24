import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
//chercher app.js partout dans le doc pour l'inserer ici
//index html et js sont obligatoires où
//index html doit se trouver dans public/
import App from './components/app';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
