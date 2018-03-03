import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes';
import MainMenu from './modules/core/components/MainMenu'
import NotFound from './modules/core/components/404'

const Main = () => {
  return(
    <div>
      <MainMenu />
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact ? true : false}
            path={route.path}
            render={props => (
              <route.component {...props} />
            )}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Main