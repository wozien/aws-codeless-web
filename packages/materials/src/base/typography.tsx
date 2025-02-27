import React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import {
	BooleanSetter,
	StringSetter,
	RenderFieldSetter,
	toOptions,
} from '@aws-codeless-web/setters';
import { Segmented, Select, Typography } from 'antd';
import { textIcon } from '@/assets/icon';

const levelOptions = [1, 2, 3, 4, 5].map((level) => ({
	label: `H${level}`,
	value: level,
}));

type TitleProps = React.ComponentProps<typeof Typography.Title>;

export const AC_Title = createReactMaterial<HTMLDivElement, TitleProps>(
	(props, ref) => <Typography.Title ref={ref} {...props} />,
	{
		displayName: '标题',
		related: {
			settingRender: () => (
				<React.Fragment>
					{/* <RenderFieldSetter
						isExpression={false}
						name="componentType"
						label="组件类型"
						initialValue="Text"
					>
						<Segmented
							options={[
								{
									label: '文本',
									value: 'Text',
								},
								{
									label: '标题',
									value: 'Title',
								},
								{
									label: '链接',
									value: 'Link',
								},
								{
									label: '省略',
									value: 'Paragraph',
								},
							]}
						/>
					</RenderFieldSetter> */}
					<RenderFieldSetter name="level" label="标题等级" initialValue={1}>
						<Segmented options={levelOptions} />
					</RenderFieldSetter>
					<BooleanSetter name="copyable" label="复制按钮" />
					<BooleanSetter name="delete" label="删除线" />
					<BooleanSetter name="disable" label="禁用文本" />
					<BooleanSetter name="ellipsis" label="溢出省略" />
					<BooleanSetter name="mark" label="标记样式" />
					<BooleanSetter name="italic" label="字体倾斜" />
					<BooleanSetter name="underline" label="下划线" />
					<RenderFieldSetter name="type" label="类型">
						<Select
							style={{ width: '100%' }}
							options={toOptions(['secondary', 'success', 'warning', 'danger'])}
						/>
					</RenderFieldSetter>

					<StringSetter
						label="标题文本"
						name="children"
						initialValue="默认标题"
					/>
				</React.Fragment>
			),
			icon: () => <img src={textIcon} alt="" />,
		},
	},
	{
		children: '默认标题',
	},
);
