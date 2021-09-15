import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from "./component/pages/searchPage";
import ResultPage from "./component/pages/resultPage";

export default function App() {
  return (
      <Router>
          <Switch>
              <Route pass="/" component={SearchPage} exact />
              <Route pass="/studios" component={ResultPage} exact />
          </Switch>
      </Router>
  );
}