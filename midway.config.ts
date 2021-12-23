import { defineConfig } from '@midwayjs/hooks';

export default defineConfig({
  source: './src/server',
  routes: [
    {
      baseDir: 'controller/home',
      basePath: '/api',
    },
    {
      baseDir: 'controller/user',
      basePath: '/user',
    },
  ],
});
