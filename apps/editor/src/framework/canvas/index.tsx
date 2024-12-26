import { theme } from 'antd';
import { css } from '@emotion/css';
import { IFrame as RenderViewSanbox } from './iframe';
import { ViewRoot } from './ViewRoot';

export const Canvas = () => {
	const { token } = theme.useToken();

	const classes = {
		main: css({
			borderLeft: `1px solid ${token.colorBorderSecondary}`,
			borderRight: `1px solid ${token.colorBorderSecondary}`,
			background: '#f9fafb',
			height: '100%',
			padding: token.paddingSM,
			position: 'relative',
		}),
	};

	return (
		<div className={classes.main}>
			<RenderViewSanbox>
				<ViewRoot />
			</RenderViewSanbox>
		</div>
	);
};
