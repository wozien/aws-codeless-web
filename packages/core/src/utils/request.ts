import axios from 'axios';

interface Response {
	statusCode: string;
	data: any;
}

const request = axios.create({
	baseURL: 'api',
	timeout: 10000,
	withCredentials: true,
});

request.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

request.interceptors.response.use(
	(response) => {
		const { data: result = {}, status } = response;

		const { statusCode, data } = result as Response;

		if (statusCode === '200') {
			return data;
		}

		// 接口异常
		return Promise.reject(result);
	},
	(error) => {
		return Promise.reject(error);
	},
);

export { request };
