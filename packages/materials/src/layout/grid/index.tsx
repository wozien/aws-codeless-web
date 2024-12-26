import * as React from 'react';
import { createReactMaterial } from '@aws-codeless-web/core';
import { RowView, ColView } from './view';
import { Element } from '@craftjs/core';
import { ColPanel, RowPanel } from './panel';
import { rowIcon } from '@/assets/icon';

export const AC_Col = createReactMaterial(ColView, {
	displayName: '栅格-列',
	props: {
		span: 12,
	},
	custom: {
		useResize: true,
		useCanvas: true,
	},
	related: {
		icon: () => <img src={rowIcon} alt="" />,
		settingRender: ColPanel,
	},
});

export const AC_Row = createReactMaterial(RowView, {
	displayName: '栅格-行',
	custom: {
		useResize: true,
		useCanvas: true,
	},
	related: {
		icon: () => <img src={rowIcon} alt="" />,
		settingRender: RowPanel,
	},
});
