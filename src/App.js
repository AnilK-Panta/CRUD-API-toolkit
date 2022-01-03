// import { useState } from "react";
import "./App.css";
import { useGetAllPostQuery } from "./services/post";

function App() {
  // const [apiData, setApiData] = useState({});
  const data = useGetAllPostQuery();
  console.log(data);
  if (data.isLoading) return <div>Loading ....</div>;
  if (data.isError) return <div>Unexpected error occured</div>;
  if (data.data)
    return (
      <div>
        {data.data.map((curElem) => {
          return <h1>{curElem.title}</h1>;
        })}
      </div>
    );
  return <div className="App">koooo</div>;
}

export default App;
