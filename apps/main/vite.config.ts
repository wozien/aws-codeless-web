import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 8000,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		proxy: {
			'/api': {
				target: 'http://localhost:7274/',
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
