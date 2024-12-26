import { Frame, Canvas } from '@craftjs/core';
import { RootContainer } from '../components/Container';

export const ViewRoot: React.FC<React.ComponentProps<typeof Frame>> = (
	props,
) => {
	return (
		<div
			id="EditorViewRoot"
			style={{
				width: '100vw',
				height: '100vh',
				backgroundColor: '#FFF',
				overflow: 'auto',
			}}
		>
			<Frame {...props}>
				<Canvas
					is={RootContainer}
					style={{
						width: '100%',
						height: '100%',
						overflow: 'hidden',
					}}
					canvas
				/>
			</Frame>
		</div>
	);
};
