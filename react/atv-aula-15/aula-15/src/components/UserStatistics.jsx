function UserStatistics(props) {
  const { user } = props;

  return (
    <div>
      <h2>User Statistics:</h2>
      <p>Posts: {user.posts}</p>
      <p>Comments: {user.comments}</p>
      <p>Likes: {user.likes}</p>
    </div>
  );
}

export default UserStatistics;
