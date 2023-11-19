import reactLogo from './assets/react.svg'
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [num, setNumbers] = useState('');
  const [aNum, setaNum] = useState([]);

  const addNum = (valor) => {
    setNumbers((Resu) => Resu + valor);
    setaNum([...aNum, +valor]);
  };

  const clean = () => {
    setNumbers('');
    setaNum([]);
  };

  const calculateResult = () => {
    
      let calculatedResult = eval(num);
      setNumbers(calculatedResult.toString());
      
  };

  console.log(aNum);
  console.log(num);

  return (
    <>
    <div class="text-center text-5xl font-bold">
        Calculadora
        <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
        <span class="animate-word col-span-full row-span-full">Suma</span>
        <span class="animate-word-delay-1 col-span-full row-span-full">Resta</span>
        <span class="animate-word-delay-2 col-span-full row-span-full">Multiplica</span>
        </div>
    </div>
      <div className='container'>
        <div className='Screen'>  
         <input className='bg-green-100 text-end' value={num} disabled />  
          </div> 
          <div className='buttons'>   
         <button   className= 'numbers'  onClick={() =>  addNum('1')} value={1}>1</button> 
          <button  className='numbers'  onClick={ () => addNum('2')} value={2}>2</button> 
          <button  className='numbers'  onClick={ () => addNum('3')} value={3}>3</button> 
          <button  className='operators'  onClick={ () => addNum('+')} value={'+'}>+</button> 
          <button  className='numbers'  onClick={ () => addNum('4')} value={4}>4</button> 
          <button  className='numbers'  onClick={ () => addNum('5')} value={5}>5</button> 
          <button  className='numbers'  onClick={ () => addNum('6')} value={6}>6</button>
          <button  className='operators'  onClick={ () => addNum('-')} value={'-'}>-</button>  
          <button  className='numbers'  onClick={ () => addNum('7')} value={7}>7</button> 
          <button  className='numbers'  onClick={ () => addNum('8')} value={8}>8</button> 
          <button  className='numbers'  onClick={ () => addNum('9')} value={9}>9</button> 
          <button  className='operators'  onClick={ () => addNum('*')} value={'*'}>*</button>
           <button  className='numbers'  onClick={ () => addNum('0')} value={0}>0</button>  
          <button  className='operators'  onClick={ clean} value={'AC'}>AC</button> 
          <button className='operators' onClick={calculateResult} value={'='}> = </button>
     </div>  
      </div>
    </>
  );
}

export default App;
























//import reactLogo from './assets/react.svg'
//import { useState } from 'react'
//import viteLogo from '/vite.svg'
//import './App.css'
//
//
//function App() {
//  const [num, setNumers] = useState('');
//  const [num2, setNumers2] = useState('');
//  const [aNum, setaNum] = useState([]);
//
//  const addNum = (valor) => {
//    setaNum([...aNum, +valor]);
//
//    for (let i = 0; i < aNum.length; i++) {
//      if (isNaN(aNum[i])) {
//        setNumers2((prevNum2) => prevNum2 + valor);
//        return; 
//      }
//    }
//
//    setNumers((prevNum) => prevNum + valor);
//  };
//
//  const clean = () => {
//    setNumers('');
//    setNumers2('');
//    setaNum([]);
//  };
//
//  console.log(aNum);
//  console.log(num);
//
//  return (
//    <>
//      <div className='Title justify-center text-6xl bg-yellow-500 hover:text-fuchsia-400'>
//        <h1>Caluladora</h1>
//      </div>
//      <div className='Calculadora'>
//        <div className='row-auto'>
//           <button  className='numbers'  onClick={() =>  addNum('1')} value={1}>1</button> 
//      <button  className='numbers'  onClick={ () => addNum('2')} value={2}>2</button> 
//      <button  className='numbers'  onClick={ () => addNum('3')} value={3}>3</button> 
//      <button  className='operators'  onClick={ () => addNum('+')} value={'+'}>+</button> 
//      <button  className='numbers'  onClick={ () => addNum('4')} value={4}>4</button> 
//      <button  className='numbers'  onClick={ () => addNum('5')} value={5}>5</button> 
//      <button  className='numbers'  onClick={ () => addNum('6')} value={6}>6</button>
//      <button  className='operators'  onClick={ () => addNum('-')} value={'-'}>-</button>  
//      <button  className='numbers'  onClick={ () => addNum('7')} value={7}>7</button> 
//      <button  className='numbers'  onClick={ () => addNum('8')} value={8}>8</button> 
//      <button  className='numbers'  onClick={ () => addNum('9')} value={9}>9</button> 
//      <button  className='operators'  onClick={ () => addNum('*')} value={'*'}>*</button> 
//      <button  className='operators'  onClick={ () => addNum('=')} value={'='}>=</button> 
//      <button  className='operators'  onClick={ clean} value={'AC'}>AC</button> 
//        </div>
//        <input className='bg-green-100 text-end' value={num} disabled />
//        <input className='bg-green-100' value={num2} disabled />
//      </div>
//    </>
//  );
//}
//
//export default App;
//