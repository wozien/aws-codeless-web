import { Flex, Button, Tooltip, Typography, theme } from 'antd';
import { css } from '@emotion/css';
import { useState } from 'react';
import {
	CodeSandboxOutlined,
	ApartmentOutlined,
	HistoryOutlined,
	CloudSyncOutlined,
	DoubleLeftOutlined,
} from '@ant-design/icons';
import { map } from 'lodash-es';
import { MaterialList } from './materials/list';

export enum MenuTab {
	COMPONENT = 'COMPONENT',
	TREE = 'TREE',
	HISTORY = 'HISTORY',
	QUERIES = 'QUERIES',
}

export const Left = () => {
	const { token } = theme.useToken();
	const [activeKey, setActiveKey] = useState<MenuTab | undefined>(
		MenuTab.COMPONENT,
	);

	const classes = {
		main: css({
			height: '100%',
			display: 'grid',
			gridTemplateColumns: '45px 1fr',
		}),
		menu: css({
			paddingBlock: 8,
			borderRight: activeKey
				? `1px solid ${token.colorBorderSecondary}`
				: undefined,
		}),
		content: css({
			minWidth: 255,
			display: 'grid',
			gridTemplateRows: '36px 1fr',
		}),
		title: css({
			paddingInline: 12,
			borderBottom: `1px solid ${token.colorBorderSecondary}`,
		}),
	};

	const items: Record<
		MenuTab,
		{
			label: string;
			icon: React.ReactNode;
			children: React.ReactNode;
		}
	> = {
		[MenuTab.COMPONENT]: {
			label: '组件列表',
			icon: <CodeSandboxOutlined />,
			children: <MaterialList />,
		},
		[MenuTab.TREE]: {
			label: '面包树',
			icon: <ApartmentOutlined />,
			children: <></>,
		},
		[MenuTab.HISTORY]: {
			label: '历史记录',
			icon: <HistoryOutlined />,
			children: <></>,
		},
		[MenuTab.QUERIES]: {
			label: '状态管理',
			icon: <CloudSyncOutlined />,
			children: <></>,
		},
	};

	return (
		<div className={classes.main}>
			<Flex className={classes.menu} vertical align="center" gap={8}>
				{map(
					items,
					(value: (typeof items)[MenuTab.COMPONENT], key: MenuTab) => (
						<Tooltip
							key={key}
							color="blue"
							placement="rightTop"
							title={value.label}
						>
							<Button
								key={key}
								type={key === activeKey ? 'primary' : 'text'}
								icon={value.icon}
								onClick={() => setActiveKey(key)}
							/>
						</Tooltip>
					),
				)}
			</Flex>

			{activeKey ? (
				<div className={classes.content}>
					<Flex
						justify="space-between"
						className={classes.title}
						align="center"
					>
						<Typography.Text>{items?.[activeKey]?.label}</Typography.Text>
						<Button
							size="small"
							type="text"
							icon={<DoubleLeftOutlined />}
							onClick={() => setActiveKey(undefined)}
						/>
					</Flex>
					<div
						style={{
							overflow: 'auto',
							height: '100%',
						}}
					>
						{items?.[activeKey]?.children}
					</div>
				</div>
			) : null}
		</div>
	);
};
