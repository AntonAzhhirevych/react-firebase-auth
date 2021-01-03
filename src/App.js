import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PrivateRoute from './PrivateRout';
import { AuthProvider } from './Auth';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
