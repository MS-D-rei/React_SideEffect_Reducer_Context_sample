import { AuthContextProvider } from '@/store/auth-context';
import MainHeader from '@/components/MainHeader/MainHeader';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <AuthContextProvider>
      <MainHeader />
      <MainContent />
    </AuthContextProvider>
  );
}

export default App;
