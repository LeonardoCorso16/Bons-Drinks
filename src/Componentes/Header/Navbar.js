import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/drinks/buscar" className="titulo2">Drinks</Link>
                    <Link to="/time" className="titulo2">Nosso Time</Link>
                    <Link to="/" className="itemPrincipal">Bons Drinks</Link>
                    <Link to="/sobre" className="titulo2">Sobre Nós</Link>
                    <Link to="/contato" className="titulo2">Contato</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;