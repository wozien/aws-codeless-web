import { defineConfig } from 'tsup';

export default defineConfig(() => ({
	minify: false,
	entry: ['src/index.ts'],
	splitting: false,
	sourcemap: false,
	clean: true,
	format: ['esm'],
	external: [
		'react',
		'react-dom',
		'@craftjs/core',
		'antd',
		'ahooks',
		'lodash-es',
		'axios',
		'@aws-codeless-web/core',
		'@mantine/core',
		'@mantine/hooks',
		'@ant-design/pro-components',
		'@ant-design/icons',
	],
	dts: true,
}));
