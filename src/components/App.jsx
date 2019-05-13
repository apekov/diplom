import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom';
import {PrivateRoute} from '../component_helpers/PrivateRoute'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Home} from './Home';
import Login from './Login';
import Dashboard from './Dashbroad'
import Request from './Request'
// import UserContainer from '../containers/UserContainer' 

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppBar position="static" color="default" className="app_bar">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className="toolbar_title">
              Control system
            </Typography>
            <Button>
              <Link to="/">Главная</Link>
            </Button>
            <Button>
              <Link to="/request">Заявки</Link>
            </Button>
            <Button>
              <Link to="/dashbroad">Личный кабинет</Link>
            </Button>
            <Button color="primary" variant="outlined">
              <Link to="/login">Авторизация</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <div className="app_body">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/request" component={Request}/>
            <PrivateRoute path="/dashbroad" component={Dashboard} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
