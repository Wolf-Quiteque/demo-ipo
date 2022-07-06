import Image from 'next/image'
import Link from 'next/link'
export default function Empresas(){
  return(

    <>
      <section className="busca padding">
      <div className="overlay"></div>
        <div className="min-container">
          <h1 className="title">
            Econtre uma empresa para investir
          </h1>
          <form action="" className='form-busca'>
              <div className="form-control">
                <input type="search" name="" id="" placeholder='me ache por favor...' />
                <button className="btn-busca" ><i className="fa-solid fa-magnifying-glass icon"></i></button>
              </div>
          </form>
        </div>

      </section>                                

      <section className="filter-busca">
        <div className="container">
            <div className="header-filter">
              <ul>
                <li><Link href="#" ><a>Empresa</a></Link></li>
                <li><Link href="#" ><a>Destac</a></Link></li>
                <li><Link href="#" ><a>Recente</a></Link></li>
                <li><Link href="#" ><a>Valorizada</a></Link></li>
                <li><Link href="#" ><a>Desvalorizada</a></Link></li>
                <li><Link href="#" ><a>Top</a></Link></li>
              </ul>
            </div>
        </div>
      </section>
     <section className="lista-empresa padding">
       <div className="container">
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <div className="details-company">
              <h2>emainvest</h2>
              <div className="stars">*****</div>
            </div>

         </div>

         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <div className="details-company">
              <h2>emainvest</h2>
              <div className="stars">*****</div>
            </div>

         </div>

         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
         <div className="company">
            <Image className='image-list' src="/image/HERO.jpg" width={350} height={250} alt="" />
            <div className="favorite">
                <i className="fa-regular fa-heart favorite-1"></i>
            </div>
            <Link href="empresas/details" >
                <div className="details-company">
                  <h2>emainvest</h2>
                  <div className="stars">*****</div>
                </div>
            </Link>

         </div>
       </div>
       <button className="btn btn-primary btn-center">ver mais</button>
     </section>
    </>
  )
}