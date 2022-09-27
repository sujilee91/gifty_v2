import Document, { Html, Head, Main, NextScript } from 'next/document'
import styled from 'styled-components'

const Body = styled.body`
  margin: 0 !important;
`
export default class MyDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps
    return (
      <Html>
        <Head>
          <title>Gifty - Sharing is caring</title>
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
