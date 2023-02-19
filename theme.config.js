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
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || 'Documentation for Infinity Bot List',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
        ]
      },
      titleTemplate: '%s – Infinity Docs',
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://docs.botlist.site'
      }
    }
  },
}