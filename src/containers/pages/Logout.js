import { connect } from 'react-redux';
import Logout from '../../components/pages/Logout';
import { logout } from '../../store/actions/authAction';

const mapDispatchToProps = dispatch => {
	return {
		logoutCB: () => dispatch(logout()),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(Logout);
