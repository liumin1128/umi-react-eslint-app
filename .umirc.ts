import { defineConfig } from 'umi';
import routes from './src/configs/routes';
// import theme from './src/configs/theme';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: { type: 'hash' },
  routes: routes,
  fastRefresh: {},
  // theme: theme,
  publicPath: './',
});
