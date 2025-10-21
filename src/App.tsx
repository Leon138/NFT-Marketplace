import { Route, Routes } from 'react-router-dom';
import { Container } from './components/home/container';
import { NotFoundComponent } from './components/empty-router/empty';
import { SignUpForm } from './components/account/sign-up-form/sign-up';
import { Header } from './shared/ui/header/header';
import { MainContent } from './components/main-component/main-component';
import { Footer } from './shared/ui/footer/footer';
import { ConnectWallet } from './components/connect-wallet/connect-wallet';
import { SignInForm } from './components/account/sign-in-form/sign-in';
import { Marketplace } from './components/marketplace/marketplace';
import { Form } from './components/account/form/form';
import { Main } from './components/home/main/main';
import { Rankings } from './components/rankings/rankings';

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="/" element={<Main />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/rankings" element={<Rankings />} />
          </Route>
          <Route path="/" element={<Form />}>
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/sign-in" element={<SignInForm />} />
          </Route>
          <Route path="/connect-wallet" element={<ConnectWallet />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
