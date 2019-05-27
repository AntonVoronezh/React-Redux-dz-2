import { connect } from 'react-redux';
import Login from '../../components/pages/Login';
import {
	usernameTextAC,
	passwordTextAC,
	usernameBackspaceAC,
	passwordBackspaceAC,
} from '../../store/actions/loginFormActions';

import { auth } from '../../store/actions/authAction';

const mapStateToProps = ({ loginForm, auth }) => {
	return {
		...loginForm,
		...auth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		usernameTextCB: text => dispatch(usernameTextAC(text)),
		passwordTextCB: text => dispatch(passwordTextAC(text)),
		usernameBackspaceCB: () => dispatch(usernameBackspaceAC()),
		passwordBackspaceCB: () => dispatch(passwordBackspaceAC()),
		authCB: user => dispatch(auth(user)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
