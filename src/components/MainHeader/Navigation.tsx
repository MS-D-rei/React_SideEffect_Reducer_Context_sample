import React from 'react';
import {
  StyledUL,
  StyledLI,
  StyledA,
  StyledNavButton,
} from '@/components/MainHeader/NavigationStyle';
import AuthContext from '@/store/auth-context';

function Navigation(props: {
  onLogout: React.MouseEventHandler<HTMLButtonElement>;
}) {

  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav>
            <StyledUL>
              {ctx.isLoggedIn && (
                <React.Fragment>
                  <StyledLI>
                    <StyledA href="/">Users</StyledA>
                  </StyledLI>
                  <StyledLI>
                    <StyledA href="/">Admin</StyledA>
                  </StyledLI>
                  <StyledLI>
                    <StyledNavButton onClick={props.onLogout}>
                      Logout
                    </StyledNavButton>
                  </StyledLI>
                </React.Fragment>
              )}
            </StyledUL>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Navigation;
