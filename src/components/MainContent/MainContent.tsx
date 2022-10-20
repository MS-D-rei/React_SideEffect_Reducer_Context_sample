import { useAuthCtx } from '@/store/auth-context';
import Login from '@/components/Login/Login';
import Home from '@/components/Home/Home';

function MainContent() {
  const authCtx = useAuthCtx();
  return (
    <main>
      {!authCtx.isLoggedIn && <Login />}
      {authCtx.isLoggedIn && <Home />}
    </main>
  );
}

export default MainContent;
