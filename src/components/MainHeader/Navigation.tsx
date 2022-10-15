import React from 'react';
import {
  StyledUL,
  StyledLI,
  StyledA,
  StyledNavButton,
} from '@/components/MainHeader/NavigationStyle';

function Navigation(props: { isLoggedIn: boolean; onLogout: Function }) {
  const loginListItems = props.isLoggedIn && (
    <React.Fragment>
      <StyledLI>
        <StyledA href="/">Users</StyledA>
      </StyledLI>
      <StyledLI>
        <StyledA href="/">Admin</StyledA>
      </StyledLI>
      <StyledLI>
        <StyledNavButton onClick={props.onLogout}>Logout</StyledNavButton>
      </StyledLI>
    </React.Fragment>
  );

  return (
    <nav>
      <StyledUL>
        {loginListItems}
      </StyledUL>
    </nav>
  );
}

export default Navigation;
