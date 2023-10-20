import React from "react"
import data from "../data/data";
function servicios() {

    const servicios = data.filter(producto => producto.categoria === "consola");


    return (
        <div className='item'>
        <h1 className="titulo">Consolas</h1>
        <ul>
            {servicios.map(producto => (
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

export default servicios
