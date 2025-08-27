import '../styles/globals.css';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}