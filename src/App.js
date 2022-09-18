
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import AddData from './components/AddData';
import Courselist from './components/Courselist';
import Home from './components/Home';
import Nav from './components/Nav';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
          <Route path="/AddData">
            <AddData/>
          </Route>
          <Route path="/courselist">
            <Courselist/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;