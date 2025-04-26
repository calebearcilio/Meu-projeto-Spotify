import React from 'react'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa4, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <main className='notfound__main'>
        <section className='notfound__section'>
          <div>
            <FontAwesomeIcon className='notfound__icon' icon={fa4} />
            <FontAwesomeIcon className='notfound__icon' icon={faTriangleExclamation} />
            <FontAwesomeIcon className='notfound__icon' icon={fa4} />
          </div>
          <h1>Página não encontrada</h1>
          <Link to='/' className='notfound__link'>
            <button className='notfound__button'>
              Voltar para página principal
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default NotFound