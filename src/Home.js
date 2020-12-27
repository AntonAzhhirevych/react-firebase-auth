import React from 'react';

import app from './base';

const Home = () => {
  const handleSignOut = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        console.log('Successfully signed out.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  );
};

export default Home;
