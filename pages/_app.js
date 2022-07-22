import "/public/styles/globals.css";
// import Layout from "../../pages/components/Layout";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      {/* <Script src="scripts/main.js" /> */}
      <SessionProvider session={session}>
        {" "}
        <Layout>
          <Component {...pageProps} />
        </Layout>{" "}
      </SessionProvider>
    </>
  );
}
