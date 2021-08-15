import logo from './logo.svg';
import './css/styles.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Rss from "./components/rss";

function App() {
  return (    <HashRouter >
    <Switch>
      <Route exact path="/rss" component = {Rss}/>

    </Switch>
  </HashRouter>

  );
}

export default App;
