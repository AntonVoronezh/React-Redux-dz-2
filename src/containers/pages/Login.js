import { connect } from 'react-redux';
import Login from '../../components/pages/Login';
import {
	usernameTextAC,
	passwordTextAC,
	usernameBackspaceAC,
	passwordBackspaceAC,
} from '../../store/actions/loginFormActions';

import { tryLoginAC } from '../../store/actions/loginActions';

const mapStateToProps = state => {
	return {
		...state.loginForm,
		...state.login,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		usernameTextCB: text => dispatch(usernameTextAC(text)),
		passwordTextCB: text => dispatch(passwordTextAC(text)),
		usernameBackspaceCB: () => dispatch(usernameBackspaceAC()),
		passwordBackspaceCB: () => dispatch(passwordBackspaceAC()),
		tryLoginCB: user => dispatch(tryLoginAC(user)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
