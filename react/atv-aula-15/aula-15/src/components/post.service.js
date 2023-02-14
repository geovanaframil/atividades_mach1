async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    return json;
}

export default getPosts;