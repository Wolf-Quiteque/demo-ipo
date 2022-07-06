import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export default function Financiamento() {
  return (
    <>
      <Script src="/scripts/main.js" strategy="lazyOnload"></Script>
      <Script
        src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js"
        referrerpolicy="origin"
      ></Script>
      {/*area do dos buttons de activacao e empresa */}
      <div className="header-financiamento">
        <div className="container">
          <div className="tipocompany">
            <span className="empresa"></span>
          </div>
          <div className="companyAtive">
            <form action="">
              <label htmlFor="">
                  <span>conta ativa</span>
                <input type="checkbox" name="" id="" />
              </label>
            </form>
          </div>
        </div>
      </div>
      <section className="financiamento padding">
        <div className="overlay"></div>
        <div className="container">
          {/* Area do texto de informacao */}
          <div className="texto">
            <h1 className="title">Receba um financiamento</h1>
            <p>Digite seus dados para solicitar um financiamento</p>
            <span className="warning">
              ao solicitar um financiamento tera de aguardar a resposta num
              periodo de 24 horas, a pos o envio
            </span>
          </div>

          {/* Area das informacoes que sera obtida para o financiamento */}

          <div className="contactArea">
            <form action="" className="form">
              <div className="form-control doc">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite o NIF da empresa"
                  required
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite o seu BI "
                  required
                />
              </div>
              <div className="form-control doc">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite seu nome"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite seu sobrenome"
                />
              </div>
              <div className="form-control emailMobile">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite seu email"
                  required
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="digite seu telefone"
                  required
                />
              </div>

              <div className="form-textarea">
                <div className="shortInfo">
                  <span>conte o motivo</span>
                  <div className="mount">
                    <span>montante</span>
                    <input type="number" name="" id="" required />
                  </div>
                </div>
                <textarea
                  required
                  placeholder="digite o motivo do financiamneto"
                ></textarea>
              </div>

              <div className="form-submit">
                <input
                  className="btn-submit"
                  type="submit"
                  value="enviar solicitacao"
                />
                {/* <i className="fa-solid fa-paper-plane send"></i> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
