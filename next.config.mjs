import nextra from 'nextra'

const withNexta = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
});

export default withNexta({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
})