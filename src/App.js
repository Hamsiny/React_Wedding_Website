import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <Router>
      <Header />
      <Filter />
    </Router>
  );
}

export default App;
