import React, { useEffect, useState } from 'react';

interface AuthState {
  isLoggedIn: boolean;
  onLogout: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onLogin: Function | undefined;
}

const AuthContext = React.createContext<AuthState>({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLogggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthCtx = () => {
  const ctx = React.useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error('useAuthCtx must be used within a AuthContextProvider');
  }

  return ctx;
};
