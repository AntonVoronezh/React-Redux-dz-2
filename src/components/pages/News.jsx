import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import OneNews from '../../components/elements/OneNews';


const News = ({ isLoading, news, error, ...rest }) => {
	// message
	let allNews;
	!error
		? (allNews = news.map((n, i) => {
				return <OneNews key={i} {...n} />;
		  }))
		: (allNews = `Ошибка "${error.message}". Попробуйте еще раз.`);

	return (
		<>
			{isLoading ? (
				<Loader size="large" active>
					Loading
				</Loader>
			) : (
				allNews
			)}
		</>
	);
};

export default News;

News.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	news: PropTypes.array,
};
