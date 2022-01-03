// import { useState } from "react";
import "./App.css";
import { useGetAllPostQuery, useGetPostByIdQuery } from "./services/post";

function App() {
  // const [apiData, setApiData] = useState({});
  // const data = useGetAllPostQuery();
  const data = useGetPostByIdQuery(5);
  console.log(data);
  if (data.isLoading) return <div>Loading ....</div>;
  if (data.isError) return <div>Unexpected error occured</div>;
  if (data.data)
    return (
      <div>
        {/* {data.data.map((curElem) => {
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
        })} */}
        <h1>{data.data.body}</h1>
      </div>
    );
  return <div className="App">koooo</div>;
}

export default App;
