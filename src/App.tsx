import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/home'
import { NotFoundComponent } from './components/empty-router/empty'
import { SignUpForm } from './components/account/sign-up-form/sign-up'
import { Header } from './components/home/header/header'
import { MainContent } from './components/main-component/main-component'
import { Footer } from './components/home/footer/footer'
import { ConnectWallet } from './components/connect-wallet/connect-wallet'
import { SignInForm } from './components/account/sign-in-form/sign-in'


function App() {

  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/connect-wallet' element={<ConnectWallet />} />
          <Route path='*' element={<NotFoundComponent />} /> 
        </Routes>
      </MainContent> 
      <Footer />
    </>
  )
}

export default App
