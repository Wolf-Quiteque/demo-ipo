
import Link from "next/link"
import Image from "next/image"
import Script from "next/script";

export default function GetMoney(){
  return (
    <>

    <Script src="/scripts/main.js" strategy="lazyOnload" ></Script>
      <div id="Money">
        <section className="tirarFundo padding" >
          <div className="container">
            <h2 id='th' style={{color: "blue"}}>Caelum cursos</h2>

              <div className="container-800">
                  <div className="texto">
                    <h1 className="title" >SOLICITAR UM LEVANTAMENTO   </h1>
                    <p className="description">
                        O valor solicitado sera transferido para a plataforma principal, <span>EMAINVEST.AO</span>
                        certifique-se CONSULTAR a transferencia.
                    </p>
                  </div>

                <div className="boxMoney">
                  <h3>Informe a quantidade por favor!</h3>
                  <form action="POST" className="form">
                      <div className="form-control">
                        <input type="text" value={'Ao'}/>
                        <input required type="number" name="getMoney" id="getMoney" placeholder="2.000.000,00"/>
                      </div>
                      <button className="btn-busca" >LEVANTAR</button>
                  </form>
                </div>
              </div>
          </div>
        </section>

        <section className="tabelaReferencia padding">
          <div className="container">
            <h2>Registro das transferencia</h2>
           
            <div className="tabela__result">
              <table>
                <thead>
                  <tr>
                    <th>empresa</th>
                    <th>Moeda</th>
                    <th>valor</th>
                    <th>hora</th>
                    <th>dia</th>
                    <th>mes</th>
                    <th>ano</th>
                    <th>Id_referencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
              
                    <td>Nerd Photo</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Nerd Photo</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Banco bai</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Emainvest</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Coca cola</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Coca cola</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Coca cola</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                  <tr>
              
                    <td>Coca cola</td>
                    <td>Ao</td>
                    <td>124.000,00</td>
                    <td>12:25</td>
                    <td>20</td>
                    <td>setembro</td>
                    <td>2022</td>
                    <td>7855sa4c4d</td>
                 
                  </tr>
                </tbody>
              </table>
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
              <form action="">
                  <div className="form-control">
                    <input type="number" placeholder="10" name="" id="" min={0} max={25} />
                    <h4>Max<span>25</span></h4>
                  </div>
                  <button className="btn btn-primary" >imprimir</button>  
              </form>
          </div>

          </div>

          
        </section>


      </div>
    {/* <Script src="scripts/main.js" />
    <Script src="scipts/java.min.js" /> */}
    </>
  );
}