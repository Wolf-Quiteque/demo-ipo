
import Link from "next/link"

export default function Register(){
  return (
    <>
     <section className="login-acesso padding">
          <div className="min-container ">
            <div className="login-area">
              <div className="text-left">
                  <h1>Obrigado por nos escolher</h1>
                  <p>
                  Cria a sua conta em poucos minutos, dicida voce mesmo o que fazer.
                  </p>
              </div>
              <div className="login-acess">
                <form action="" className="form">
                  <div className="form-control">
                    <input type="text" placeholder="Nome" required/>
                  </div>
                  <div className="form-control">
                    <input type="text" placeholder="Sobrenome" required/>
                  </div>
                  <div className="form-control">
                    <input type="text" placeholder="Digite seu email" required/>
                  </div>
                  <div className="form-control">
                    <input type="password" placeholder="Digite sua senha" required/>
                  </div>
                  <div className="form-checkbox">
                    <input id="rem" type="checkbox" placeholder="Digite sua senha"  required/>
                  <label className="label-register" htmlFor="rem">Ao marcar esta opção concorda com os termos e as politicas de utilização,
de acordo as normas da EMAINVEST. </label>
                    
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


     </section>
    </>
  );
}