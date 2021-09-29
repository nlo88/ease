import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  
  </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

