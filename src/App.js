// import { useState } from "react";
import "./App.css";
import { useGetAllPostQuery } from "./services/post";

function App() {
  const data = useGetAllPostQuery();
  console.log(data);
  // const [apiData, setApiData] = useState({});
  return <div className="App">koooo</div>;
}

export default App;
