import axios from 'axios';

const url = 'https://newsapi.org/v2/';
const apiKey = '7fd45e35dc9349c8ad721a77101089d6';

export default () => {
	return axios.get(`${url}top-headlines?sources=bbc-news&apiKey=${apiKey}`);
};

export const tryLogin = controls => {
	const { login, password } = controls;
	return axios.post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', {
		email: login,
      password,
      // content-type: application/json
	});
};
