import React, { useContext, useEffect, useState } from 'react'
import './styles.css';
import { UserContext } from '../../contexts/userContexts';
import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Header({ nome }) {
    // const [login, setLogin] = useState(false);
    // Não é mais necessário pois vamos acessar o contexto/estado global

    const {login, setLogin} = useContext(UserContext);

    // utilizando o hook useNavigate para navegar entre páginas
    // const navigate = useNavigate();

    // const active = false;

    // useEffect(() => {
    //     if (active){
    //         navigate('contato')
    //     } else {
    //         navigate('fotos')
    //     }
    // }, [])

    return (
       <div>
            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link to='contato'>
                        <li>Contato</li>
                    </Link>
                    <li onClick={() => setLogin(!login)}>{login ? 'Deslogar' : 'Login' }</li>
                    <li>{nome}</li>
                    {/* Testando o useNavigate no botão de Login */}
                    {/* <li onClick={() => navigate('contato')}>Login</li> */}
                </ul>
            </nav>
       </div> 
    )
}

// Header.propTypes = {
//     nome: PropTypes.string.isRequired
// }

export default Header;