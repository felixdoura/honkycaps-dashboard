import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img
                  src='images/ADI1.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>PRODUCTOS</h4>
                  <h5>Listado de Productos</h5>
                  <p>Cantidad de Productos: </p>
                  <Link className='button'>Buscar Productos</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <Link className='small-banner position-relative text-dark'>
                  <img
                    src='images/FER-1.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>Usuarios</h4>
                    <h5>Lista de Usuarios</h5>
                    <p>Total de Usuarios:</p>
                  </div>
                </Link>
                <Link className='small-banner position-relative text-dark'>
                  <img
                    src='images/FER-1.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>Categorias</h4>
                    <h5>Todas las Categorias</h5>
                    <p>Total de Categorias: </p>
                  </div>
                </Link>
                <Link className='small-banner position-relative text-dark'>
                  <img
                    src='images/FER-1.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>Ultima Adicion</h4>
                    <h5>Ultimo Producto</h5>
                    <p>Ultimo Producto Agregado:</p>
                  </div>
                </Link>
                <Link className='small-banner position-relative text-dark'>
                  <img
                    src='images/FER-1.jpg'
                    className='img-fluid rounded-3'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>Nuevo Usuario</h4>
                    <h5>Ultimo Usuario</h5>
                    <p>Ultimo Usuario Agregado</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl '>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15 position-relative'>
                  <div className='main-banner-content'>
                    <h4>Categorias</h4>
                    <h5>Listado de Categorias</h5>
                    <p>Productos por Categoria: </p>
                  </div>
                </div>
              </div>
              <div className='categories d-flex align-items-center justify-content-evenly'>
                <div className='category-list d-flex align-items-center gap-15 position-relative'>
                  <div className='category'>
                    <img
                      src='images/FER-1.jpg'
                      className='img-fluid rounded-3'
                      alt='main banner'
                    />
                    <h5>Deportivas</h5>
                    <p>Cantidad de Productos:</p>
                  </div>
                  <div className='category'>
                    <img
                      src='images/FER-1.jpg'
                      className='img-fluid rounded-3'
                      alt='main banner'
                    />
                    <h5>Automovilismo</h5>
                    <p>Cantidad de Productos:</p>
                  </div>
                  <div className='category'>
                    <img
                      src='images/FER-1.jpg'
                      className='img-fluid rounded-3'
                      alt='main banner'
                    />
                    <h5>Rock</h5>
                    <p>Cantidad de Productos:</p>
                  </div>
                  <div className='category'>
                    <img
                      src='images/FER-1.jpg'
                      className='img-fluid rounded-3'
                      alt='main banner'
                    />
                    <h5>Marcas</h5>
                    <p>Cantidad de Productos:</p>
                  </div>
                  <div className='category'>
                    <img
                      src='images/FER-1.jpg'
                      className='img-fluid rounded-3'
                      alt='main banner'
                    />
                    <h5>Otras</h5>
                    <p>Cantidad de Productos:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Home