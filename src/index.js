import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { SoCheesy } from './components/SoCheesy';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SoCheesy />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
