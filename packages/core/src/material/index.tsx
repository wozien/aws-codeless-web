import React from 'react';
import {
	useNode,
	type UserComponent,
	type UserComponentConfig,
} from '@craftjs/core';

export type ReactMaterialComponent = UserComponent;

export type ReactMaterialViewType<
	T extends HTMLElement,
	P,
> = React.ForwardRefRenderFunction<T, P>;

const withConnectNode = (
	WrappedComponent: React.ForwardRefExoticComponent<React.RefAttributes<any>>,
): ReactMaterialComponent => {
	return ({ children, ...props }) => {
		const {
			connectors: { connect, drag },
		} = useNode();

		return (
			<WrappedComponent ref={(dom) => connect(drag(dom))} {...props}>
				{children}
			</WrappedComponent>
		);
	};
};

export const createReactMaterial = <T extends HTMLElement, P>(
	Component: ReactMaterialViewType<T, P>,
	config: Partial<UserComponentConfig<P>>,
	defaultProps?: Partial<React.PropsWithoutRef<P>>,
) => {
	const WrappedComponent = React.forwardRef<T, P>(Component);
	WrappedComponent.defaultProps = defaultProps;

	const MaterialNode = withConnectNode(WrappedComponent);
	MaterialNode.craft = config;
	return MaterialNode;
};
