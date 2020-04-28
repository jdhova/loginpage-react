
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


// const style = {color : 'black', padding: '30px'}

const App = () => {
    return (
    <div className="maincontainer">  
        <div className = 'container'>
            <form action="/action_page.php">
                <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control"placeholder="Enter email" id="email" />
                </div>

                <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                </div>

                <div className="form-group form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" /> Remember me
                </label>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        <div className = "container">
            <form action = "/action_page.php">
                <div className="form-group">
                <label htmlFor="email">First Name:</label>
                <input type="email" className="form-control"placeholder="First Name" id="email" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Last Name:</label>
                <input type="email" className="form-control"placeholder="Last Name" id="email" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control"placeholder="Enter email" id="email" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Password:</label>
                <input type="email" className="form-control"placeholder="Enter Password" id="email" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Password 2:</label>
                <input type="email" className="form-control"placeholder="Enter Password2" id="email" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
        </div>
    </div> 
    );
};

ReactDOM.render(
    <App />, document.getElementById('root')
);