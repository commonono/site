import Document, { Head, Html, NextScript, Main } from "next/document";

const Page = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8' />

        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ff6200' />
        <meta name='msapplication-TileColor' content='#ff6200' />
        <meta name='theme-color' content='#ff6200' />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500&display=swap'
          rel='stylesheet'
        />
        <meta
          name='description'
          content='Hey, Im Ryan, A 16 Year old Developer.'
        />
        <meta
          name='keywords'
          content='Developer, ryan mcgall, ryanmcgall, rmc, ryan mcgall site, dev, developer ui, ui, ux, html, js, css, ryanmcgall.xyz, rmc, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, '
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default class extends Document {
  render(): JSX.Element {
    return <Page />;
  }
}
