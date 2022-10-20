import { StyledHeader, StyledH1 } from '@/components/MainHeader/MainHeaderStyle'
import Navigation from '@/components/MainHeader/Navigation';

function MainHeader() {
  return (
    <StyledHeader>
      <StyledH1>A Typical Page</StyledH1>
      <Navigation  />
    </StyledHeader>
  )
}

export default MainHeader;