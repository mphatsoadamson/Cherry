
import {Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import Product from './pages/Products/Product';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import UserProfile from './pages/UserProfile/UserProfile';


function App() {
  return (
    <div className="App">
      <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Account' element={<Account/>}/>
          <Route path='Product' element={<Product/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='CreateAccount' element={<CreateAccount/>}/>
          <Route path='UserProfile/:activepage' element={<UserProfile/>}/>
          <Route path='GuideLine' element={<Guidelines/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
