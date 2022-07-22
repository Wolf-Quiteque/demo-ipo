import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status != "authenticated" && router.pathname == "/admin") {
    router.replace("/acesso");
  }

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
