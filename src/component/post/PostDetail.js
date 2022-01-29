import { useQuery } from 'react-query'
//import { useRouteMatch } from 'react-router-dom';
async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}

export function PostDetail({ post }) {
  //const { id } = postId;
  // replace with useQuery
  const { data, isLoading, isError, error } = useQuery(
    ["Comments", post.id], () => fetchComments(post.id));

  if (isLoading) return <h3>Is loading...</h3>;
  if (isError) return <>Opp something wrong with fetch <p>{error.toString()}</p> </>
  console.log(post.id)


  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button className="btn btn-danger">Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}