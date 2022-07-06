import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>EMAINVEST IPO</title>

        {/* Jquey script usando o CDNs */}

        <link
          rel="stylesheet"
          href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css"
        />
      </Head>

      <section className="hero">
        <div className="container hero-flex">
          <h1>
            {" "}
            Uma maneira incrivel de ver seu negocio crescer é com a{" "}
            <span>EMAINVEST</span>{" "}
          </h1>

          <div className="button">
            <button className="btn btn-primary">entrar</button>
            <button className="btn btn-secondary">investir</button>
          </div>
        </div>
      </section>

      <section className="barra">
        <div className="container barra-flex">
          <div className="info-barra">+ 100 empresas</div>
          <div className="info-barra">+ 200 investidores</div>
          <div className="info-barra">+ 40.000 usuários ativos</div>
        </div>
      </section>

      <section className="dicas">
        <h1 className="title-dicas">
          Porque o{" "}
          <strong>
            EMAINVEST<span>IPO</span>{" "}
          </strong>{" "}
          ?
        </h1>
        <div className="container grid">
          <div className="imgam">
            <Image
              className="imagens"
              src="/image/ipo.svg"
              width={500}
              height={300}
              alt=""
            />
          </div>

          <div className="box-dicas box-grid">
            <div className="info-dicas">
              <h3 className="title3">como investir</h3>
              <p>
                Um negocio de alta renda com as melhores ferramentas que te
                proporcionam um amnbiente facil.
              </p>
            </div>
            <div className="info-dicas">
              <h3 className="title3">como investir</h3>
              <p>
                Um negocio de alta renda com as melhores ferramentas que te
                proporcionam um amnbiente facil.
              </p>
            </div>
            <div className="info-dicas">
              <h3 className="title3">como investir</h3>
              <p>
                Um negocio de alta renda com as melhores ferramentas que te
                proporcionam um amnbiente facil.
              </p>
            </div>
            <div className="info-dicas">
              <h3 className="title3">como investir</h3>
              <p>
                Um negocio de alta renda com as melhores ferramentas que te
                proporcionam um amnbiente facil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ipo padding">
        <div className="container box-flex">
          <h2 className="title">
            Com o{" "}
            <strong>
              <span>IPO</span>
            </strong>{" "}
            voce tem a possibilidade de alavancar o seu <strong>negocio</strong>{" "}
            de duas maneira
          </h2>

          <div className="box-ipo flex">
            <div className="circ box-flex">
              <Image src="/image/po1.svg" width={200} height={200} alt="" />
              <h3 className="title">solicitar um financiamento</h3>
              <p className="description">
                basta pedir um finciamento para que começa a dar vida aos seus
                investimentos.
              </p>
            </div>
            <div className="circ box-flex">
              <Image
                className="box-image"
                src="/image/po1.svg"
                width={200}
                height={200}
                alt=""
              />
              <h3 className="title">solicitar um financiamento</h3>
              <p className="description">
                basta pedir um finciamento para que começa a dar vida aos seus
                investimentos.
              </p>
            </div>
          </div>
        </div>
        <button className="btn btn-primary top">Ler mais</button>
      </section>

      <section className="aplicar padding">
        <div className="container flex-aplicar">
          <div className="texto">
            <h2 className="h2">Saiba como aplicar o seu dinheiro</h2>
            <p className="description">
              A EmainvestIPO trabalha diretamente com empresas emissoras que
              estão abrindo o capital, subscritores e corretoras online criando
              o primeiro utilitário projetado para otimizar a distribuição no
              varejo de ofertas públicas. Emissores e subscritores são capazes
              de obter rastreamento de dados robusto incluindo desempenho e
              padrões, antes e depois da oferta, enquanto as corretoras online
              são capazes de oferecer uma solução chave na mão para participar
              de IPOs. Nossos clientes e parceiros financeiros acessaram e
              participaram com sucesso de ofertas públicas por meio da rede
              EmainvestIPO.
            </p>
          </div>

          <div className="image-aplicar">
            <div className="img-aplicar">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="img-aplicar">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="img-aplicar">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="img-aplicar">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="investir padding">
        <div className="container">
          <h1 className="title">Voce pode obter um financiamento</h1>
          <div className="button">
            <button className="button btn-primary">Obter Fincanciamento</button>
            <button className="button btn-secondary">Investir</button>
          </div>
          {/* financiamneto  */}
          <div className="financiamento">
            <h1>Receba um financiamento</h1>
            <p>aqui voce encontra o jeito certo de dar vida ao seu negocio</p>
            <div className="financ-details">
              <div className="financ-box">
                <Image
                  src="/image/aviso1.svg"
                  width={300}
                  height={170}
                  alt=""
                />
                <h3>Pessoa Fisisca</h3>
              </div>
              <div className="financ-box">
                <Image
                  src="/image/aviso1.svg"
                  width={300}
                  height={170}
                  alt=""
                />
                <h3>Pessoa juridica</h3>
              </div>
            </div>
          </div>

          {/* Investimento */}
          <div className="investir">
            <h1>Comeca a investir</h1>
            <p>
              Trabalhando com o IPO voce tem chance de aumentar 3x o seu lucro
            </p>
            <div className="financ-box">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
              <h3>Pessoa Fisisca</h3>
            </div>
          </div>

          {/* Area do button */}
          <button className="btn btn-primary">ler mais</button>
        </div>
      </section>

      {/* Area relacionada com empresas */}
      <section className="empresas padding">
        <div className="container">
          <h1 className="title">Empresas</h1>
          <div className="box-company">
            <div className="box-company">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="box-company">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="box-company">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
            <div className="box-company">
              <Image src="/image/aviso1.svg" width={300} height={170} alt="" />
            </div>
          </div>

          <button className="btn btn-primary reset">
            <Link href="empresas">
              <a>ver mais</a>
            </Link>
          </button>
        </div>
      </section>

      {/* Processo da company de gerenciamento */}

      <section className="processo padding">
        <div className="container proc-flex">
          <div className="text-left">
            <h1 className="title">
              Otimizamos a distribuição de varejo de Ofertas Públicas
            </h1>

            <p className="description">
              Emissores e subscritores são capazes de obter rastreamento de
              dados robusto incluindo desempenho e padrões, antes e depois da
              oferta, enquanto as corretoras online são capazes de oferecer uma
              solução chave na mão para participar de IPOs. Nossos clientes e
              parceiros financeiros acessaram e participaram com sucesso de
              ofertas públicas por meio da rede EmainvestIPO. A EmainvestIPO
              trabalha diretamente com empresas emissoras que estão abrindo o
              capital, subscritores e corretoras online criando o primeiro
              utilitário projetado para otimizar a distribuição no varejo de
              ofertas públicas.
            </p>
          </div>

          <div className="proce-image">
            <Image
              className="image"
              src="/image/HERO.jpg"
              width={400}
              height={500}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Area dos parceiros  */}
      <section className="parceiros padding">
        <h1 className="title">Nossos parceieros</h1>
        <div className="min-container">
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
          <div className="parce-slader">
            <Image src="/image/opt.svg" width={100} height={100} alt="" />
          </div>
        </div>
      </section>

      {/* Area relacionada com os testemunhas */}
      <section className="testemunho padding">
        <h1 className="title">O que eles dizem</h1>
        <div className="min-container test-flex">
          <div className="progress-bar"></div>
          <p className="testimonial">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Reprehenderit corrupti, at quod hic
            officia odio dolores accusantium quibusdam molestias iste nemo qui
            tenetur harum. Cum quas voluptatem dolores. Pariatur, sint.
          </p>

          <div className="card">
            <img className="card-image" src="/image/HERO.png" alt="" />
            <div className="user-details">
              <h4 className="username">Who are</h4>
              <p className="role">Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Area relacionada com actualizacoes  */}

      <section className="news-lether padding">
        <div className="min-container">
          <h1 className="title">Receba actualizacoes</h1>
          <form action="" className="form">
            <div className="form-control">
              <input
                type="text"
                name="news"
                placeholder="Digite seu email e receba actualizacoes..."
              />
            </div>
            <button type="button" className="btn btn-primary secondary">
              receber
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
