export default {
  projectLink: 'https://github.com/InfinityBotList/Documentation',
  docsRepositoryBase: 'https://github.com/InfinityBotList/Documentation',
  titleSuffix: ' – Infinity Docs',
  feedbackLink: () => {
    return 'Give us some feedback →';
  },
  feedbackLabels: 'feedback',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerText: () => {
    return (
      <>
        <a
          rel="noopener"
          className="w-full inline-flex items-center no-underline text-current font-semibold grayscale opacity-75 hover:opacity-100"
          href="https://nextjs.org/"
          target="_blank"
        >
          <span className="mr-1">© 2022 Infinity Bot List | Powered By</span>
          <span>
            <img src="/Nextjs.png" height={20} width={20} />
          </span>
        </a>
      </>
    );
  },
  footerEditOnGitHubLink: true, // will link to the docs repo
  floatTOC: true,
  logo: () => {
    return (
      <>
        <img
          className="md:inline object-contain hidden"
          style={{ height: '2em' }}
          src="/infinity.png"
        />
        <span className="ml-2 mr-2 font-extrabold hidden md:inline">
          Infinity
        </span>
        <span className="text-color2 font-normal hidden md:inline">Docs</span>
      </>
    );
  },
  footerEditLink: () => {
    return 'Edit this page on GitHub →';
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#7289DA" />
      <meta name="theme-color" content="#7289DA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API"
      />
      <meta
        name="og:description"
        content="Official Documentation for the Infinity Bot List Website, Discord Server, Staff Team and API"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/InfinityBotList-Banner.png" />
      <meta name="twitter:site:domain" content="docs.infinitybots.gg" />
      <meta name="twitter:url" content="https://docs.infinitybots.gg" />
      <meta name="og:title" content="Infinity Bots | Documentation" />
      <meta name="og:image" content="/infinity.png" />
      <meta name="apple-mobile-web-app-title" content="Infinity Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/infinity.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/infinity.png" />
      <meta name="msapplication-TileImage" content="/infinity.png" />
    </>
  ),
};
