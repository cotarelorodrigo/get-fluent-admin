import './App.css';
import Home from './screens/Home/Home.js'
import Denuncias from './screens/Denuncias/Denuncias'
import Login from './screens/Login/Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/denuncias' exact component={Denuncias} />
      </Switch>
    </Router>
  );
}


export default App;
