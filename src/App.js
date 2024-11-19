import './App.css';
import { useEffect, useState } from 'react';
import { getAllUserService } from './APIService/user';

function App() {

  const [details, setDetails] = useState([])

  const get = async () => {
    try {
      const result = await getAllUserService()
      setDetails(result)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    get()
  }, [])

  console.log("details", details)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
