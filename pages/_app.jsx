import "../styles/globals.scss";
import Layout from "../components/Layout";

export default function ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
