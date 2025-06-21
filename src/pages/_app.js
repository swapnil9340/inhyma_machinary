import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // NProgress styles
// import '@/styles/nprogress.css'; // Custom styles (optional)

import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import '../pages/index.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
