function UserDetails(props) {
  const { user } = props;

  return (
    <div>
      <h2>User Details: </h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserDetails
