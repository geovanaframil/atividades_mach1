import "./Item.css"

function Item({texto, ativo}) {
    return <li className={ativo && 'ativo'}>{texto}</li>
}

export default Item;