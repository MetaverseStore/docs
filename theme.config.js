export default {
  github: 'https://github.com/MetaverseStore',
  docsRepositoryBase: 'https://github.com/MetaverseStore/docs/tree/main',
  titleSuffix: ' – Metastore',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Metastore</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        - The Metaverse Marketplace
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="The Metaverse Marketplace" />
      <meta name="og:description" content="The Metaverse Marketplace" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/og.png" />
      <meta name="twitter:site:domain" content="meta-store.in" />
      <meta name="twitter:url" content="https://meta-store.in" />
      <meta name="og:title" content="Metastore: The Metaverse Marketplace" />
      <meta name="og:image" content="/og_image.png" />
      <meta name="apple-mobile-web-app-title" content="Metastore" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-150x150.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  darkMode: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Metastore.</>
}
