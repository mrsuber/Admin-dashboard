import Topbar from './components/topbar/Topbar'
import Sidbar from './components/sidebar/Sidebar'
import './app.css'
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom"




function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/users">
                <UserList />
            </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
