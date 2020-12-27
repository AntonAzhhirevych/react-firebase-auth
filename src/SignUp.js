import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from './base';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        await app.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (err) {
        alert(err);
      }
    },
    [history],
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
