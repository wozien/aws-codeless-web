import React from 'react';
import { useEditor } from '@craftjs/core';
import { Card, Form, Typography, theme } from 'antd';
import { merge } from 'lodash-es';
import { useEffect } from 'react';
// import { useDebounceFn } from 'ahooks';

export const PropsSetting = () => {
	const { token } = theme.useToken();
	const [form] = Form.useForm();

	// 获取选中节点的属性
	const {
		id: nodeId,
		currentNodeProps,
		SettingRender,
		actions,
	} = useEditor((state) => {
		const [currentNodeId] = state.events.selected;

		if (currentNodeId) {
			const { data, related } = state.nodes[currentNodeId];

			return {
				id: currentNodeId,
				currentNodeProps: data.props,
				SettingRender: related?.settingRender,
			};
		}
	});

	// const { run: handleFormChange } = useDebounceFn((values) => {
	// 	if (nodeId) {
	// 		actions.setProp(nodeId, (settingProps) => {
	// 			return merge(settingProps, values);
	// 		});
	// 	}
	// 	return true;
	// });

	const handleFormChange = (values: any) => {
		if (nodeId) {
			actions.setProp(nodeId, (settingProps) => {
				return merge(settingProps, values);
			});
		}
		return true;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (nodeId) {
			form.resetFields();
			form.setFieldsValue(currentNodeProps);
		}
	}, [nodeId]);

	return (
		<Form
			style={{
				padding: token.paddingSM,
			}}
			form={form}
			layout="horizontal"
			labelCol={{
				span: 6,
			}}
			wrapperCol={{
				span: 18,
			}}
			onValuesChange={handleFormChange}
			onFinish={handleFormChange}
		>
			{SettingRender ? (
				React.createElement(SettingRender)
			) : (
				<Card size="small">
					<Typography.Text type="secondary">
						暂无选中组件，点击画布中的组件可以进行选择。
					</Typography.Text>
				</Card>
			)}
		</Form>
	);
};
