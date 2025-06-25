import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // NProgress styles
// import '@/styles/nprogress.css'; // Custom styles (optional)

import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import '../pages/index.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
// import 'react-floating-whatsapp/dist/index.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
        <FloatingWhatsApp
        phoneNumber="918355896311"
        accountName="Support"
        avatar="/logo.png" // Optional: your avatar image
        statusMessage="Online"
        chatMessage="Hello! 👋 How can we assist you?"
        placeholder="Type your message"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </Layout>
  );
}
