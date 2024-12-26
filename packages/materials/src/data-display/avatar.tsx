import React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import {
	BooleanSetter,
	NumberSetter,
	RenderFieldSetter,
	StringSetter,
	TextAreaSetter,
	toOptions,
} from '@aws-codeless-web/setters';
import { Avatar, AvatarProps, Segmented } from 'antd';
import { avatarIcon } from '@/assets/icon';

export const AC_Avatar = createReactMaterial<HTMLDivElement, AvatarProps>(
	(props, ref) => (
		<Avatar ref={ref} {...props}>
			{props.children}
		</Avatar>
	),
	{
		displayName: '头像',
		related: {
			settingRender: () => (
				<React.Fragment>
					<BooleanSetter name="draggable" label="允许拖动" />
					<RenderFieldSetter
						initialValue="circle"
						name="shape"
						label="形状样式"
					>
						<Segmented options={toOptions(['circle', 'square'])} />
					</RenderFieldSetter>
					<NumberSetter initialValue={4} name="gap" label="间隔距离" />
					<NumberSetter name="size" label="头像大小" />
					<TextAreaSetter name="src" label="图片内容" />
					<StringSetter name="srcSet" label="响应式资源地址" />
					<StringSetter name="children" label="文字内容" />
				</React.Fragment>
			),
			icon: () => <img src={avatarIcon} alt="" />,
		},
	},
);
