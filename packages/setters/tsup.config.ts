import { defineConfig } from 'tsup'

export default defineConfig(() => ({
  minify: false,
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ["esm"],
  external: ["react", "react-dom", "@craftjs/core", "zustand", "antd", "lodash", "axios"],
  dts: true,
}))