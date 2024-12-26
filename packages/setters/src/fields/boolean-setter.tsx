import React from 'react';
import { Switch, type SwitchProps } from 'antd';
import {
	type SetterProps,
	RenderFieldSetter,
} from '../common/render-field-setter';

export const BooleanSetter: React.FC<SetterProps<SwitchProps>> = ({
	fieldProps,
	...props
}) => {
	return (
		<RenderFieldSetter {...props} valuePropName="checked">
			<Switch {...fieldProps} />
		</RenderFieldSetter>
	);
};
