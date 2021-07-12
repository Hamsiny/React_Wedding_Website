import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import ShowBox from './components/ShowBox/ShowBox';

function App() {
  return (
    <Router>
      <Header />
      <Filter />
      <ShowBox />
    </Router>
  );
}

export default App;
