import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "../pages/index.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
