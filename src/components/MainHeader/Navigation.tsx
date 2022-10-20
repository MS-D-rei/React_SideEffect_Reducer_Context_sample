import React, { useContext } from 'react';
import {
  StyledUL,
  StyledLI,
  StyledA,
  StyledNavButton,
} from '@/components/MainHeader/NavigationStyle';
import { useAuthCtx } from '@/store/auth-context';

function Navigation() {
  const authCtx = useAuthCtx();
  return (
    <nav>
      <StyledUL>
        {authCtx.isLoggedIn && (
          <React.Fragment>
            <StyledLI>
              <StyledA href="/">Users</StyledA>
            </StyledLI>
            <StyledLI>
              <StyledA href="/">Admin</StyledA>
            </StyledLI>
            <StyledLI>
              <StyledNavButton onClick={authCtx.onLogout}>Logout</StyledNavButton>
            </StyledLI>
          </React.Fragment>
        )}
      </StyledUL>
    </nav>
  );
}

export default Navigation;
