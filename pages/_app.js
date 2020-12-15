import '../styles/globals.scss';
import Footer from '../src/components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><Footer /></>
}

export default MyApp
