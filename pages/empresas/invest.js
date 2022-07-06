import Link from "next/link"
export default function Invest(){
  return(
    <>
      <section className="invest">
        <div className="container">
        <nav className="informar">
              <Link href="/empresas/details" ><div className="back"><i className="back-arrow fa-solid fa-arrow-left-long"></i>Back</div></Link>
              <i className="heart fa-regular fa-heart favorite-1"></i>

            </nav>
          <h1>Area de investimento </h1>
        </div>
      </section>
    </> 
}