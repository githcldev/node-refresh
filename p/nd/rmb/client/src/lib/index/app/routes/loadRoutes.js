// @flow

// #region imports
import loadable from '@loadable/component';
// #endregion

export const PrivateRoute = loadable(() => import('./privateRoute'));

export const P = loadable(() => import('../../lib/pages/containers/p'));

export const Login = loadable(() => import('../../lib/pages/containers/login'));
export const Index = loadable(() => import('../../lib/pages/containers/index'));
export const ContainerWidgets = loadable(() => import('../../lib/pages/containers/widgets'));
export const About = loadable(() => import('../../lib/pages/containers/about'));

// export const CancelAsync = loadable(() => import('../../lib/pages/containers/cancelAsync'));
// export const AsyncCounter = loadable(() => import('../../lib/pages/containers/asyncCounter'));

export const DynamicContent = loadable(() => import('../../lib/pages/containers/dynamicContent'));