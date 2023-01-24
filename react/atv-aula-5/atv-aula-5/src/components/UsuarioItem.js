function UsuarioItem({nome, estado, onClickItem}) {
    return (
        <div onClick={onClickItem}>
            {estado ? <p className="itemAtivo">{nome}</p> : <p className="itemInativo">{nome}</p> }
        </div>
    )
}

export default UsuarioItem