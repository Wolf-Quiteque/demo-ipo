import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Navbar() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></Script>

      <header className="header">
        <div className="container">
          <nav className="navbar flex">
            <div className="logo">
              <Link href="/">
                <img src="/image/logo-one.png" alt="" />
              </Link>
            </div>
            <ul className="menu flex">
              <li className="active">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/empresas">
                  <a>Investir</a>
                </Link>
              </li>
              <li>
                <Link href="/empresas/financiamento">
                  <a>Financiamento</a>
                </Link>
              </li>
              {/* <li>
                <Link href="#">
                  <a>Investir</a>
                </Link>
              </li> */}
            </ul>
          </nav>

          
            <Link href="/acesso"><button className="btn-central">entrar</button></Link>
            
          
        </div>
      </header>
    </>
  );
}
