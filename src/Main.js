import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { FormattedMessage, intlShape, injectIntl, defineMessages } from 'react-intl'
import { routes } from './routes'
import MainMenu from './modules/core/components/MainMenu'
import NotFound from './modules/core/components/404'
import HomePage from './modules/HomePage'
import LocaleToggle from './modules/LocaleToggle'

const messages = defineMessages({
  helloWorld2: {
    id: 'app.hello_world2',
    defaultMessage: 'Hello World 2!',
  },
})

class Main extends React.Component {
  render() {
    return(
      <div>
        <MainMenu />
        <h1>Hello World</h1>
        <h1><FormattedMessage
          id="app.hello_world"
          defaultMessage="Hello World!"
          description="Hello world header greeting"
        /></h1>
        <h1>{this.props.intl.formatMessage(messages.helloWorld2)}</h1>
        <LocaleToggle locale={this.props.intl.locale} />
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
          <Route path="/ru" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
Main.propTypes = {
  intl: intlShape.isRequired,
}
export default injectIntl(Main)