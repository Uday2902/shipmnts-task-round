import { useState, useEffect } from 'react'
import './App.css'
import Table from './components/Table';
import mockData from './assets/data';
import Filters from './components/Filters';

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Filters />
    </div>
  )
  
}

export default App;
