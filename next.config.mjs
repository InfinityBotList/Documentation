import nextra from 'nextra'

const withNexta = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: false
});

export default withNexta({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
})
