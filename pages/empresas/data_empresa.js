import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";

export default function DataEmpresa() {
  return (
    <>
      <section className="dadoEmpresa padding">
        <div className="container">
          <div className="box-info">
            <div className="investido card-Box">
              <span>Valor investido</span>
              <h2>1.000.000,00</h2>
              <h3>Kwanzas</h3>
            </div>
            <div className="ganhos card-Box">
              <span>Ganhos</span>
              <h2>1.000.000,00</h2>
              <h3>Kwanzas</h3>
            </div>
          </div>

          <div className="info-analytic">
            <h2>Dados Empresa</h2>

            <div className="empresas">
              <div className="imageEmpresa empresa">
                <span>Emainvest</span>
                <div className="content-image">
                  {/* <Image
                    layout="fill"
                    className="image-list"
                    src="/image/HERO.jpg"
                    alt=""
                  /> */}
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  enim doloremque nostrum nobis repellendus tempora id
                  blanditiis quae, adipisci voluptas ducimus quidem atque magnam
                  animi. Veritatis molestiae qui rem nemo incidunt totam,
                  laborum, temporibus minima culpa officiis quasi, dicta
                  accusantium.
                </p>

                <button className="btn btn-primary" >reclamar</button>
              </div>

              <div className="analytic  empresa">
                <span>Emainvest</span>
                <div className="content-analytic">
                  <h1>Aqui vai o grafico</h1>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                  enim doloremque nostrum nobis repellendus tempora id
                  blanditiis quae, adipisci voluptas ducimus quidem atque magnam
                  animi. Veritatis molestiae qui rem nemo incidunt totam,
                  laborum, temporibus minima culpa officiis quasi, dicta
                  accusantium.
                </p>
                <button className="btn btn-primary">cancelar</button>
              </div>
            </div>
          </div>

          <div className="dados_actualizado">
            <div className="empresaemBaixa box__actaualizada">
              <h2>EMPRESA EM BAIXA</h2>
              <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <table>Moeda</table>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className="empresaemBaixa box__actaualizada">
              <h2>EMPRESA EM Alta</h2>
              <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <table>Moeda</table>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className="empresaemBaixa box__actaualizada">
              <h2>EMPRESA EM Recente</h2>
              <div className="tabela">
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <table>Moeda</table>
                    <th>Price</th>
                    <th>Investimento</th>
                    <th>Raking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Emainvest</td>
                    <table>Ao</table>
                    <td>400</td>
                    <td>25</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>

        
      </section>


      <section className="paginacao padding-20">
          <div className="container">
            <div className="paginas">
              <span>Prev</span>
              <span>1</span>
              <span className="active" >2</span>
              <span>3</span>
              <span>Next</span>
            </div>

            <div className="impressao">
             
          </div>

          </div>

          
        </section>
    </>
  );
}
