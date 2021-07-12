import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ItemDetail from './pages/ItemDetail/ItemDetail';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/product'>
          <ItemDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
