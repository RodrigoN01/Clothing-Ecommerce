import React from 'react';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

import { SignInSignUpContainer } from './signInAndSignUpPage.styles';

const SignInAndSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
);

export default SignInAndSignUpPage;
