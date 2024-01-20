import WalletForms from "./Components/Wallet/WalletForms";


import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home';
import News from './Components/News';
import LogIn from './Components/LogIn';
import CreateAnAccount from './Components/CreateAnAccount';

const App = () => {
  let component
  switch (window.location.pathname) {
    case "/Home":
      component = <Home></Home>
      break;
    case "/News":
      component = <News></News>
      break;
    case "/LogIn":
      component = <LogIn></LogIn>
      break;
    case "/CreateAnAccount":
      component = <CreateAnAccount></CreateAnAccount>
      break;
  }

  return (
    <>
      <NavBar />
      {component}
    </>
  );
};

export default App;
