import { OutletLayout } from '@/layouts';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MicroApp } from '@/pages/micro';

const LoginPage = lazy(() => import('@/pages/login'));
const HomePage = lazy(() => import('@/pages/home'));
const ProjectWorkbenchPage = lazy(() => import('@/pages/workbench'));

export const router = createBrowserRouter([
	{
		Component: OutletLayout,
		children: [
			{
				path: '/',
				Component: HomePage,
			},
			{
				path: '/project',
				children: [
					{
						path: 'workbench',
						Component: ProjectWorkbenchPage,
					},
				],
			},
		],
	},
	{
		path: '/app',
		children: [
			{
				path: 'editor',
				Component: MicroApp,
			},
		],
	},
	{
		path: '/login',
		Component: LoginPage,
	},
]);
