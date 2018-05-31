import React from 'react';
import axios from 'axios';
import keys from '../../config/keys';
class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };
    inputChangeHandler = event => {

        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});

    };

    submitHandler = event => {
        event.preventDefault();

        axios
            .post(keys.userLoginLocal, this.state)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('lambda-note-token', response.data.token);

                this.props.history.push('/notes');
            })
            .catch(err => {
                console.log(`error login ${err}`);
                // localStorage.removeItem('lambda-note-token');

            });
    };
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <form noValidate onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.inputChangeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.inputChangeHandler}
                                    />
                                </div>
                                <button className="btn btn-info btn-block mt-4" >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;