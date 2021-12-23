import injectExterbals from 'vite-plugin-inject-externals'
import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import hooks from '@midwayjs/vite-plugin-hooks';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        injectExterbals({
            injectTo: '<!-- Custom placeholder for vite plugin inject externals -->',
            modules: [
                {
                    name: 'react',
                    global: 'React',
                    path: 'https://unpkg.com/react@17/umd/react.production.min.js',
                },
                {
                    name: 'react-dom',
                    global: 'ReactDOM',
                    path: 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
                },
            ],
        }),
        hooks(),
        reactRefresh(),
    ],
    // resolve: {
    //     alias: {
    //         "react": "https://esm.sh/react@17",
    //         "react-dom": "https://esm.sh/react-dom@17",
    //     }
    // }
});
