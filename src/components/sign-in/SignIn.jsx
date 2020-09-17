import React from 'react';

import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-button/CustomBtn';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, BtnBarContainer } from './signIn.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have and account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <BtnBarContainer>
            <CustomBtn type='submit'>sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomBtn>
          </BtnBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
