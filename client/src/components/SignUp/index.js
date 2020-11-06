import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import './signup.css';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage = () => (
    <div>
      <SignUpForm />
    </div>
);

class SignUpFormBase  extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("change");
  };

  onSubmit = event => {
    console.log("signup");
    const { email, passwordOne } = this.state;

    this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
          this.setState({ error });
        });

    // event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

    return (


          <form className="form-signin text-center" onSubmit={this.onSubmit}>
            <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
              <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

            <input
                className="form-control"
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                className="form-control"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                className="form-control"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
            />
            <input
                className="form-control"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
            />


            {error && <p>{error.message}</p>}

            <button className="btn btn-lg btn-primary btn-block"
                    disabled={isInvalid}
                    type="submit">
              Sign Up
            </button>

          </form>
    );
  }
}

const SignUpLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };