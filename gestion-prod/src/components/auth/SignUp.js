import React, { Component } from 'react'

class SignUp extends Component {
    // on va stocker dans le state ce que l'utilisateur tape dans l'input => class component
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    } 
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }  
    onChange = (e) => {
        console.log(e)
    }
    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
