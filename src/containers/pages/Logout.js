import { connect } from 'react-redux';
import Logout from '../../components/pages/Logout';
import { logoutAC } from '../../store/actions/loginActions';

const mapDispatchToProps = dispatch => {
	return {
		logoutCB: () => dispatch(logoutAC()),
		// isLoggedCB: props => props.history.push('/profile')
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Logout);

// login = user => {
// 	this.setState({ user }, () => this.props.history.push('/profile'));
// };
