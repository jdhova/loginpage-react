import React from 'react';

const register = () => {
    return (
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
    );
};

export default register;