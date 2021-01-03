import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './base';
import { AuthContext } from './Auth';
import { provider } from './base';

import FacebookSignIn from './FacebookSignIn';

const Login = ({ history }) => {
  const [user, changeUser] = useState(null);

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;

      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (err) {
        alert(err);
      }
    },
    [history],
  );

  const handleLoginWithFacebook = () => {
    app
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        changeUser(user);
      });
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button onClick={handleLoginWithFacebook}>Login with Facebook</button>
    </div>
  );
};

export default withRouter(Login);
