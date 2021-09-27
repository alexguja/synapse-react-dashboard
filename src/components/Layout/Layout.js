import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from '../../components/Auth/RouteComponents/AuthenticatedRoute';
import { Home, Dashboard, Login, Signup } from "../../pages"

const Layout = () => {
    return (
        <Switch>
          <AuthenticatedRoute exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
    );
}
 
export default Layout;
