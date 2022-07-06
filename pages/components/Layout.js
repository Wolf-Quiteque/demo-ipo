import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      {router.pathname != "/admin" && <Navbar />}
      <div className="">{children}</div>
      {router.pathname != "/admin" && <Footer />}
    </>
  );
}
