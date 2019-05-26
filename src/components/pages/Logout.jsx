import React from 'react';
import PropTypes from 'prop-types';

class Logout extends React.Component {
	componentWillMount() {
        this.props.redirect('/');
        this.props.logoutCB();
	}

	render() {
		return null;
	}
}

export default Logout;

Logout.propTypes = {
	redirect: PropTypes.func.isRequired,
	logoutCB: PropTypes.func.isRequired,
};
