import React, { Component } from 'react'
import './SignIn.styles.scss';
import FormInput from '../FormInput/FormInput.component';
import Button from '../Button/Button.component';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '',password: ''})
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    e.preventDefault();
    const { type, value } = e.target;

    this.setState({[type]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            label="Password"
            required
          />
          <div className="btn-group">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              {''}
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}
