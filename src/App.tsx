import React, { useState, useEffect } from 'react';
import './App.css';
import View from './Components/View/View'
import { fetchApiData} from './Utils/HTTPRequests'

type connectAPIType = () => void

const USER_NAME = 'helsinki'

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
      console.log('Data loaded')
    }
    catch (err) {
      console.log(err)
    }
  }
 //UseEffect for loading data every 60 seconds. 
   useEffect(() => {
    const intervalCall = setInterval(() => {
      console.log('Connecting...')
      connectApi();
    }, 180000)
    return () => {
      clearInterval(intervalCall)
    }
  }, []) 
//UseEffect for the first time loading. 
  useEffect(() => {
      console.log('connecting')
      connectApi();
  }, [])

  return (
    <div className="App h-screen w-full">
      {apiData !== null ? <View data={apiData} /> : null}
    </div>
  );
}

export default App;