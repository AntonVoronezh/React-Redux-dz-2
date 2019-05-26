import getNews from '../../helpers/axios/axios';

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAILURE = 'NEWS_FAILURE';

const newsSuccessAC = data => ({ type: NEWS_SUCCESS, payload: data });
const newsFailureAC = error => ({ type: NEWS_FAILURE, payload: error });
const newsRequestAC = () => ({ type: NEWS_REQUEST });

// const fetchNews = () => dispatch => {
// 	dispatch(newsRequestAC());

// 	return getNews()
// 		.then(({ data: { articles } }) => dispatch(newsSuccessAC(articles)))
// 		.catch(err => dispatch(newsFailureAC(err)));
// };

const fetchNews = () => async dispatch => {
	dispatch(newsRequestAC());

	try {
		const responce = await getNews();
		dispatch(newsSuccessAC((responce.data.articles)));
	} catch (err) {
		dispatch(newsFailureAC(err));
	}
};

export default fetchNews;
