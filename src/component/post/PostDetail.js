import { useQuery, useMutation } from 'react-query'
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


  const deleteMutation = useMutation((postId) => deletePost(postId));
  const updateMutation = useMutation((postId) => updatePost(postId));

  if (isLoading) return <h3>Is loading...</h3>;
  if (isError) return <>Opp something wrong with fetch <p>{error.toString()}</p> </>
  console.log(post.id)


  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
      <button onClick={() => updateMutation.mutate(post.id)}>Update title</button>


   
      {deleteMutation.isError &&
        (<p style={{ color: "red" }}> Post has not been delete</p>)}

      {deleteMutation.isLoading &&
        (<p style={{ color: "purple" }}>Delenting the post</p>)}


      {deleteMutation.isSuccess &&
        (<p style={{ color: "green" }}> Post has  been delete</p>)}
  
   {updateMutation.isSuccess &&
        (<p style={{ color: "green" }}> Post has been update</p>)}

{updateMutation.isLoading &&
        (<p style={{ color: "purple" }}> Post has been update</p>)}

{updateMutation.isError &&
        (<p style={{ color: "red" }}> Post has been update</p>)}


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