import React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import { ColorPicker, QRCode, QRCodeProps, Segmented } from 'antd';
import {
	BooleanSetter,
	NumberSetter,
	RenderFieldSetter,
	StringSetter,
} from '@aws-codeless-web/setters';
import { qrIcon } from '@/assets/icon';

export const AC_Qrcode = createReactMaterial<HTMLDivElement, QRCodeProps>(
	(props, ref) => (
		<div ref={ref} style={{ display: 'inline-block' }}>
			<QRCode {...props} />
		</div>
	),
	{
		displayName: '二维码',
		props: {
			value: 'https://ant.design/',
			icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
		},
		custom: {},
		related: {
			settingRender: () => (
				<React.Fragment>
					<BooleanSetter name="bordered" label="边框模式" initialValue={true} />
					<RenderFieldSetter name="type" label="渲染类型">
						<Segmented options={['canvas', 'svg']} />
					</RenderFieldSetter>
					<RenderFieldSetter name="type" label="渲染类型">
						<Segmented options={['L', 'M', 'Q', 'H']} />
					</RenderFieldSetter>
					<StringSetter name="value" label="扫描后文本" />
					<StringSetter name="icon" label="图标地址" />
					<NumberSetter name="size" label="二维码大小" />
					<NumberSetter name="iconSize" label="图标大小" />

					<RenderFieldSetter
						isExpression={false}
						name="color"
						label="二维码颜色"
						getValueFromEvent={(_, color) => color}
						initialValue="#00000000"
					>
						<ColorPicker placement="bottomRight" format="rgb" showText />
					</RenderFieldSetter>
					<RenderFieldSetter
						isExpression={false}
						name="bgColor"
						label="背景颜色"
						getValueFromEvent={(_, color) => color}
					>
						<ColorPicker placement="bottomRight" format="rgb" showText />
					</RenderFieldSetter>
				</React.Fragment>
			),
			icon: () => <img src={qrIcon} alt="" />,
		},
	},
);
