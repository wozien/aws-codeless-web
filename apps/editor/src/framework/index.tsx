import { EditorRootWrapper } from './provider';
import { css } from '@emotion/css';
import { Header } from './header';
import { Left } from './left';
import { Canvas } from './canvas';
import { Right } from './right';

const classes = {
	layout: css({
		height: '100%',
		gridTemplateRows: '45px 1fr',
		display: 'grid',
		overflow: 'hidden',
	}),
	main: css({
		display: 'grid',
		gridTemplateColumns: 'auto 1fr 300px',
		height: '100%',
		position: 'relative',
		overflow: 'auto',
	}),
};

export const FrameWork = () => {
	return (
		<EditorRootWrapper>
			<div className={classes.layout}>
				{/* 头部 */}
				<Header />
				{/* 编辑器主体 */}
				<div id="EditorContent" className={classes.main}>
					<Left />
					<Canvas />
					<Right />
				</div>
			</div>
		</EditorRootWrapper>
	);
};
