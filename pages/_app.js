import '../styles.css';
import 'nextra-theme-docs/style.css';
import Prism from 'prism-react-renderer/prism';
(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-csharp');
require('prismjs/components/prism-java');
require('prismjs/components/prism-json');
require('prismjs/components/prism-json5');
require('prismjs/components/prism-jsonp');
require('prismjs/components/prism-python');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-markdown');
require('prismjs/components/prism-xml-doc');

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
