import Link from "next/link";
export default function Login(){
  return(
    <>
     <section className="login-acesso padding">
          <div className="min-container ">
            <div className="login-area">
              <div className="text-left">
                  <h1>Bem Vindo de Volta</h1>
                  <p>Tenha acesso a sua conta em um instante,
                    comece a negociar para dar vida aos seus objectivos
                  </p>
              </div>
              <div className="login-acess">
                <form action="" className="form">
                  <div className="form-control">
                    <input type="text" placeholder="Email /Telefone" required/>
                  </div>
                  <div className="form-control">
                    <input type="password" placeholder="Digite sua senha" required/>
                  </div>
                  <div className="form-checkbox">
                  <label htmlFor="rem">Lembrar</label>
                    <input id="rem" type="checkbox" placeholder="Digite sua senha"  />
                    
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
          </div>


     </section>
    </>
  )
}