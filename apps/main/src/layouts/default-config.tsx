import {
	CodeSandboxOutlined,
	DashboardOutlined,
	DatabaseOutlined,
	FolderOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-components';

export const proLayoutDefaultProps: Partial<ProLayoutProps> = {
	menu: {
		type: 'group',
	},
	route: {
		routes: [
			{
				path: '/',
				name: 'Overview',
				routes: [
					{
						path: '/',
						name: '总览',
						icon: <DashboardOutlined size={16} />,
					},
				],
			},
			{
				path: '/project',
				name: '应用项目',
				routes: [
					{
						path: '/project/workbench',
						name: '工作台',
						icon: <CodeSandboxOutlined size={16} />,
					},
				],
			},
			{
				path: '/material',
				name: '物料',
				routes: [
					{
						path: '/material/list',
						name: '物料中心',
						icon: <ShoppingOutlined size={16} />,
					},
					{
						path: '/material/store',
						name: '物料仓库',
						icon: <FolderOutlined size={16} />,
					},
				],
			},
			{
				path: 'data',
				name: '数据',
				routes: [
					{
						path: 'source',
						name: '数据源',
						icon: <DatabaseOutlined size={16} />,
					},
				],
			},
		],
	},
};
