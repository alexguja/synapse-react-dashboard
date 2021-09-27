import { useState } from "react"
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...props}) => {
  const [user, setUser] = useState(localStorage.getItem("user"));

   return (
    <Route
      {...props}
      render={routeProps =>
        user === "logged-in" ? <Component {...routeProps} /> :  <Redirect to="/login" />
      }
    />
  )
}

export default AuthenticatedRoute;