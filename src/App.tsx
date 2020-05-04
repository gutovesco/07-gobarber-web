import React from 'react';
import GlobalStyle from './styles/global'
//import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SingIn/SignIn';
import {AuthProvider} from './hooks/AuthContext'


const App: React.FC = () => (
  <>
  <AuthProvider>
    <SignIn/>
  </AuthProvider>
  <GlobalStyle/>
  </>
)
export default App;
