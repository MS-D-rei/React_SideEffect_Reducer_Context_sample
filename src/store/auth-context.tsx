import React from 'react';

interface AuthState {
  isLoggedIn: boolean;
}

const AuthContext = React.createContext<AuthState>({
  isLoggedIn: false,
});

export default AuthContext;
