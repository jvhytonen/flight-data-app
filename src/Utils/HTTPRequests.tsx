// Test data for test purposes
import { exmplPTReadyData } from '../test-variables/public-transport-test-data'
import { exampleReadyData as testNews } from '../test-variables/news-test-data'
import { testFlightData } from '../test-variables/flights-data-test'
import { testAdsInfo, adsOnly } from '../test-variables/ads-info-test-data'
import { exmplFormattedWeatherData } from '../test-variables/weather-test-data'

type fetchDataType = (user:string) => object | string

const API = 'https://4r294n67b7.execute-api.eu-north-1.amazonaws.com/dev/flight-data'

export const fetchApiData: fetchDataType = async (user) => {
    const URL = API + '/' + user
    try {
        const response = await fetch(URL)
        const data = await response.json()     
        return data
    }
   catch(error) {
    console.log(error)   
    return null
   }
}

// For development purposes in order not to use API-calls all the time. 

/* export const mockFetch: fetchDataType = async (user) => {
    const data = {
            body: {
                publicTransport: exmplPTReadyData,
                news: testNews,
                flights: testFlightData,
                adsInfo: adsOnly,
                weather: exmplFormattedWeatherData
            }
        }
    return data 
}*/