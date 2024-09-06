import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import { ContainerWidgets, Index, About, Login, DynamicContent, PrivateRoute, P } from './loadRoutes';
const AppRoutes = (props) => {
  const { redirect, redirectPath } = props
  var rp = (redirect) ? {
    path: redirectPath,
    comp: DynamicContent
  } : {
      path: '/index',
      comp: Index
    };
  return (
    <Switch>
      {redirect ? <Redirect exact from="/" to={rp.path} component={rp.comp} /> : null}
      <Route exact path="/" component={ContainerWidgets} />
      <Route exact path="/index/widget" component={ContainerWidgets} />
      <Route exact path="/index" component={Index} />
      <Route exact path="/index/about" component={About} {...props} />
      {/* <Route exact path="/index/ca" component={CancelAsync} />
      <Route exact path="/index/ac" component={AsyncCounter} /> */}
      <Route exact path="/index/login" component={Login} {...props} />
      <PrivateRoute path='/indexp' component={P} {...props} />
      <Route path="/index/:pageUrl" component={DynamicContent} />
    </Switch>
  )
}
export default AppRoutes
