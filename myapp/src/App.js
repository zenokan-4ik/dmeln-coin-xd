import coin from './coin.jpg'
import sadCoin from './sad_coin.jpg'
import './App.css';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [success, setSuccess] = useState('')
  const [isTapped, setIsTapped] = useState(false)

  const addBalance = () => {
    setBalance(balance+multiplier)
  }

  const addMultiplier = (num, cost) => {
    if(balance>=cost){
      setBalance(balance-cost)
      setMultiplier(multiplier+num)
      setSuccess('Успешно! Натапал')
    }
    else{
      setSuccess('Не успешно, тапай сука')
    }
  }

  return (
    <div className="App">
      <div className='multiplierShop'>
        <p>{success}  </p>
        <div className='line' />
        <p>Для покупки тыкните на Dmeln Coin</p>
        <div className='line' />
        <div className='product'>
          <p>Доти доти (+1) - 50</p> <img src={coin} alt='dmelncoin' className='smallCoin' onClick={()=>{addMultiplier(1, 50)}}/>
        </div>

        <div className='product'>
          <p>Пуджик через ПИПИ (+2) - 150</p> <img src={coin} alt='dmelncoin' className='smallCoin' onClick={()=>{addMultiplier(2, 150)}}/>
        </div>

        <div className='product'>
          <p>Инвайт на Deadlock чзх (+5) - 500</p> <img src={coin} alt='dmelncoin' className='smallCoin' onClick={()=>{addMultiplier(5, 500)}}/>
        </div>

        <div className='product'>
          <p>Апнул 200 ммр (+10) - 1500</p> <img src={coin} alt='dmelncoin' className='smallCoin' onClick={()=>{addMultiplier(10, 1500)}}/>
        </div>

        <div className='product'>
          <p>Город в кровище (+20) - 3000</p> <img src={coin} alt='dmelncoin' className='smallCoin' onClick={()=>{addMultiplier(20, 3000)}}/>
        </div>
      </div>
      <div className='centerCoin'>
        <div className="balmult">
          <p>Баланс: {balance}</p>
          <p>Тапаешь: {multiplier}</p>
        </div>
        <img src={coin} alt='dmelncoin' className="coin" onClick={()=>{addBalance()}}/>
      </div>  
    </div>
  );
}

export default App;
