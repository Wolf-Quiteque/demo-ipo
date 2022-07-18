import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname != "/admin" && <Navbar />}
      {router.pathname != "/financ" && <Navbar />}
      <div className="">{children}</div>
      {router.pathname != "/financ" && <Footer />}
      {router.pathname != "/admin" && <Footer />}
    </>
  );
}
