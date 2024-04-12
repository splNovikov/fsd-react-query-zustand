import { NavLink, Outlet } from 'react-router-dom';
import { pathKeys } from '~shared/lib/react-router';

export function GenericLayout() {
  // const { data } = useSuspenseQuery(sessionQueries.userService.queryOptions());

  return (
    <>
      {/* {data ? <UserNavigation /> : <GuestNavigation />} */}
      <GuestNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function GuestLayout() {
  return (
    <>
      <GuestNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export function NakedLayout() {
  return <Outlet />;
}

function GuestNavigation() {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to={pathKeys.home()}>
          conduit
        </NavLink>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" to={pathKeys.login()}>
              Login
            </NavLink>
            <NavLink className="nav-link" to={pathKeys.home()}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink className="logo-font" to={pathKeys.home()}>
          fsd-react-query-zustand
        </NavLink>
      </div>
    </footer>
  );
}
