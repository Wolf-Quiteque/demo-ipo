export default function Footer(){
  return(
    <>
    {/* aqui comeca o footer 1 */}
      <footer className="rodape">

      <section className="footer-1 padding-20">
            <div className="container">
           
              <div className="footer-social">
                  <div className="social">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-google"></i>
                  <i className="fa-brands fa-youtube"></i>
                  </div>
                  <div className="ep">
                    <h4>BNA, stander Bank - Bai</h4>
                  </div>
              </div>
              <div className="footer-contact">
                <div className="contact-info">
                  {/* <i className="fa-solid fa-envelopes"></i> */}

                  <i className="fa-solid fa-phone"></i>
                  <h3>EMAIL</h3>
                  <p>
                  emainvest@geral.ao
                  </p>
                </div>
                <div className="contact-info">
                  <i className="fa-solid fa-phone"></i>

                  <h3>CALL</h3>
                  <p>
                    +244 999 858 634
                  </p>
                </div>
                <div className="contact-info">
                <i className="fa-solid fa-location-dot"></i>
                    <h3>ENCONTE-NOS</h3>
                  <p>
                  Tatalatona, Luanda - Angola
                  </p>
                </div>
              </div>
            </div>
    </section>

    {/* aqui comeca o footer 2 */}
    <section className="footer-2 padding-20">

          <div className="container">
        
            <div className="dados">
              <h2>Menu</h2>
              <nav className="menu-footer">
                  <ul>
                    <li>Home</li>
                    <li>Explorar</li>
                    <li>Financiamento</li>
                    <li>Investir</li>
                  </ul>
              </nav>
            </div>
            <div className="dados">
              <h2>Pages</h2>
              <nav className="pages-footer">
                  <ul>
                    <li>Home</li>
                    <li>Explorar</li>
                    <li>Financiamento</li>
                    <li>Investir</li>
                  </ul>
              </nav>
            </div>

            <div className="news">
              <h2>Receba actualizacoes</h2>
              <form action="" className="form">
                <div className="form-control">
                  <input type="text" placeholder="seu email" />
                </div>
                <button className="btn-2 primary">inscrever-se</button>
              </form>
            </div>
          
          </div>
    </section> 

      </footer>
    </>
  )
}