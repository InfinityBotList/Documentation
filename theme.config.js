import * as Icons from '@geist-ui/react-icons';

export default {
  github: 'https://github.com/InfinityBotList',
  docsRepositoryBase: 'https://github.com/InfinityBotList/Documentation',
  projectLink: 'https://infinitybots.gg',
  projectLinkIcon: <Icons.Globe />,
  titleSuffix: ' | Infinity Docs',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Infinity</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Docs Site
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#7289DA" />
      <meta name="theme-color" content="#7289DA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
      <meta name="og:description" content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/Banner.jpg" />
      <meta name="twitter:site:domain" content="docs.infinitybots.gg" />
      <meta name="twitter:url" content="https://docs.infinitybots.gg" />
      <meta name="og:title" content="Infinity Bots | Documentation" />
      <meta name="og:image" content="/Logo.png" />
      <meta name="apple-mobile-web-app-title" content="Infinity Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/Logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/Logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/Logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/Logo.png"
      />
      <meta name="msapplication-TileImage" content="/Logo.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>© {new Date().getFullYear()} Infinity Bot List | All Rights Reserved.</>,
  unstable_faviconGlyph: '👋',
}
