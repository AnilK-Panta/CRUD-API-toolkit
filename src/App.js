// import { useState } from "react";
import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  // const [apiData, setApiData] = useState({});
  // const data = useGetAllPostQuery();
  // const data = useGetPostByIdQuery(5);
  // const data = useGetPostByLimitQuery(5);
  // const [detetePost, responseInfo] = useDeletePostMutation();
  // const [createPost, responseInfo] = useCreatePostMutation();
  const [updatePost, responseInfo] = useUpdatePostMutation();

  console.log(responseInfo);
  console.log(updatePost);
  const updatedPostData = {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  };
  console.log(responseInfo.isSuccess);
  if (responseInfo.isLoading) return <div>Loading ....</div>;
  if (responseInfo.isError) return <div>Unexpected error occured</div>;
  if (responseInfo.isSuccess) return <div>Data created Successfully</div>;
  {
    // getting data
    // if (data.data)
    //   return (
    //     <div>
    /* Get all posts */
  }
  {
    /* {data.data.map((curElem) => {
          return (
            <div
              key={curElem.id}
              style={{
                textAlign: "center",
              }}
            >
              <h1>{curElem.title}</h1>
              <p>{curElem.body}</p>
              <hr />
            </div>
          );
        })} */
  }

  {
    /* Get post by Id  */
  }
  {
    /* <h1>{data.data.body}</h1> */
  }

  {
    /* Get post by limit  */
  }
  {
    /* {data.data.map((curElem, i) => {
          return (
            <div
              key={i}
              style={{
                textAlign: "center",
              }}
            >
              <h1>{curElem.title}</h1>
              <p>{curElem.body}</p>
              <hr />
            </div>
          );
        })} */
  }
  //   </div>
  // );

  // delete post by Id
  // return (
  //   <div className="App">
  //     {/* delete post by id  */}

  //     <h1>Delete post by id</h1>
  //     <button
  //       onClick={() => {
  //         deletePost(5);
  //       }}
  //     >
  //       Delete Post
  //     </button>
  //   </div>
  // );

  // Create New Post
  // return (
  //   <div className="App">
  //     <h1>Create Post</h1>
  //     <button
  //       onClick={() => {
  //         createPost(newPost);
  //       }}
  //     >
  //       Create Post
  //     </button>
  //   </div>
  // );

  // Update Post
  return (
    <div className="App">
      <h1>Update Post</h1>
      <button
        onClick={() => {
          updatePost(updatedPostData);
        }}
      >
        Update Post
      </button>
    </div>
  );
}

export default App;
