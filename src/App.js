import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import Service from './components/service';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/service" component={Service} />
        </Switch>
    </Router>
  );
}



export default App;
