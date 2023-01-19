function ButtonLink({texto, link}) {
    function handleClick(){
        alert(link)
    }
    return (
        <a href="#" className="link" onClick={handleClick}><button>{texto}</button></a>
    )
}

export default ButtonLink;