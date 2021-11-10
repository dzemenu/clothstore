import './App.scss';
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shopage/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <div >
      <Header />
<Switch>

  <Route exact path='/' component={HomePage}/>
  <Route exact path='/shop' component={ShopPage}/>
</Switch>
   </div>
  );
}

export default App;
