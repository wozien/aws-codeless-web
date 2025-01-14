import { HahaEmoji } from '@/icons/haha-emoji';
import { Empty, Flex, Typography } from 'antd';

export const WelcomeEmoji = () => {
	return (
		<Flex>
			<Empty
				image={<HahaEmoji />}
				description={
					<Typography.Text type="secondary">
						当前暂无内容，请尝试添加一下吧！
					</Typography.Text>
				}
			/>
		</Flex>
	);
};
