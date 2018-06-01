import React from 'react';
import axios from 'axios';
import keys from '../../config/keys';
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    inputChangeHandler = event => {

        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});

    };

    submitHandler = event => {

        event.preventDefault();
        axios
            .post(keys.userRegister, this.state)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/login');
            })
            .catch(err => {

                console.log(`Error signing up user ${err}`);

            });

    };
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your Lambda Note account
                            </p>
                            <form noValidate onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        onChange={this.inputChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        onChange={this.inputChangeHandler}
                                    />
                                    <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a profile image, use
                                        a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.inputChangeHandler}
                                    />
                                </div>
                                <button className="btn btn-info btn-block mt-4">Create Account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register