import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './components/elements/PrivateRoute.jsx';
import './App.css';
import TopMenu from './components/elements/TopMenu.jsx';
import Main from './components/pages/Main';
import News from './containers/pages/News';
import Profile from './components/pages/Profile';
import Login from './containers/pages/Login';
import Logout from './containers/pages/Logout';
import Notfound from './components/pages/Notfound';

const App = ({ isLogged, history }) => {
	return (
		<div className="App">
			<TopMenu user={isLogged} />

			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/news" component={News} />
				<PrivateRoute path="/profile" component={Profile} user={isLogged} />
				<Route path="/login" render={() => <Login redirect={() => history.push('/profile')} />} />
				<Route path="/logout" render={() => <Logout redirect={() => history.push('/')} />} />
				<Route component={Notfound} />
			</Switch>
		</div>
	);
};

const mapStateToProps = ({ login }) => {
	return {
		isLogged: login.isLogged,
	};
};

export default connect(mapStateToProps)(withRouter(App));
