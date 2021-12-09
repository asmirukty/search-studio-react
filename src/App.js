import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import StudioSearchPage from "./component/pages/studioSearchPage";
import StudioResultPage from "./component/pages/studioResultPage";
import StudioPage from "./component/pages/studioPage";

export default function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={StudioSearchPage} exact />
              <Route path="/studios" component={StudioResultPage} exact />
              <Route path="/studios/:id" component={StudioPage} exact />
          </Switch>
      </Router>
  );
}