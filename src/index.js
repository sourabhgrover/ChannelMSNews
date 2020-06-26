import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from "./context/auth";


ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={false}>
      <Router>
        <App />
      </Router>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
