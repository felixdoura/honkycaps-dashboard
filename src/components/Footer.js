import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contacto</h4>
              <div>
                <address className='text-white fs-6'>
                  Calle Falsa 123, <br />
                  Buenos Aires, Argentina <br />
                  CP: 2023
                </address>
                <a href='tel: 0800-999-2023' className='mt-3 d-block mb-1 text-white'>
                  0800-999-2023
                </a>
                <a href='mailto: grupo5@grupo5.com' className='mt-2 d-block mb-0 text-white'>
                  grupo5@grupo5.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href="/">
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsYoutube className='fs-4' />
                  </a>
                  <a className='text-white' href="/">
                    <BsInstagram className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Informacion</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacidad</Link>
                <Link className="text-white py-2 mb-1">Devoluciones</Link>
                <Link className="text-white py-2 mb-1">Envios</Link>
                <Link className="text-white py-2 mb-1">Terminos y Condiciones</Link>
                <Link className="text-white py-2 mb-1">Foro de Preguntas</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Cuenta</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Sobre Nosotros</Link>
                <Link className="text-white py-2 mb-1">Busqueda</Link>
                <Link className="text-white py-2 mb-1">Preguntas Frecuentes</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Deportivas</Link>
                <Link className="text-white py-2 mb-1">Musica</Link>
                <Link className="text-white py-2 mb-1">Automovilismo</Link>
                <Link className="text-white py-2 mb-1">Otras</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Traido a Ustedes por el grupo 5 de Digital House </p>
            </div>
          </div>
        </div>
      </footer>




    </>
  )
}

export default Footer