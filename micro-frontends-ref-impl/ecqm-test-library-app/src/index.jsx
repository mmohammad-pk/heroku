import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './routes'
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import 'ecqm-uberbundle/dist/uberbundle.js';

const renderApp = (Component) => {
  ReactDOM.render(
    
    <pk-bonnie-testmeasure measures='[{
      "title": "CMS122v7", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "NEW", "value": 0, "numerator": 13, "denominator": 5
  },
  {
      "title": "CMS122v8", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "FAIL", "value": 50, "numerator": 13, "denominator": 5
  },
  {
      "title": "CMS122v9", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "PASS", "value": 60, "numerator": 13, "denominator": 5
  }]'></pk-bonnie-testmeasure>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     renderApp(require('./routes').default);
//   })
// }
