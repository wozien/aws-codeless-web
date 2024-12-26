import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const IndexPage = lazy(() => import('@/pages/index'));

export const router = createBrowserRouter([
	{
		path: '/',
		Component: IndexPage,
	},
]);
