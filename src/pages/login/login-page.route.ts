import { createElement } from 'react';
import { redirect, RouteObject } from 'react-router-dom';
import { sessionModel } from '~entities/session';
import { pathKeys } from '~shared/lib/react-router';
import { LoginPage } from './login-page.ui';

export const loginPageRoute: RouteObject = {
  path: pathKeys.login(),
  element: createElement(LoginPage),
  loader: async (args) => {
    if (sessionModel.hasToken()) {
      return redirect(pathKeys.home());
    }

    // sessionQueries.userService.prefetchQuery();
    return args;
  },
};
