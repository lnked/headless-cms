import * as React from 'react';
import loadable from '@loadable/component';
import { Route, Switch, withRouter } from 'react-router-dom';

import { setHistory } from 'utils/redirect';

import { Home } from 'pages/Home';

export const NoMatch = loadable(() => import(
  /* webpackChunkName: "nomatch", webpackPrefetch: true */
  'pages/NoMatch'
));

export const routes = [
  { keyName: 'navigation.home',     to: '/',          component: Home, exact: true },
  { keyName: 'navigation.login',    to: '/login',     component: Home, exact: true },
  { keyName: 'navigation.meta',     to: '/meta',      component: Home },
  { keyName: 'navigation.users',    to: '/users',     component: Home },
  { keyName: 'navigation.keys',     to: '/keys',      component: Home },
  { keyName: 'navigation.settings', to: '/settings',  component: Home },
  { keyName: 'navigation.content',  to: '/content',   component: Home },
];

function HistorySetter({ history }: any) {
  setHistory(history);
  return null;
}

export type RouteProps = {};

function Switcher(store: any) {
  return (
    <React.Fragment>
      <Route component={HistorySetter} />

      <Switch>
        <Route path='/' component={Home} exact />

        {routes.map(({ keyName, to, component: Component, exact = false, ...restProps }) => (
          <Route
            {...restProps}
            key={keyName}
            path={to}
            exact={exact}
            render={props => <Component {...store} {...props} />}
          />
        ))}

        <Route path="*" render={props => <NoMatch {...store} {...props} />} exact />
      </Switch>
    </React.Fragment>
  );
}

export default withRouter(Switcher);
