import React from 'react';
import { connect } from 'react-redux';
import News from '../../components/pages/News';
import getNews from '../../helpers/axios/axios';
import fetchNews from '../../store/actions/newsActions';

class NewsContainer extends React.Component {
	componentDidMount() {
		this.props.fetchNewsCB();
	}
	render() {
		return (
			<>
				<News {...this.props} />
			</>
		);
	}
}

const mapStateToProps = ({ news }) => {
	return {
		...news,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchNewsCB: () => dispatch(fetchNews()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewsContainer);
