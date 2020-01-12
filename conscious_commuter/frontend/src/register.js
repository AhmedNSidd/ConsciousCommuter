import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

export default class Register extends React.Component{
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

    //Submit email and password to backend
	handleSubmit = event => {
		event.preventDefault();
        const {email, username, password} = this.state;
        
	}


    render(){
        const {email,username, password, fullname} = this.state;
        return(
            
            <div className = 'authcontainer2'>
                <h1 id = 'login_header'> Create an Account </h1>
                <br className = "log"></br>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor = 'username'></label>
                        <input className = 'inputBox' type = 'text'  placeholder = 'Username'  name = 'username' id ='username' value = {username} onChange = {this.handleChange} />
                        <br className = "log"></br>
                        <label htmlFor = 'fullname'></label>
                            <input className = 'inputBox' type = 'text'  placeholder = 'Full Name'  name = 'fullname' id ='fullname' value = {fullname} onChange = {this.handleChange} />
                            <br className = "log"></br>
                    <label htmlFor = 'email'></label>
                        <input className = 'inputBox' type = 'email'  placeholder = 'Email'  name ='email' id = 'email' value = {email} onChange = {this.handleChange} />
                        <br className = "log"></br>
                    <label htmlFor = 'password'></label>
                        <input className = 'inputBox' type = 'password' placeholder = 'Password' name = 'password' id = 'password' value = {password} onChange ={this.handleChange} />
                        <br className = "log"></br>
                    <button className = 'submit' id = 'proceed' children = 'Lets go!' />
                    <br className = "log"></br>
                    <p id = 'create_account'>Have an account? <Link className ='login-button' to='./login'> Login here! </Link></p>
                </form>
                </div>
                
        )
    }
}