// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import { withFirebase } from '../Firebase';
// import { compose } from 'recompose';
// import './signup.css';
//
// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null,
// };
//
// const SignUpPage = () => (
//     <div>
//       <SignUpForm />
//     </div>
// );
//
// class SignUpFormBase  extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ...INITIAL_STATE };
//   }
//
//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//     // console.log("change");
//   };
//
//   onSubmit = event => {
//     console.log("signup");
//     const { email, passwordOne } = this.state;
//
//     this.props.firebase
//         .doCreateUserWithEmailAndPassword(email, passwordOne)
//         .then(authUser => {
//           this.setState({ ...INITIAL_STATE });
//           this.props.history.push(ROUTES.HOME);
//         })
//         .catch(error => {
//           this.setState({ error });
//         });
//
//     // event.preventDefault();
//
//       //
//       // // Add a new message entry to the database.
//       // this.props.firebase.firestore().collection('messages').add({
//       //   name: "getUserName()",
//       //   text: "messageText",
//       //   profilePicUrl: "getProfilePicUrl()",
//       //   timestamp: this.props.firebase.firestore.FieldValue.serverTimestamp()
//       // }).catch(function(error) {
//       //   console.error('Error writing new message to database', error);
//       // });
//
//   }
//
//   render() {
//     const {
//       username,
//       email,
//       passwordOne,
//       passwordTwo,
//       error,
//     } = this.state;
//
//     const isInvalid =
//         passwordOne !== passwordTwo ||
//         passwordOne === '' ||
//         email === '' ||
//         username === '';
//
//     return (
//
//
//           <form className="form-signin text-center" onSubmit={this.onSubmit}>
//             <img className="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
//               <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
//
//             <input
//                 className="form-control"
//                 name="username"
//                 value={username}
//                 onChange={this.onChange}
//                 type="text"
//                 placeholder="Full Name"
//             />
//             <input
//                 className="form-control"
//                 name="email"
//                 value={email}
//                 onChange={this.onChange}
//                 type="text"
//                 placeholder="Email Address"
//             />
//             <input
//                 className="form-control"
//                 name="passwordOne"
//                 value={passwordOne}
//                 onChange={this.onChange}
//                 type="password"
//                 placeholder="Password"
//             />
//             <input
//                 className="form-control"
//                 name="passwordTwo"
//                 value={passwordTwo}
//                 onChange={this.onChange}
//                 type="password"
//                 placeholder="Confirm Password"
//             />
//
//
//             {error && <p>{error.message}</p>}
//
//             <button className="btn btn-lg btn-primary btn-block"
//                     disabled={isInvalid}
//                     type="submit">
//               Sign Up
//             </button>
//
//           </form>
//     );
//   }
// }
//
// const SignUpLink = () => (
//     <p>
//       Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//     </p>
// );
//
// const SignUpForm = compose(
//     withRouter,
//     withFirebase,
// )(SignUpFormBase);
//
// export default SignUpPage;
//
// export { SignUpForm, SignUpLink };


import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'
import {withRouter} from 'react-router-dom'

const Signup = (props) => {


  const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    //wait to signup
    await handleSignup()
    //push home
    props.history.push('/')
  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
      <form onSubmit={handleSubmit}>
        {/* replace the div tags with a form tag */}
        Signup
        {/* make inputs  */}
        <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
        <button>signup</button>
        {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
      </form>
  );
};

export default withRouter(Signup);