import Script from "next/script";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Admin() {

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      {/* <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></Script> */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.2/dist/boxicons.js"
        integrity="sha512-KKEQFWV65YzA3d0Ih60GpEKEdT4ERdTgNyZO3aE0jDSEYpb2A16P+CwpPor5DhL3ZlIJtyczAcmjOfo3jQNyUQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>
      <Script
        type="text/javascript"
        src="https://www.gstatic.com/charts/loader.js"
      ></Script>

      <Script src="/scripts/grafico-admin.js"></Script>

      {/* <div className="grid"> */}
      <section className="navBar">
        <div className="avatar">
          <div className="image">
            <img className="img-avatar" src="/image/man-profile.svg" alt="" />
          </div>
          <div className="name-types">
            <span className="name-type">Toma Sanimbo</span>
            <span className="admin-type">Admin</span>
          </div>
        </div>

        <div className="form">
          <form action="">
            <input className="input-text-1" type="search" name="" id="" />

            <button type="button">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>

        <div className="bell">
          <i className="bx bx-bell"></i>
        </div>
      </section>

      <section id="sideBar">
        <div className="brand">
          <div className="avatar">
            <img layout="fill" src="/image/man-profile.svg" alt="" />
          </div>
          <div className="dash">
            <i className="iconBoard bx bxs-dashboard"></i>
            <span>Dashboard</span>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">
                <a>
                  <i className="icon  bx bx-home-heart"></i>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-money-withdraw"></i>
                  Financiamento
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-git-merge"></i>
                  Investimento
                </a>
              </Link>
            </li>
            <span>Administracao</span>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-building"></i>
                  Empresa
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-group"></i>
                  Clientes
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-user"></i>
                  Usuarios
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-at"></i>
                  Email
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-cog"></i>
                  Config
                </a>
              </Link>
            </li>
            <span>Helps</span>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-square"></i>
                  Mensagem
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-rounded"></i>
                  Chat
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-message-rounded"></i>
                  Contactos
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <i className="icon bx bx-support"></i>
                  Suport
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="side-post">
        <h1>Luandas</h1>
      </section>
    </>
  );
}
