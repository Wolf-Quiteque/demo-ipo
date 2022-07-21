import Link from "next/link";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const [email, setemail] = useState();
  const [senha, setsenha] = useState();

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "authenticated") {
    router.replace("/admin");
  }

  var toaststate;
  const [loading, setloading] = useState(false);

  const onFormSubmit = async (e) => {
    setloading(true);
    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: email.toLowerCase(),
      password: senha,
    });

    if (!result.error) {
      router.replace("/admin");

      //console.log(result.error)
    } else {
      setloading(false);

      alert(result.error);
    }
  };

  return (
    <>
      <section className="login-acesso padding">
        <div className="min-container ">
          <div className="login-area">
            <div className="text-left">
              <h1>Bem Vindo de Volta</h1>
              <p>
                Tenha acesso a sua conta em um instante, comece a negociar para
                dar vida aos seus objectivos
              </p>
            </div>
            <div className="login-acess">
              <form onSubmit={onFormSubmit} className="form">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email /Telefone"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => {
                      setsenha(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-checkbox">
                  <label htmlFor="rem">Lembrar</label>
                  <input
                    id="rem"
                    type="checkbox"
                    placeholder="Digite sua senha"
                  />
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
  );
}
