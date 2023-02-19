import '../styles.css';
import 'nextra-theme-docs/style.css';
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-python');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-markdown');

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
