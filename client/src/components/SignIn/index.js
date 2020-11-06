// import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from 'recompose';
//
// import { SignUpLink } from '../SignUp';
// import { withFirebase } from '../Firebase';
// import * as ROUTES from '../../constants/routes';
//
// const SignInPage = () => (
//     <div>
//       <h1>SignIn</h1>
//       <SignInForm />
//       <SignUpLink />
//     </div>
// );
//
// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   error: null,
// };
//
// class SignInFormBase extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { ...INITIAL_STATE };
//   }
//
//   onSubmit = event => {
//     const { email, password } = this.state;
//
//     this.props.firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         // .then(() => {
//         //   this.setState({ ...INITIAL_STATE });
//         //   this.props.history.push(ROUTES.HOME);
//         // })
//         .catch(error => {
//           this.setState({ error });
//         });
//
//     // event.preventDefault();
//   };
//
//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };
//
//   render() {
//     const { email, password, error } = this.state;
//
//     const isInvalid = password === '' || email === '';
//
//     return (
//         <form onSubmit={this.onSubmit}>
//           <input
//               name="email"
//               value={email}
//               onChange={this.onChange}
//               type="text"
//               placeholder="Email Address"
//           />
//           <input
//               name="password"
//               value={password}
//               onChange={this.onChange}
//               type="password"
//               placeholder="Password"
//           />
//           <button disabled={isInvalid} type="submit">
//             Sign In
//           </button>
//
//           {error && <p>{error.message}</p>}
//         </form>
//     );
//   }
// }
//
// const SignInForm = compose(
//     withRouter,
//     withFirebase,
// )(SignInFormBase);
//
// export default SignInPage;
//
// export { SignInForm };


import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'

const Signin = () => {


  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    handleSignin()

  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
      <form onSubmit={handleSubmit}>
        {/* replace the div tags with a form tag */}
        Signin
        {/* make inputs  */}
        <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
        <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
        <button>signin</button>
        {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
      </form>
  );
};

export default Signin;