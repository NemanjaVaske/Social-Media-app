import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  
  useEffect(()=>{
    console.log(user);
  },[user]);
  
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          {user? <Home/>: <Redirect to="/login"/>}
        </Route>
        <Route path="/profile/:username">
          {user? <Profile/>: <Redirect to="/login"/>}
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/> :<Login/>}
        </Route>
        <Route path="/register">
          {user? <Redirect to="/"/>: <Register/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
