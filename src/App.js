import logo from './logo.svg';
import './css/styles.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Rss from "./components/rss";

function App() {
  return (    <BrowserRouter>
    <Switch>
      <Route exact path="/rss" component = {Rss}/>

    </Switch>
  </BrowserRouter>

  );
}

export default App;
