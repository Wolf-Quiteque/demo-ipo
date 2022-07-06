import Link from "next/link";
import Image from "next/image";
// import "../../public/scripts/jquery-3.6.0.min.js"
import Script from "next/script";

export default function Details() {
  return (
    <>
      <section className="detalhes-company padding">
        <div className="container">
          <nav className="informar">
            <Link href="/empresas">
              <div className="back">
                <i className="back-arrow fa-solid fa-arrow-left-long"></i>Back
              </div>
            </Link>
            <i className="heart fa-regular fa-heart favorite-1"></i>
          </nav>
          <div className="name-company">
            <h1 className="title-name">Minhas informacoes</h1>
            <p>dados do IPO</p>
          </div>

          <section className="details-company">
            <div className="image">
              <Image
                layout="fill"
                className="image-foto"
                src="/image/HERO.jpg"
                alt=""
              />
            </div>
            <div className="number-invest">
              <h1>25</h1>
              {/* <h2>Investidores</h2> */}
              <h2>Investidores</h2>
            </div>
            <div className="info-company">
              <h1>Minhas information</h1>
              <div className="top">
                <div className="dados-semana">
                  <ul>
                    <li>semana</li>
                    <li>dia</li>
                    <li>mes</li>
                    <li>ano</li>
                    <li>Tempo na bolsa</li>
                  </ul>
                </div>
                <div className="dados-day">
                  <ul>
                    <li>Quinta feira</li>
                    <li>26</li>
                    <li>setembro</li>
                    <li>22</li>
                    <li></li>
                    <li></li>
                    <li>5</li>
                  </ul>
                </div>

                <div className="infoCompany">
                  <div className="cardDetails">
                    {/* Preco por accao */}
                    <h2>Peco por accaoo</h2>
                    <h3>360kz</h3>
                  </div>

                  {/* Investimento Minimo */}
                  <div className="cardDetails">
                    <h2>Investimento minimo</h2>
                    <h3>360kz</h3>
                  </div>
                  <div className="cardDetails">
                    <h2>Peco por accaoo</h2>
                    <h3>360kz</h3>
                  </div>
                  <div className="cardDetails">
                    <h2>Peco por accaoo</h2>
                    <h3>360kz</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-company">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda totam adipisci odit, laborum, inventore autem fugit
                sed incidunt nisi dolore voluptate quaerat laudantium
                exercitationem delectus deleniti suscipit nemo tenetur sunt rem
                porro minima neque excepturi labore unde. Recusandae veniam
                voluptates, animi accusantium aliquam necessitatibus nesciunt
                omnis corrupti inventore esse, fugit laborum aliquid! Omnis
                maxime veritatis eos minus culpa quas quaerat nihil alias
                similique labore vero officiis ullam exercitationem sunt aliquam
                eligendi commodi eaque, placeat maiores reprehenderit dolor qui.
              </p>
            </div>
            <div className="button-invest">
              <div className="posicao">
                <div className="avaliacao">
                  <h3>Avaliacao</h3>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="avaliacao">
                  <h3>Raking</h3>
                  <p>6</p>
                </div>
              </div>
              {/* <button className="btn-busca btn-primary" >invest</button> */}
              <Link href="/empresas/invest">
                <button className="btn-busca btn-primary">invest</button>
              </Link>
            </div>
          </section>

          <section className="descriptioCompany">
            <div className="headerTab">
              <div className="visaoCompay active">
                <dir>Visao Global</dir>
              </div>
              <div className="visaoCompay">
                <dir>Visao Global</dir>
              </div>
              <div className="visaoCompay">
                <dir>Visao Global</dir>
              </div>
            </div>

            <div className="TextTab">
              <div id="teu"></div>
              <div className="tab1 text-1">
                <h2>Razões para investir</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  voluptatem ipsa libero magni exercitationem dolores ab dicta
                  dolorum architecto. Fuga sed, totam similique sunt nihil
                  blanditiis reiciendis recusandae pariatur nesciunt dolorum.
                  Quibusdam commodi nisi dolorem vel omnis, earum porro eum,
                  unde esse expedita quo atque.
                </p>
              </div>
              <div className="tab1 text-1">
                <h2>Razões para investir</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  voluptatem ipsa libero magni exercitationem dolores ab dicta
                  dolorum architecto. Fuga sed, totam similique sunt nihil
                  blanditiis reiciendis recusandae pariatur nesciunt dolorum.
                  Quibusdam commodi nisi dolorem vel omnis, earum porro eum,
                  unde esse expedita quo atque.
                </p>
              </div>
              <div className="tab1 text-1">
                <h2>Razões para investir</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  voluptatem ipsa libero magni exercitationem dolores ab dicta
                  dolorum architecto. Fuga sed, totam similique sunt nihil
                  blanditiis reiciendis recusandae pariatur nesciunt dolorum.
                  Quibusdam commodi nisi dolorem vel omnis, earum porro eum,
                  unde esse expedita quo atque.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* <Script src="scripts/main.js" /> */}
    </>
  );
}
