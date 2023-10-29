import { useState } from 'react';
import "./App.css";

function App() {
  const [display, setDisplay] = useState('');
  const [resultado, setResultado] = useState('');

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const clearDisplay = () => {
    setDisplay('');
    setResultado('');
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setResultado(result.toString());
      setDisplay(result.toString())
    } catch (error) {
      setResultado('Error');
    }
  };

  return (
    <div className="App">
      <section className='display'>
      <input className="expression" value={resultado} readOnly />
      <input type="text" value={display} readOnly />
      </section>

      <section className="panel">
        <section className="numeros">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </section>

        <section className="operaciones">
          <button onClick={() => handleClick('/')}>÷</button>
          <button onClick={() => handleClick('*')}>x</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={clearDisplay}>C</button>
          <button onClick={calculate}>=</button>
        </section>
      </section>
    </div>
  );
}

export default App;
