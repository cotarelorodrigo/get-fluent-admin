import './App.css';
import Home from './screens/Home/Home.js'
import Denuncias from './screens/Denuncias/Denuncias'
import Login from './screens/Login/Login.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'

// function App() {
//   return (
//     <div>
//       <section>
//         <Route 
//           component={Login}
//           path="/" />
//       </section>
//       <Router>
//         <section>
//           <Sidebar/>
//           <Route 
//             component={Home}
//             path="/home" />
//         </section>
//       </Router>      
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/denuncias' exact component={Denuncias} />
        <Route path='/' exact component={Login} />
      </Switch>
    </Router>
  );
}


export default App;
