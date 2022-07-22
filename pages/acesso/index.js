import Link from "next/link";
export default function Login() {
  return (
    <>
      {/* <div className="container"> */}
      <section id="s-login-acesso js-login-acesso" className="s-login-acesso ">
        <div className="container ">
          <div className="texto">
            <h1>Bem Vindo de Volta</h1>
            <p>
              Tenha acesso a sua conta em um instante, comece a negociar para
              dar vida aos seus objectivos
            </p>
          </div>

          <div className="btn-account-logar">
            <button className=" js-btn-account btn-busca">logar</button>

            <button className=" js-btn-account btn-busca">criar conta</button>

            {/* <Link href="#s-register-acesso">
              <button className=" js-btn-account btn-busca">logar</button>
            </Link>
            <Link href="#s-register-acesso">
              <button className=" js-btn-account btn-busca">criar conta</button>
            </Link> */}
          </div>

          <div className="login-acess">
            <form action="" className="form">
              <div className="form-control">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Email /Telefone"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  className="input-text"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="form-checkbox">
                <div className="box">
                  <input id="rem" type="checkbox" />
                  <label htmlFor="rem">Lembrar</label>
                </div>
                <Link href="#">
                  <span>esqueci a senha!</span>
                </Link>
              </div>

              <input type="submit" value="Entrar" />
              {/* <div className="create-account">
                <p>tenho uma conta?</p>
                <Link href="acesso/register">
                  <a>logar</a>
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </section>

      {/* Area do registo aqui voce pode encontrar toda a pagina de registo */}

      <section
        id="s-register-acesso js-register-acesso"
        className="s-register-acesso "
      >
        <div className="container ">
          <div className="texto">
            <h1>Obrigado por nos escolher</h1>
            <p>
              Cria a sua conta em poucos minutos, dicida voce mesmo o que fazer.
            </p>
          </div>

          <div className="btn-account-register">
            <button className=" js-btn-account btn-busca">criar conta</button>

            <button className=" js-btn-account btn-busca">logar</button>

            {/* <Link href="#">
              <button className=" js-btn-account btn-busca">criar conta</button>
            </Link>
            <Link href="#s-login-acesso ">
              <button className=" js-btn-account btn-busca">logar</button>
            </Link> */}
          </div>

          <div className="register-acesso">
            <form action="" className="form">
              <div className="form-control">
                <input
                  className="input-text"
                  type="text"
                  placeholder="documento..BI/Passaport"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Sobrenome"
                  required
                />
              </div>
              <div className="form-control ">
                <select className="input-text selected" name="" id="">
                  <option selected>selecione o tipo de conta</option>
                  <option>empresa</option>
                  <option>usuario</option>
                </select>
              </div>
              <div className="form-control">
                <input
                  className="input-text"
                  type="text"
                  placeholder="Digite seu email"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  className="input-text"
                  type="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="form-checkbox">
                <input
                  id="rem"
                  type="checkbox"
                  placeholder="Digite sua senha"
                  required
                />
                <label className="label-register" htmlFor="rem">
                  Ao marcar esta opção concorda com os termos e as politicas de
                  utilização, de acordo as normas da EMAINVEST.{" "}
                </label>
              </div>

              <input type="submit" value="Entrar" />
              {/* <div className="create-account">
                <p>tenho uma conta?</p>
                <Link href="#s-register-acesso">
                  <a>criar conta</a>
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </section>
      {/* </div> */}
    </>
  );
}
