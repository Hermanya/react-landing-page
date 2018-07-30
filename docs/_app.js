import React from 'react'
import propTypes from 'prop-types'
import { Provider as RefunkProvider } from 'refunk'
import {
  SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
import pkg from '../package.json'
import * as Rebass from 'rebass'
import * as ReactLandingPage from '../src'
const scope = {
  ...Rebass,
  ...ReactLandingPage
}

const navOrder = [
  'React Landing Page components',
  'getting-started',
  'components',
  'theming',
  'server-side-rendering'
]

const createNav = routes => [
  ...sortBy([...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Components'
      }
    }), a => {
    const index = navOrder.indexOf(a.name)
    return index < 0 ? Infinity : index
  }),
  {
    key: 'rebass',
    name: 'Made with Rebass',
    path: 'https://github.com/jxnblk/rebass'
  },
  {
    key: 'github',
    name: 'Open Source on GitHub',
    path: 'https://github.com/hermanya/react-landing-page'
  },
  {
    key: 'herman',
    name: 'Made by Herman Starikov',
    path: 'https://github.com/hermanya'
  }
]

export default class App extends React.Component {
  render () {
    const {
      routes,
      route,
      children
    } = this.props
    const nav = createNav(routes)

    const disableLayout = route && route.props && route.props.layout === false

    return (
      <ScopeProvider scope={scope}>
        <RefunkProvider pkg={pkg}>
          <Rebass.Provider>
            {disableLayout ? (
              children
            ) : (
              <SidebarLayout
                {...this.props}
                title='React Landing Page'
                routes={nav}
              />
            )}
          </Rebass.Provider>
        </RefunkProvider>
      </ScopeProvider>
    )
  }
}

App.propTypes = {
  routes: propTypes.any,
  route: propTypes.any,
  children: propTypes.any
}
