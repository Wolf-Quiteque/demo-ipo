import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      {router.pathname != "/admin" && router.pathname != "/financ" && (
        <Navbar />
      )}
      <div className="">{children}</div>
      {router.pathname != "/admin" && router.pathname != "/financ" && (
        <Footer />
      )}
    </>
  );
}
