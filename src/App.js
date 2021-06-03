import './App.css';
import Home from './screens/Home/Home.js'
import Login from './screens/Login/Login.js'
import { Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Route 
          component={Login}
          path="/" />
        <Route 
          component={Home}
          path="/home" />
      </section>
    </div>
  );
}

export default App;
