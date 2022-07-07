import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

import { FiltrarEmpresa } from "../api/empresa";

export default function Empresas() {
  const [empresas, setempresas] = useState();
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState();
  const [Info, setInfo] = useState();

  const [nopages, setnopages] = useState();
  var pagesarray = [];

  const getEmpresa = async () => {
    const filtro = {
      page: page,
      info: Info,
    };
    const data = await FiltrarEmpresa(filtro);
    setempresas(data.empresa);
    setnopages(data.pages);
    for (let index = 0; index < data.pages; index++) {
      var number = Number(index) + 1;
      pagesarray.push({ page: number });
    }
    setpages(pagesarray);
  };

  const Prev = () => {
    if (page == 1) {
      return false;
    }
    setpage(Number(page) - 1);
  };

  const Next = () => {
    if (page == pages) {
      return false;
    }
    setpage(Number(page) + 1);
  };

  useEffect(() => {
    setempresas(null);
    getEmpresa();
  }, [page, Info]);

  return (
    <>
      <section className="busca padding">
        <div className="overlay"></div>
        <div className="min-container">
          <h1 className="title">Econtre uma empresa para investir</h1>
          <form action="" className="form-busca">
            <div className="form-control">
              <input
                type="search"
                name=""
                id=""
                placeholder="me ache por favor..."
              />
              <button className="btn-busca">
                <i className="fa-solid fa-magnifying-glass icon"></i>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="filter-busca">
        <div className="container">
          <div className="header-filter">
            <ul>
              <li>
                <Link href="#">
                  <a>Empresa</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Destac</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Recente</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Valorizada</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Desvalorizada</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Top</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="lista-empresa padding">
        <div className="container">
          {empresas
            ? empresas.map((e) => (
                <div key={e._id} className="company">
                  <Image
                    className="image-list"
                    src={e.imgurl}
                    width={350}
                    height={250}
                    alt=""
                  />
                  <div className="favorite">
                    <i className="fa-regular fa-heart favorite-1"></i>
                  </div>
                  <Link href="empresas/details">
                    <div className="details-company">
                      <h2>{e.nome}</h2>
                      <div className="stars">*****</div>
                    </div>
                  </Link>
                </div>
              ))
            : "....aguarde"}
        </div>
        <button className="btn btn-primary btn-center">ver mais</button>
      </section>
    </>
  );
}
