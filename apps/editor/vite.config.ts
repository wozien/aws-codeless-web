import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 8001,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
