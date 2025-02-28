import {useState,useEffect} from 'react'
import '../css/Currency.css'
import { FiArrowRightCircle } from "react-icons/fi";


function Currency({listCurrency}) {
    const [baseCurrency,setBaseCurrency] = useState('')
    const [targetCurrency,setTargetCurrency] = useState('')
    const [amount,setAmount] = useState(0)
    const [convertedAmount,setConvertedAmount] = useState(0)
    
    useEffect(()=>{
      if(listCurrency.length>0){
        setBaseCurrency(listCurrency[0].code)
      setTargetCurrency(listCurrency[0].code)
      }
      console.log(listCurrency.length)
      console.log(baseCurrency)
      console.log(targetCurrency)  
    },[listCurrency])

    const handleAmountChange = (e)=>{
        console.log(e.target.value)
        setAmount(e.target.value)
    }

    const handleBaseCurrencyChange = (e)=>{
        console.log(e.target.value)
        setBaseCurrency(e.target.value)
    }


    const handleTargetCurrencyChange = (e)=>{
        console.log(e.target.value)
        setTargetCurrency(e.target.value)

    }

    const convertCurrency = ()=>{
        const baseCurrencyRate = listCurrency.find(currency=>currency.code===baseCurrency).value
        const targetCurrencyRate = listCurrency.find(currency=>currency.code===targetCurrency).value
        const result = (amount/baseCurrencyRate)*targetCurrencyRate
        setConvertedAmount(result.toFixed(2))
        console.log(result)
    }

  return (



    <div className='currency-div'>
        <div>
            <h1>Currency APP</h1>
        </div>
        <div > 
          <input type="number" value={amount} onChange={handleAmountChange}/>
            <select onChange={handleBaseCurrencyChange}>  
              {listCurrency.map((currency,index)=>(
                <option key={index} value={currency.code} >{currency.code}</option>
              ))}
            </select>
        
            <FiArrowRightCircle style={{fontSize:'25px', marginRight:'20px'}} />

              
          <input type="number" value={convertedAmount} readOnly/>
            <select onChange={handleTargetCurrencyChange}>  
              {listCurrency.map((currency,index)=>(
                <option key={index} value={currency.code}>{currency.code}</option>
              ))}
            </select>
        </div>
        <div>
        <button onClick={convertCurrency}>Convert</button>
        </div>
        
        
    </div>
  )
}

export default Currency