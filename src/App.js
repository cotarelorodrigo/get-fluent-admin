import './App.css';
import Home from './screens/Home/Home.js'
import Denuncias from './screens/Denuncias/Denuncias'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/denuncias' exact component={Denuncias} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
