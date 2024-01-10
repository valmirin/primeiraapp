import React from 'react'
import './styles.css'

// function Button(props) {
//     return (
//         <div className='containerButton'>
//             <button className={props.active ? 'button' : 'disabledButton'}>{props.name}</button>
//             <spam>Seus dados estão salvos conosco</spam>
//         </div>
//     )
// }

// Pode ser feito desestruturando o objeto props. EX

//  function Button({ name, active, onClick}) {
//      return (
//          <div className='containerButton'>
//              <button onClick={onClick} className={active ? 'button' : 'disabledButton'}>{name}</button>
//              <spam>Seus dados estão salvos conosco</spam>
//          </div>
//      )
//  }

//Utilizando o alterar valor no estudo de Hooks
 function Button({ name, active, onClick}) {
    return (
        <div className='containerButton'>
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <spam>Seus dados estão salvos conosco</spam>
        </div>
    )
}

export default Button