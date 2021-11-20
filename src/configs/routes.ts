export default [
  {
    path: '/login',
    component: '@/layouts/login',
    wrappers: [
      '@/wrappers/material-ui',
      '@/wrappers/apollo-provider',
      // '@/wrappers/auth',
    ],
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        title: 'Home',
        exact: true,
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/base',
    wrappers: [
      '@/wrappers/material-ui',
      '@/wrappers/apollo-provider',
      // '@/wrappers/auth',
    ],
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        title: 'Home',
        exact: true,
      },
      {
        path: '/dynamic',
        component: '@/pages/dynamic',
        title: 'Dynamic',
        exact: true,
      },
    ],
  },
];
