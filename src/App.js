import './App.css';
import Home from './screens/Home/Home.js'
import Usuarios from './screens/Usuarios/Usuarios'
import Denuncias from './screens/Denuncias/Denuncias'
import DetallePorDenunciado from './screens/DetallePorDenunciado/DetallePorDenunciado.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/usuarios' exact component={Usuarios} />
        <Route path='/denuncias' exact component={Denuncias} />
        <Route path="/denunciado/:denunciado?" component={DetallePorDenunciado} />
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;