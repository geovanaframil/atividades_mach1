import PostItem from "./PostItem";

function Posts(props) {
    const {items} = props

    return (
        <div>
            <h1>Big Data Component</h1>
            <ul>
                {items.map((item) => (
                    <PostItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    )
}

export default Posts;