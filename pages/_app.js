import "/public/styles/globals.css";
// import Layout from "../../pages/components/Layout";
import Layout from "../components/Layout";

export default function App({ Component, ...pageProps }) {
  return (
    <>
      {/* <Script src="scripts/main.js" /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
