import React from 'react';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }

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
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
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
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password2"
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