import React from 'react';
import GlobalStyle from './styles/global'
//import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SingIn/SignIn';
import AppProvider from './hooks/index'

const App: React.FC = () => (
  <>
  <AppProvider>
    <SignIn/>
  </AppProvider>

  <GlobalStyle/>
  </>
)
export default App;
