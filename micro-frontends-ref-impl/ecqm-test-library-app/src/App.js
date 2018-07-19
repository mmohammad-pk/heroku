import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <pk-bonnie-testmeasure measures='[{
        "title": "CMS122v7", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "NEW", "value": 0, "numerator": 13, "denominator": 5
    },
    {
        "title": "CMS122v8", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "FAIL", "value": 50, "numerator": 13, "denominator": 5
    },
    {
        "title": "CMS122v9", "testmeasure": "Diabetes: Hemoglobin A1c (HbA1c) Poor Control (> 9%)", "status": "PASS", "value": 60, "numerator": 13, "denominator": 5
    }]'></pk-bonnie-testmeasure>
    );
  }
}

export default App;
