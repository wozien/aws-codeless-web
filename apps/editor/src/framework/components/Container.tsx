import { createReactMaterial } from '@aws-codeless-web/core';

type RootContainerProps = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
};

export const RootContainer = createReactMaterial<
	HTMLDivElement,
	RootContainerProps
>(
	({ children, style }, ref) => {
		return (
			<div ref={ref} style={style}>
				{children}
			</div>
		);
	},
	{
		displayName: 'RootContainer',
		custom: {
			useCanvas: true,
			useResize: false,
		},
		related: {},
	},
);
