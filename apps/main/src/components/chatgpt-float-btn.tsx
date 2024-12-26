import { LogoSvg } from '@/icons/logo';
import { FloatButton } from 'antd';

export const ChatgptFloatBtn = () => {
	return (
		<FloatButton
			shape="square"
			type="default"
			style={{ right: 24 }}
			icon={<LogoSvg width={20} height={20} />}
		/>
	);
};
