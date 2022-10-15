import { StyledHeader, StyledH1 } from '@/components/MainHeader/MainHeaderStyle'
import Navigation from '@/components/MainHeader/Navigation';

function MainHeader(props: { isAuthenticated: boolean, onLogout: React.MouseEventHandler<HTMLButtonElement> }) {
  return (
    <StyledHeader>
      <StyledH1>A Typical Page</StyledH1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </StyledHeader>
  )
}

export default MainHeader;