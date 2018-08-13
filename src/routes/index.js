import loadable from 'loadable-components'; // 动态导入

export const Login = loadable(() => import('../pages/login'));
export const Errors = loadable(() => import('../pages/error'));