async function getUsers(userId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const json = await res.json();

  return json
}

export default getUsers;
