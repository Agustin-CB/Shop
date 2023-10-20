import React, { useEffect, useState } from "react";
import data from "../data/data"; // Asegúrate de importar tus datos
import Item from "./item/Item";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simula una carga de datos (reemplaza esto con tu lógica real)
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };

    fetchData().then((items) => {
      setProductos(items);
      setCargando(false);
    });
  }, []);

  return (
    <div className="center">
      {cargando ? (
        <h2>Cargando Servicios</h2>
      ) : (
        productos.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            desc={producto.desc}
            precio={producto.precio}
            stock={producto.stock}
            imagen={producto.imagen}
            categoria={producto.categoria}
            id={producto.id}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
