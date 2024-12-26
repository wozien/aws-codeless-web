import React from 'react';
import { Col, ColProps, Row } from 'antd';
import { ReactMaterialViewType } from '@aws-codeless-web/core';
import { RowProps } from 'antd/lib';

export const RowView: ReactMaterialViewType<HTMLDivElement, RowProps> = (
	{ children, ...props },
	ref,
) => {
	return (
		<Row ref={ref} {...props}>
			{children}
		</Row>
	);
};

export const ColView: ReactMaterialViewType<HTMLDivElement, ColProps> = (
	{ children, ...props },
	ref,
) => {
	return (
		<Col ref={ref} {...props}>
			{children}
		</Col>
	);
};
