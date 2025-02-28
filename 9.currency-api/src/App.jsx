import {useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'
import Currency from './components/Currency'

const BASE_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_EFN475qlo9VKFe4XuFM2t4PkXV8ppD6L2o2xPgvj'

function App() {
  
  const [currencyData,setCurrencyData] = useState([])
  
  const getCurrencyData = async()=>{
    const response =  await axios.get(BASE_URL)
    const listCurrency = Object.values(response.data.data)
    console.log(listCurrency)
    setCurrencyData(listCurrency) 
  }

  useEffect(() => {
    getCurrencyData()
    console.log(currencyData)
  },[])

  return (
    <div >
      <Currency listCurrency={currencyData}/>      
          
    </div>
  )
}

export default App