import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from "react-router-dom";
import Form from './components/Form';
import RegisterForm from './components/RegisterForm'
import RegisterUser from './components/RegisterUser';

function Router() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Form} />
      <Route exact path='/registerF/' component={RegisterForm} />
      <Route exact path='/registerU/' component={RegisterUser} />

    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
