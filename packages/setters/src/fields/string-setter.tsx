import React from 'react';
import { Input, type InputProps } from 'antd';
import {
	type SetterProps,
	RenderFieldSetter,
} from '../common/render-field-setter';

export const StringSetter: React.FC<SetterProps<InputProps>> = ({
	fieldProps,
	...props
}) => {
	return (
		<RenderFieldSetter {...props}>
			<Input placeholder="请输入" {...fieldProps} />
		</RenderFieldSetter>
	);
};
