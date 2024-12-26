import { useRef } from 'react';
import { theme, Flex, Space, Button, message, type InputRef } from 'antd';
import { css } from '@emotion/css';
import { ProFormText } from '@ant-design/pro-components';
import { useBoolean } from 'ahooks';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import { ToolBar } from './toolbar';
import { usePageInfo } from '../stores/usePageInfo';
import { Publish } from './publish';
import { Priview } from './preview';

export const Header: React.FC = () => {
	const inputRef = useRef<InputRef>(null);
	const { token } = theme.useToken();
	const [editable, { setTrue, setFalse }] = useBoolean(false);
	const { title, onChange } = usePageInfo();

	const classes = {
		header: css({
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			height: 45,
			border: `1px solid ${token.colorBorderSecondary}`,
			paddingInline: token.paddingXS,
		}),
		notice: css({
			textAlign: 'center',
		}),
	};

	return (
		<div className={classes.header}>
			<Flex gap={4} align="center">
				<Space.Compact>
					<ProFormText
						fieldProps={{
							allowClear: false,
							style: {
								width: 260,
							},
							defaultValue: title,
							value: editable ? undefined : title,
							ref: inputRef,
						}}
						readonly={!editable}
						noStyle
					/>
				</Space.Compact>
				{editable ? (
					<Button
						type="text"
						icon={<CheckOutlined />}
						onClick={() => {
							const value = inputRef.current?.input?.value;
							onChange('title', value || '--');
							setFalse();
							message.success('修改标题成功');
						}}
					/>
				) : (
					<Button
						type="text"
						size="small"
						icon={<EditOutlined />}
						onClick={() => setTrue()}
					/>
				)}
			</Flex>
			<ToolBar />
			<Flex gap={6} align="center" justify="end">
				<Priview />
				<Publish />
			</Flex>
		</div>
	);
};
