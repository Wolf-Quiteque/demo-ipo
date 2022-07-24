import Link from "next/link";

export default function Register() {
  return (
    <>
      {/* <section className="login-acesso padding">
        <div className="container ">
          <div className="login-area">
            <div className="text-left">
              <h1>Obrigado por nos escolher</h1>
              <p>
                Cria a sua conta em poucos minutos, dicida voce mesmo o que
                fazer.
              </p>
            </div>
            <div className="login-acess">
              <form action="" className="form">
                <div className="form-control">
                  <input type="text" placeholder="Nome" required />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Sobrenome" required />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Digite seu email" required />
                </div>
                <div className="form-control">
                  <input
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
                    Ao marcar esta opção concorda com os termos e as politicas
                    de utilização, de acordo as normas da EMAINVEST.{" "}
                  </label>
                </div>

                <input type="submit" value="Entrar" />
                <div className="account">
                  <p>tenho uma conta?</p>
                  <Link href="/acesso">
                    <a>Fazer login</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="s-register-acesso ">
        <div className="container ">
          <div className="texto">
            <h1>Obrigado por nos escolher</h1>
            <p>
              Cria a sua conta em poucos minutos, dicida voce mesmo o que fazer.
            </p>
          </div>

          <div className="btn-account">
            <button className=" js-btn-account btn-busca">logar</button>
            <button className="js-btn-account btn-busca">criar conta</button>
          </div>

          <div className="register-acess">
            <form action="" className="form">
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
              <div className="create-account">
                <p>tenho uma conta?</p>
                <Link href="/acesso">
                  <a>criar conta</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
}
