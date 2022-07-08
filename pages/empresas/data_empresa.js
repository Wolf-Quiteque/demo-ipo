import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function DataEmpresa() {
  return (
    <>
      <Script src="https://www.gstatic.com/charts/loader.js"></Script>
      <Script src="/scripts/graphic.js"></Script>
      <section className="s-dataEmpresa padding">
        <div className="container-2">
          <div className="investido">
            <div className="card-box">
              <span>Valor investido</span>
              <h2>1.000.000,00</h2>
              <h3>Kwanzas</h3>
            </div>
          </div>
          <div className="investido">
            <div className="card-box">
              <span>Ganhos</span>
              <h2>1.000.000,00</h2>
              <h3>Kwanzas</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="s-analytic">
        <div className="container-2">
          <h2>Dados Empresa</h2>

          <div className="empresas">
            <div className="imageEmpresa empresa">
              <span>Emainvest</span>
              <div className="content-image">
                <img className="image-list" src="/image/HERO.jpg" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                enim doloremque nostrum nobis repellendus tempora id blanditiis
                quae, adipisci voluptas ducimus quidem atque magnam animi.
                Veritatis molestiae qui rem nemo incidunt totam, laborum,
                temporibus minima culpa officiis quasi, dicta accusantium.
              </p>

              <button className="btn btn-primary">reclamar</button>
            </div>

            <div className="analytic  empresa">
              <span>Emainvest</span>
              <div id="columnchart_values" className="content-analytic">
                {/* <h1 id="columnchart_values"></h1> */}
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                enim doloremque nostrum nobis repellendus tempora id blanditiis
                quae, adipisci voluptas ducimus quidem atque magnam animi.
                Veritatis molestiae qui rem nemo incidunt totam, laborum,
                temporibus minima culpa officiis quasi, dicta accusantium.
              </p>
              <button className="btn btn-primary">cancelar</button>
            </div>
          </div>
        </div>
      </section>

      <section className="s-information-market">
        <div className="container-2 dados_actualizado">
          <div className="empresaemBaixa box__actaualizada">
            <h2>EMPRESA EM BAIXA</h2>
            <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Moeda</th>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="empresaemAlta box__actaualizada">
            <h2>EMPRESA EM Alta</h2>
            <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Moeda</th>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="empresaemRecent box__actaualizada">
            <h2>EMPRESA Recente</h2>
            <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Moeda</th>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="paginacao padding-20">
        <div className="container">
          <div className="paginas">
            <span>Prev</span>
            <span>1</span>
            <span className="active">2</span>
            <span>3</span>
            <span>Next</span>
          </div>

          <div className="impressao"></div>
        </div>
      </section>
    </>
  );
}
