import React from 'react'
import data from '../data/data';


function Consolas() {

    const consolas = data.filter(producto => producto.categoria === "consola");


    return (
        
        <div className='item'>
        <h1 className="titulo">Consolas</h1>
        <ul>
            {consolas.map(producto => (
                <li key={producto.id}>
                    <p>{producto.nombre}</p>
                    <p>{producto.desc}</p>
                    <p>{producto.precio}$</p>
                    <img src={producto.imagen} alt="" className="imagen-inicio"/>
                </li>
            ))}
        </ul>
    </div>

        

    )
}

export default Consolas 