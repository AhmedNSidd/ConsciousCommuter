import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
	}

    //Submit email and password
	handleSubmit = event => {
	event.preventDefault();
    const {email, password} = this.state;

    }

    render(){
        const {email, password} = this.state;
        return(
          <div>
            <div className = 'authcontainer'>
                <h1 style = {{color: "white"}}> Log In </h1>
                <br className = "log"></br>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor = 'email'></label>
                        <input className = 'inputBox' placeholder = 'Email' type = 'email' name ='email' id = 'email' value = {email} onChange = {this.handleChange} />
                        <br className = "log"></br>
                    <label htmlFor = 'password'></label>
                        <input className = 'inputBox' placeholder = 'Password' type = 'password' name = 'password' id = 'password' value = {password} onChange ={this.handleChange} />
                        <br className = "log"></br>
                    <button className = 'submit' children = 'Lets go!' />
                    <br className = "log"></br>
                    <p style = {{color: "white", fontSize: "18px"}} >Don't have an account? <Link style = {{color: "#B2E4FF"}} className = 'login-button' to='./signup'> Sign Up Here!</Link></p>
                </form>
                </div>
              </div>
        )
    }
}