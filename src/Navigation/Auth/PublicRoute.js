// A wrapper for <Route> that redirects to the login

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./ProvideAuth";
function PublicRoute({ children, ...rest }) {
// debugger
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (auth.innova_user && auth.innova_user.token) ? (
                    <Redirect
                        to={{
                            pathname: auth.innova_user.role + "/Dashboard",
                            state: { from: location },
                        }}
                    />
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        />
    );
}
export default PublicRoute;

