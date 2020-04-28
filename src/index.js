
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';


const App = () => {
    return (
    <div className="maincontainer">     
        <Login />  
       <Register />    
    </div> 
    );
};

ReactDOM.render(
    <App />, document.getElementById('root')
);