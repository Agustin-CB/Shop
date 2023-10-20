import ItemCount from "../../itemcount/itemCount"
import { Link } from "react-router-dom"

const Item =({nombre, desc, precio, stock, imagen, categoria, id})=>{
    return (
        <div className="item">
            <Link to={`/${categoria}/${id}`}>
            <h2>{nombre}</h2>
            </Link>
            <h3>{desc}</h3>
            <h4>${precio}</h4>
            <img src= {imagen} alt={nombre} />
            <ItemCount stock={stock} />
          
        </div>
    )
}

export default Item