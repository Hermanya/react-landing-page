
# Server Side Rendering

This library uses styled-components for styling, which works with server-side rendering.
See the styled-components [documentation][ssr] for more on how to use server-side rendering.

```jsx
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import LandingPage from './LandingPage'

const sheet = new ServerStyleSheet()
const html = renderToString(sheet.collectStyles(<LandingPage />))
const css = sheet.getStyleTags()
```

[ssr]: https://www.styled-components.com/docs/advanced#server-side-rendering
