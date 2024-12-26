import WujieReact from 'wujie-react';

export const MicroApp = () => {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<WujieReact
				width="100%"
				height="100%"
				name="editor"
				url="http://localhost:8001"
				sync
			/>
		</div>
	);
};
