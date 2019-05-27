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
import { getInStorage } from './helpers/localStorage/localStorage';

const isLogged = getInStorage('isLogged') || false;

const App = ({ isAuth, history }) => {
	return (
		<div className="App">
			<TopMenu user={isAuth} />

			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/news" component={News} />
				<PrivateRoute path="/profile" component={Profile} user={isAuth} />
				<Route path="/login" render={() => <Login redirect={() => history.push('/profile')} />} />
				<Route path="/logout" render={() => <Logout redirect={() => history.push('/')} />} />
				<Route component={Notfound} />
			</Switch>
		</div>
	);
};

const mapStateToProps = ({ auth }) => {
	return {
		isAuth: auth.isAuth,
	};
};

export default connect(mapStateToProps)(withRouter(App));
