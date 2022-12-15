import React, { useState, useEffect } from 'react';
import './App.css';
import View from './Components/View/View'
import { fetchApiData} from './Utils/HTTPRequests'

type connectAPIType = () => void

const USER_NAME = 'test3'

function App() {
  // Hooks handling API data and loading of data. 
  const [apiData, setApiData] = useState<any>(null)
  

  const connectApi: connectAPIType = async () => {
    try {
      const fetchedItems = await fetchApiData(USER_NAME)
      if (fetchedItems === null) {
        return
      }
      setApiData(fetchedItems)
    }
    catch (err) {
      console.log(err)
      console.log('Something went wrong')
    }
  }
 
   useEffect(() => {
    const intervalCall = setInterval(() => {
      console.log('Timeout-made connection')
      connectApi();
    }, 60000)
    return () => {
      clearInterval(intervalCall)
    }
  }, []) 



/*   useEffect(() => {
      console.log('connecting')
      connectApi();
  }, []) */
  return (
    <div className="App h-screen w-full">
      {apiData !== null ? <View data={apiData} /> : null}
    </div>
  );
}

export default App;