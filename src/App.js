import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/'>
          <ItemDetail />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
