import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                <button className="btn btn-info btn-block mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;