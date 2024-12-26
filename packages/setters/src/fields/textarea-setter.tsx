import React from 'react';
import { Input } from 'antd';
import { RenderFieldSetter, SetterProps } from '..';
import { TextAreaProps } from 'antd/es/input';

export const TextAreaSetter: React.FC<SetterProps<TextAreaProps>> = ({
	fieldProps,
	...props
}) => {
	return (
		<RenderFieldSetter {...props}>
			<Input.TextArea placeholder="请输入" {...fieldProps} />
		</RenderFieldSetter>
	);
};
