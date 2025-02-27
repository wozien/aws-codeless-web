import React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import { Card, CardProps, Segmented } from 'antd';
import {
	BooleanSetter,
	RenderFieldSetter,
	StringSetter,
} from '@aws-codeless-web/setters';
import { Element } from '@craftjs/core';
import { AC_Flex } from '@/layout';
import { cardIcon } from '@/assets/icon';

export const AC_Card = createReactMaterial<HTMLDivElement, CardProps>(
	(props, ref) => (
		<Card
			ref={ref}
			{...props}
			extra={<Element canvas is={AC_Flex} id="CardExtra" />}
		>
			<Element canvas is={AC_Flex} id="CardTitle" />
		</Card>
	),
	{
		displayName: '卡片',
		props: {
			title: '默认标题',
		},
		related: {
			settingRender: () => (
				<React.Fragment>
					<BooleanSetter name="loading" label="加载中" />
					<BooleanSetter name="bordered" label="显示边框" />
					<BooleanSetter name="hoverable" label="可悬浮" />
					<StringSetter name="type" label="卡片类型" />
					<StringSetter name="title" label="标题" />
					<RenderFieldSetter name="size" label="大小">
						<Segmented
							options={[
								{
									label: '默认',
									value: 'default',
								},
								{
									label: '缩小',
									value: 'small',
								},
							]}
						/>
					</RenderFieldSetter>
				</React.Fragment>
			),
			icon: () => <img height="100%" width="100%" src={cardIcon} alt="" />,
		},
	},
);
