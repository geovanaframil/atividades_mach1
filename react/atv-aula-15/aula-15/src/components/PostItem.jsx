function PostItem(props) {
    const {item} = props
    return (
    <li>
        <span>id: {item.id}</span><br/>
        <span>titulo: {item.title}</span><br/>
        <span>{item.body}</span><br/>
    </li>
    )
}

export default PostItem