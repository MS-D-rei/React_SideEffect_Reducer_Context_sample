import { StyledCardHome } from '@/components/Home/Style'

function Home(props: { onLogout: Function }) {
  return (
    <StyledCardHome>
      <h1>Welcome back!</h1>
    </StyledCardHome>
  )
}

export default Home;