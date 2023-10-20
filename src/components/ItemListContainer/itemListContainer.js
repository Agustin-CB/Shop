import ItemCount from "../itemcount/itemCount";
import ItemList from "../itemList/ItemList";


const ItemListContainer=(props)=>{
       

    return(
        <>
        <h1 className="titulo">{props.titulo}</h1>
        <div className="imagen-inicio">
            <img src='/play.jpg' alt='consola' width='20%'/>
        </div>
        <ItemCount stock="5" />
        <ItemList />

        {/* <ItemDetailContainer />  */}
        </>
    )
}

export default ItemListContainer
