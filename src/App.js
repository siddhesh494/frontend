import './App.css';
import { useEffect, useState } from 'react';
import { getAllUserService } from './APIService/user';
import { Provider } from 'react-redux'
import { store } from './store/store';
import PageRouting from './component/PageRouting/PageRouting';

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

  return (
    <Provider store={store}>
      <PageRouting />
    </Provider>
  );
}

export default App;
