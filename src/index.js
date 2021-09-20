import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import { SoCheesy } from './components/SoCheesy';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <SoCheesy />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
