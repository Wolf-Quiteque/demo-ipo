import Link from "next/link";
export default function Login() {
  return (
    <>
      <section className="s-login-acesso ">
        <div className="container ">
          <div className="texto">
            <h1>Bem Vindo de Volta</h1>
            <p>
              Tenha acesso a sua conta em um instante, comece a negociar para
              dar vida aos seus objectivos
            </p>
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
              <div className="account">
                <p>tenho uma conta?</p>
                <Link href="acesso/register">
                  <a>criar conta</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
