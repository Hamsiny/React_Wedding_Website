import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/WholeSi/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ItemDetail from './pages/ItemDetail/ItemDetail';

function App() {
  return (
    <Router>
      <Header />
      <switch>
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/'>
          <ItemDetail />
        </Route>
      </switch>
      <Footer />
    </Router>
  );
}

export default App;
