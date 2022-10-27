// A wrapper for <Route> that redirects to the login

import { useAuth } from "./ProvideAuth";
// screen if you're not yet authenticated.
// const [show, setShow] = useState(true);
import { PATH } from "../../config"
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ParentComponentWithSideBar } from "../../assets";
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      onUpdate={() => window.scrollTo(0, 0)}
      render={({ location }) =>
        auth.innova_user && auth.innova_user.token ? (
          <>
            <ParentComponentWithSideBar>
              {children}
            </ParentComponentWithSideBar>
          </>
        ) : (
          <Redirect
            to={{
              pathname: PATH.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
