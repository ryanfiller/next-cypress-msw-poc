// if (process.env.NODE_ENV === 'test') {
  require('../msw/index.js')
// }

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
