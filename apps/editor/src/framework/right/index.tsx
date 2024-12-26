import { Tabs, Flex, ConfigProvider, theme } from 'antd';
import { css } from '@emotion/css';
import { useState } from 'react';
import { PropsSetting } from './PropsSetting';

export enum RightTabsType {
	PROPS = 'PROPS',
	CODE = 'CODE',
	EVENTS = 'EVENTs',
	STYLE = 'STYLE',
}

export const Right = () => {
	const { token } = theme.useToken();

	const [activeKey, setActiveKey] = useState<RightTabsType>(
		RightTabsType.PROPS,
	);

	const classes = {
		main: css({
			height: '100%',
			width: '100%',
			display: 'grid',
			gridTemplateRows: 'auto 1fr',
			overflow: 'hidden',
			boxSizing: 'border-box',
		}),
		content: css({
			height: '100%',
			overflow: 'auto',
			boxSizing: 'border-box',
		}),
		head: css({}),
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Tabs: {
						horizontalMargin: '0 0 0 0',
					},
				},
			}}
		>
			<div className={classes.main}>
				<Flex align="flex-end" className={classes.head}>
					<Tabs
						tabBarStyle={{
							paddingInline: token.paddingXS,
						}}
						activeKey={activeKey}
						style={{ width: '100%' }}
						tabBarGutter={18}
						size="small"
						items={[
							{
								label: '属性',
								key: RightTabsType.PROPS,
							},
							{
								label: '样式',
								key: RightTabsType.STYLE,
							},
							{
								label: 'event',
								key: RightTabsType.EVENTS,
							},
						]}
						onChange={(v) => setActiveKey(v as RightTabsType)}
					/>
				</Flex>
				<div className={classes.content}>
					{activeKey === RightTabsType.PROPS ? <PropsSetting /> : null}
					{activeKey === RightTabsType.EVENTS ? <></> : null}
					{activeKey === RightTabsType.STYLE ? <></> : null}
				</div>
			</div>
		</ConfigProvider>
	);
};
