import React, { useContext } from 'react';
import { StyledCardHome } from '@/components/Home/Style'
import { StyledButton } from '../UI/Button/StyledButton';
import { useAuthCtx } from '@/store/auth-context';

function Home() {
  const authCtx = useAuthCtx();
  return (
    <StyledCardHome>
      <h1>Welcome back!</h1>
      <StyledButton onClick={authCtx.onLogout}>Logout</StyledButton>
    </StyledCardHome>
  )
}

export default Home;