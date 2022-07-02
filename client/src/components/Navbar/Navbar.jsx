import React from 'react';
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return(
        <div className='home__navbar__container'>
            <ul className='home__navbar'>
                <li>
                    <Link to='/'><button className='home__back__btn'>Go back</button></Link>
                </li>
                <li>
                    <Link to='/pokemons/create'><button className='home__create__btn'>Create your Pokemon</button></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;