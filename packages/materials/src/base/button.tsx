import React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import {
	BooleanSetter,
	StringSetter,
	RenderFieldSetter,
	toOptions,
} from '@aws-codeless-web/setters';
import { buttonIcon } from '@/assets/icon';
import { Segmented, Button, Select, type ButtonProps } from 'antd';

export const AC_Button = createReactMaterial<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		return (
			<Button type="primary" ref={ref} {...props}>
				{props.children}
			</Button>
		);
	},
	{
		displayName: '按钮',
		related: {
			settingRender: () => {
				return (
					<React.Fragment>
						<BooleanSetter name="danger" label="危险按钮" />
						<BooleanSetter name="disabled" label="禁用按钮" />
						<BooleanSetter name="ghost" label="幽灵按钮" />
						<BooleanSetter name="loading" label="加载按钮" />

						<RenderFieldSetter
							name="size"
							label="按钮形状"
							initialValue="middle"
						>
							<Segmented
								options={[
									{
										label: '小',
										value: 'small',
									},
									{
										label: '中',
										value: 'middle',
									},
									{
										label: '大',
										value: 'large',
									},
								]}
							/>
						</RenderFieldSetter>

						<RenderFieldSetter
							name="shape"
							label="按钮形状"
							initialValue="default"
						>
							<Segmented
								options={[
									{
										label: '矩形',
										value: 'default',
									},
									{
										label: '圆形',
										value: 'circle',
									},
									{
										label: '椭圆',
										value: 'round',
									},
								]}
							/>
						</RenderFieldSetter>

						<RenderFieldSetter
							name="type"
							label="按钮类型"
							initialValue="default"
						>
							<Select
								style={{ width: '100%' }}
								options={toOptions([
									'primary',
									'dashed',
									'link',
									'text',
									'default',
								])}
							/>
						</RenderFieldSetter>

						<StringSetter
							label="按钮文字"
							name="children"
							initialValue="默认按钮"
						/>
					</React.Fragment>
				);
			},
			icon: () => <img src={buttonIcon} height="100%" width="100%" alt="" />,
		},
	},
	{
		children: '默认按钮',
	},
);
