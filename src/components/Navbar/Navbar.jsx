import React from 'react'
import './Navbar.css'
import {BsCart2} from "react-icons/bs"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
    <nav className="navbar bg-black navbar-expand-lg">
                
                <div className="container">
                        <div className="position-absolute right-50">
                            <img src="./img/logo.jpg" className='logo' alt=" Logo Tienda de Deportes" />
                        </div>
                </div>
                
                <div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ">
                        <ul class="navbar-nav ">
                            <Link to = "/" className='text-decoration-none'>
                            <li>
                            <p className="nav-link ">Inicio</p>
                            </li>
                            </Link>
                            <Link to = "/productos" className='text-decoration-none'>
                            <li>
                            <p className="nav-link">Productos</p>
                            </li>
                            </Link>
                            <Link to = "/Categorias" className='text-decoration-none'>
                            <li>
                            <p className="nav-link" >Categorias</p>
                            </li>
                            </Link>
                            <Link to = "/Contactos" className='text-decoration-none'>
                            <li>
                            <p className="nav-link">Contactos</p>
                            </li>
                            </Link>
                            <Link to = "/Carrito" className='text-decoration-none'>
                            <li>
                            <p className='nav-link'> Carrito< BsCart2 className="cart" /></p>
                            </li>
                            </Link>
                        </ul>
                    
                    </div>
                </div>
    </nav>
    )
}

export default Navbar
