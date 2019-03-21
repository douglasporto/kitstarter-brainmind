const Login = resolve => {
  require.ensure(['./main'], () => {
    resolve(require('./main')); // eslint-disable-line global-require
  });
};

export default [
  {
    name: 'login.index',
    path: '/login',
    component: Login,
    meta: { requiresAuth: false }
  }
];
