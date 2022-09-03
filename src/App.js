import React, { useState } from 'react';
import Login from './login/Login';
import NavbarComponent from './navbar-components/NavbarComponent';

function App() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString !== null) {
      const userToken = JSON.parse(tokenString);
      return userToken.jwttoken;
    }
  }
  const [token, setToken] = useState(getToken());
  if (!token) {
    return (
      <div className="text-center">
        <Login setToken={setToken} />
      </div>
    );
  }

  return (
    <div className="text-center">
      <NavbarComponent />
    </div>
  );
}

export default App;
