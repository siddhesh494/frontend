import './App.css';
import { useEffect, useState } from 'react';
import { getAllUserService } from './APIService/user';
import { Provider } from 'react-redux'
import { store } from './store/store';
import Counter from './component/Counter';

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

  // console.log("details", details)

  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Counter />
    </Provider>
  );
}

export default App;
