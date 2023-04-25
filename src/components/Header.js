import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Digital House - Grupo 5</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Telefono de Contacto: <a className='text-white' href='0800-999-2023'> 0800-999-2023 </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src='/images/menu.svg' alt=''/>
                                            <span className='me-5 d-inline-block'>Categorias</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="/">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="/">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="/">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Inicio</NavLink>
                                        <NavLink to='/products'>Productos</NavLink>
                                        <NavLink to='/'>Usuarios</NavLink>
                                        <NavLink to='/contact'>Contacto</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header