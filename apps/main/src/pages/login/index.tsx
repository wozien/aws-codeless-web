import { RootContainer } from '@/components/root';
import { css } from '@emotion/css';
import { Flex } from 'antd';
import { LoginForm } from './login-form';

const classes = {
	layout: css({
		height: '100vh',
		width: '100%',
		paddingBlock: '5%',
		paddingInline: 24,
	}),
};

const LoginPage = () => {
	return (
		<RootContainer>
			<Flex vertical className={classes.layout} justify="center" align="center">
				<LoginForm />
			</Flex>
		</RootContainer>
	);
};

export default LoginPage;
