import React, {lazy, Suspense, useState} from "react";
import Profile from "../../components/profile/profile";
// import Header from "../../components/header/header";
import { Link, useLocation } from "react-router-dom";
// utilizando lazy para importar o Header somente quando necessário
const Header = lazy(() => import('../../components/header/header'))

function Home() {
    // const produtos = [
    //     {nome: 'Batedeira', id: 20},
    //     {nome: 'Ventilador', id: 22},
    //     {nome: 'Computador', id:30},
    // ]

    // criando outro hook useLocation
    // const location = useLocation();
    // console.log(location)

    // Utilizando o React Memo
    const [loadin, setLoading] = useState(false);
    

    return (
        // supondo que o Header seja um componente muito pesado, quando 
        // estiver carregando precisa mostrar algo em TextTrackList, usando
        // o suspense

        // <Suspense fallback={<div>Carregando...</div>}>
        //     <Header nome='Valmir' age={27} active={true}/>
        // </Suspense>

        <div>
            <Header nome='Valmir' age={27} active={true}/>
            {/* <Profile /> */}
            {/* {produtos.map((produto, index) => (
                <Link key={index} to={`detalhes/${produto.id}`}>
                    <spam style={{ display: 'block'}}>
                        {produto.nome}
                    </spam>
                </Link>
            ))} */}
            
        </div>
    )
}

export default Home;