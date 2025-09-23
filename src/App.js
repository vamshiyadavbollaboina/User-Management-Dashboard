import './App.css'
import Home from './components/Home/index'
import Update from './components/Update/index'
import Read from './components/Read/index'
import Create from './components/Create/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/update/:id" component={Update} />
        <Route path="/read/:id" component={Read} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  )
}

export default App
