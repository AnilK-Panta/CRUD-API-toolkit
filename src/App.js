// import { useState } from "react";
import "./App.css";
import { useGetAllPostQuery } from "./services/post";

function App() {
  const { data, error, isLoading } = useGetAllPostQuery();
  console.log(error, isLoading, data);
  // const [apiData, setApiData] = useState({});
  return <div className="App">hi</div>;
}

export default App;
