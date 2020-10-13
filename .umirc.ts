import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  ssr: {},
  dynamicImport: {},
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      wrappers: ['@/layouts/MainLayout'], // 注释该行则ssr正常生效
    },
  ],
});
