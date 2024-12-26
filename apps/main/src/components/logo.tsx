import { LogoSvg } from '@/icons/logo';
import { css } from '@emotion/css';
import { Badge, Flex, Tag, Typography, theme } from 'antd';
import type { FlexProps } from 'antd/lib';

const classes = {
	logoName: css({
		lineHeight: 1,
		fontFamily:
			"'__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",
		marginTop: 6,
		fontSize: 16,
		fontWeight: 600,
	}),
};

export const Logo: React.FC<
	Omit<FlexProps, 'children'> & {
		collapsed?: boolean;
	}
> = (props) => {
	return (
		<Flex {...props}>
			{/* AWS Codeless
      <Tag color="gra" >PRO</Tag> */}
			<Flex justify="flex-start" align="center" gap={8}>
				<LogoSvg height={28} width={28} />
				{props.collapsed ? null : (
					<Typography.Text className={classes.logoName}>
						AWS Codeless
					</Typography.Text>
				)}
			</Flex>
		</Flex>
	);
};
