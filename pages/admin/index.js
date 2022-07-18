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

      <section className="content">
        <div className="main-content">
          <div className="stage-1">
            <div className="control-data">
              <div className="financ">
                <div className="name-section">
                  <h3>Empresa</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Quant</th>
                      <th>desvalorizadas</th>
                      <th>recente</th>
                      <th>valorizada</th>
                      <th>top</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>45</td>
                      <td>20</td>
                      <td>14</td>
                      <td>6</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* area do financiamento */}
              <div className="financ">
                <div className="name-section">
                  <h3>Financiamento</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Quant</th>
                      <th>desvalorizadas</th>
                      <th>recente</th>
                      <th>valorizada</th>
                      <th>top</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>45</td>
                      <td>20</td>
                      <td>14</td>
                      <td>6</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* area do investimento */}
              <div className="financ">
                <div className="name-section">
                  <h3>Investimentos</h3>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Quant</th>
                      <th>desvalorizadas</th>
                      <th>recente</th>
                      <th>valorizada</th>
                      <th>top</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>45</td>
                      <td>20</td>
                      <td>14</td>
                      <td>6</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* financasssss */}
            <div className="total-financ">
              <div className="box box-1 color">
                <div className="entry">
                  <h1>entrada</h1>
                  <span>valor depositado</span>
                </div>
                <div className="icon">
                  <i className="bx bx-dollar"></i>
                </div>
                <span>1.000.000.00</span>
              </div>

              <div className="box box-1 color">
                <div className="entry">
                  <h1>entrada</h1>
                  <span>valor depositado</span>
                </div>
                <div className="icon">
                  <i className="bx bx-dollar"></i>
                </div>
                <span>1.000.000.00</span>
              </div>
              <div className="box box-1 color">
                <div className="entry">
                  <h1>entrada</h1>
                  <span>valor depositado</span>
                </div>
                <div className="icon">
                  <i className="bx bx-dollar"></i>
                </div>
                <span>1.000.000.00</span>
              </div>
              <div className="box box-1 color">
                <div className="entry">
                  <h1>entrada</h1>
                  <span>valor depositado</span>
                </div>
                <div className="icon">
                  <i className="bx bx-dollar"></i>
                </div>
                <span>1.000.000.00</span>
              </div>
            </div>

            {/* relacao */}
            <div className="relacionados">
              {/* kjdsfsfsdfsd */}
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
              <div className="zero">
                <div className="zero-main">
                  <div className="one">
                    <i className="bx bx-user"></i>
                    <span>Clientes</span>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                  <div className="two">
                    <span>66</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="grafico-listaUser">
            <div
              style={{ "max-width": "630px", height: "100%" }}
              id="columnchart_values"
              className="graphic"
            ></div>
            <div className="listaUser">
              <h1>Luanda vida</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Empresa</th>
                    <th>Documento</th>
                    <th>Adicionado</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="name-image">
                      <img
                        style={{
                          "max-width": "40px",
                          height: "40px",
                          "border-radius": "50%",
                        }}
                        src="/image/ipo.svg"
                        alt=""
                      />
                      <span>lucas limitada</span>
                    </td>
                    <td>angola telecom</td>
                    <td>004857789HO042</td>
                    <td>23-06-2021</td>
                    <td>desactivado </td>
                    <td>23-06-2021</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="customers">
            <div className="containeer">
              <div className="customer">
                <div className="head">
                  <h2>Luanda</h2>
                  <Link href="#">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                </div>
                <div className="boxsd">
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                </div>
              </div>
              <div className="customer">
                <div className="head">
                  <h2>clientes</h2>
                  <Link href="#">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                </div>
                <div className="boxsd">
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                </div>
              </div>
              <div className="customer">
                <div className="head">
                  <h2>Usuarios</h2>
                  <Link href="#">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                </div>
                <div className="boxsd">
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                </div>
              </div>
              <div className="customer">
                <div className="head">
                  <h2>Chat</h2>
                  <Link href="https//:www.google.com">
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                </div>
                <div className="boxsd">
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                  <img src="/image/HERO.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="s-merkat">
            <div className="containeer">
              <div className="mercados">
                <h2>Mercado da bolsa</h2>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                    <th>company</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                    <td>Emainvest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>

      <section className="side-post">
        <h1>Luandas</h1>
      </section>
    </>
  );
}
