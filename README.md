
# React Landing Page

React UI component library for building Landing Pages.

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[badge]: https://img.shields.io/travis/hermanya/react-landing-page.svg?style=flat-square
[travis]: https://travis-ci.org/hermanya/react-landing-page
[coverage-badge]: https://img.shields.io/codecov/c/github/hermanya/react-landing-page.svg?style=flat-square
[coverage]: https://codecov.io/github/hermanya/react-landing-page

[downloads-badge]: https://img.shields.io/npm/dw/react-landing-page.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/react-landing-page.svg?style=flat-square
[npm]: https://npmjs.com/package/react-landing-page

[Landing page for this project](https://hermanya.github.io/react-landing-page/)

```sh
npm i react-landing-page@next
```

React Landing Page is a set of highly-composable React components for building advanced landing pages. It is built using Rebass, a library of UI primitives.
Based upon a configurable design system,
Rebass‘s props API makes building consistent, responsive web apps simpler and faster.


## Getting Started

```jsx
import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'

const App = props => (
  <Provider>
    <Hero
    color="black"
    bg="white"
    backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Heading>Name of your app</Heading>
        <Subhead>a couple more words</Subhead>
        <CallToAction href="/getting-started" mt={3}>Get Started</CallToAction>
        <ScrollDownIndicator/>
    </Hero>
  </Provider>
)
```

To use Rebass with [emotion][emotion], import from `rebass/emotion`:

```js
import * as Rebass from 'rebass/emotion'
```

## Features

👋 Hero
🔥 Features
✅ Checklist
💼 Company Logos
🙎 ‍Social Proof
💳 Pricing
📣 Call To Action
📩 Sign Up
👩‍💼 Team


## Documentation

- [Getting Started](https://hermanya.github.io/react-landing-page/getting-started)
- [Theming](https://hermanya.github.io/react-landing-page/theming)
- [Components](https://hermanya.github.io/react-landing-page/components)
- [Server-Side Rendering](https://hermanya.github.io/react-landing-page/server-side-rendering)

### Related

- [rebass][rebass]
- [styled-system][system]
- [grid-styled][gs]
- [styled-components][sc]
- [emotion][emotion]

[rebass]: https://github.com/jxnblk/rebass
[system]: https://github.com/jxnblk/styled-system
[gs]: https://github.com/jxnblk/grid-styled
[sc]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion

---

[Contributing](.github/CONTRIBUTING.md)
|
[MIT License](.github/LICENSE.md)
