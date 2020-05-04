import React from 'react';
import GlobalStyle from './styles/global'
//import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SingIn/SignIn';
import authContext from './context/AuthContext'


const App: React.FC = () => (
  <>
  <authContext.Provider value={{name: 'Diego'}}>
    <SignIn/>
  </authContext.Provider>
  <GlobalStyle/>
  </>
)
export default App;
