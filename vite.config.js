import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {defineConfig} from 'vite'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader(),
        Components({
        }),
    ],
})
