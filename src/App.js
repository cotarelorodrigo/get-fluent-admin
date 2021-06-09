import './App.css';
import Home from './screens/Home'
import Login from './screens/Login'
import Sidebar from './components/SideBar'
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';


const Main = withRouter(({location}) => {
  return(
    <div>
      {
        location.pathname !== '/' && <Sidebar/>
      }
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </div>
  )

})

function App() {
  return (
    <Router>
      <Main/>
      <div className="App">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
