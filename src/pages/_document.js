import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-h-screen min-w-screen h-[300vh] overflow-y-scroll overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
