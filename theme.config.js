import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {

  project: {
    link: 'https://github.com/InfinityBotList',
  },
  chat: {
    link: 'https://infinitybots.gg/discord'
  },
  navigation: {
    prev: true,
    next: true
  },
  docsRepositoryBase:
    'https://github.com/InfinityBotList/Documentation',
  editLink: {
    text: 'Edit this page on GitHub'
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig()
    return <>
      <meta name="msapplication-TileColor" content="#7289DA" />
      <meta name="theme-color" content="#7289DA" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Documentation for Infinity Bot List"
      />
      <meta
        name="og:description"
        content="Documentation for Infinity Bot List"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/Bannerz.png" />
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
  },
  logo: (
    <>
      <img
          className="md:inline object-contain hidden"
          style={{ height: '2em' }}
          src="/infinity.png"
        />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Infinity
      </span>
      <span style={{ marginLeft: '.4em', fontWeight: 800, color: '#8A6AFD' }}>
        Docs
      </span>
      <span className="ml-2 py-0 px-1 font-mono text-xs no-underline w-full text-gray-600 bg-black border border-transparent border-gray-200 rounded-md bg-opacity-5 dark:bg-white dark:text-white dark:border-gray-700 dark:bg-opacity-5">
        v6.0.0
      </span>
    </>
  ),
  footer: {
    text: <span>
     © {new Date().getFullYear()} <a href="https://infinitydev.team" target="_blank">Infinity Development LLC</a>.
    </span>,
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig({})
    return {
      additionalLinkTags: [
        {
          href: '/infinity.png',
          rel: 'apple-touch-icon',
          sizes: '180x180'
        },
        {
          href: '/infinity.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/infinity.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/infinity.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/infinity.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Infinity Docs', name: 'apple-mobile-web-app-title' },
        { content: '#7289DA', name: 'msapplication-TileColor' },
        { content: '/infinity.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Documentation for Infinity Bot List',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://docs.botlist.site/Bannerz.png' }
        ]
      },
      titleTemplate: '%s – Infinity Docs',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://docs.botlist.site',
      }
    }
  },
}