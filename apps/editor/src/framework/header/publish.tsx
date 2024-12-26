import { Button, App } from 'antd';
import { useSchema } from '@/framework/stores/useSchema';
import { useEditor } from '@craftjs/core';
import { omit } from 'lodash-es';
import { stringifyLzUtfData } from '@/framework/utils/json';

export const Publish = () => {
	const { query } = useEditor();
	const { message } = App.useApp();

	const pageSchema = useSchema((state) =>
		omit(state, ['setJsModuleCode', 'onChange']),
	);

	const onChanegSchema = useSchema((state) => state.onChange);

	const handlePublish = () => {
		const schema = query.serialize();
		onChanegSchema('schema', schema);

		const newSchema = {
			...pageSchema,
			schema,
		};

		console.log(newSchema);
		// 给后台的数据
		const jsonData = stringifyLzUtfData(JSON.stringify(newSchema));

		// TODO fetch

		message.success('保存并且发布成功');
	};

	return (
		<Button type="primary" onClick={handlePublish}>
			发布
		</Button>
	);
};
