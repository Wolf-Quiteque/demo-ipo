// import "../styles/globals.css"
import "../styles/globals.css"
import Layout from "../pages/components/Layout"
import Head from "next/head";
import Script from "next/script";



export default function App({Component, ...pageProps}){
  return (<>
      {/* <Script src="scripts/main.js" /> */}
    <Layout>
      <Component {...pageProps}/>
    </Layout></>

  );
}
 