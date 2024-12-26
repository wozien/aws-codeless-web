import { css } from '@emotion/css';
import {
	UndoOutlined,
	RedoOutlined,
	QuestionCircleOutlined,
	ReloadOutlined,
	CodeOutlined,
	DeleteOutlined,
} from '@ant-design/icons';
import { useEditor } from '@craftjs/core';
import { theme, Tooltip, Button, Popconfirm, message } from 'antd';
import { JsEditor } from './js-editor';

export const ToolBar = () => {
	const { token } = theme.useToken();
	const { selectedId, isRootNode, query, actions } = useEditor(({ events }) => {
		const [id] = events.selected;
		return {
			selectedId: id,
			isRootNode: id === 'ROOT',
		};
	});

	const canUndo = query.history.canUndo();
	const canRedo = query.history.canRedo();

	const classes = {
		toolbar: css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: token.colorBgBase,
			gap: 8,
		}),
		center: css({
			background: token.colorBgContainerDisabled,
			height: '80%',
			width: '300px',
			borderRadius: 4,
			display: 'flex',
			alignItems: 'center',
			paddingInline: 14,
		}),
	};

	/**
	 * 处理删除选中节点逻辑
	 */
	const handleDeleteSelectedNode = () => {
		try {
			actions.delete(selectedId);
			message.success('删除成功');
		} catch (error) {
			message.error('删除失败');
		}
	};

	return (
		<div className={classes.toolbar}>
			<Tooltip title="撤销" placement="bottom" color="blue">
				<Button
					icon={<UndoOutlined />}
					disabled={canUndo}
					onClick={actions.history.undo}
				/>
			</Tooltip>
			<Tooltip title="恢复" placement="bottom" color="blue">
				<Button
					icon={<RedoOutlined />}
					disabled={canRedo}
					onClick={actions.history.redo}
				/>
			</Tooltip>
			<Tooltip title="强制刷新" placement="bottom" color="blue">
				<Popconfirm
					title="强制刷新"
					description={
						<div style={{ width: 250 }}>
							强制刷新将会导致您页面的修改丢失，且无法恢复，如果继续进行下一步，请点击确认按钮。
						</div>
					}
					icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
					onConfirm={() => window.location.reload()}
					okButtonProps={{
						danger: true,
						type: 'dashed',
					}}
				>
					<Button icon={<ReloadOutlined />} />
				</Popconfirm>
			</Tooltip>
			<JsEditor
				trigger={
					<Tooltip placement="bottom" title="代码" color="blue">
						<Button icon={<CodeOutlined />} />
					</Tooltip>
				}
			/>
			<Tooltip
				placement="bottom"
				title={isRootNode ? '当前选中为根节点，不允许删除' : '删除'}
			>
				<Button
					danger
					icon={<DeleteOutlined />}
					onClick={handleDeleteSelectedNode}
					disabled={isRootNode || !selectedId}
				/>
			</Tooltip>
		</div>
	);
};
