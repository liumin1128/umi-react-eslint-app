export default [{
    path: '/',
    // component: '@/layouts/base',
    wrappers: [
        '@/wrappers/sentry',
        '@/wrappers/material-ui',
        // '@/wrappers/apollo-provider',
    ],
    routes: [
        {
            path: '/',
            // wrappers: ['@/layouts/retro'],
            component: '@/pages/index',
            title: 'Home',
            exact: true,
        },
    ]
}]