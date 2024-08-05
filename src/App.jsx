import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState("Hello")
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }
    fetchData();
  }, [])



  return (
    <>
      
    <>
  )
}

export default App
