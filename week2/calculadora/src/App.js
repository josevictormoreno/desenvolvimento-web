import React, { useState } from 'react';

function Calculator() {
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (/\d/.test(buttonValue)) {
      setValue(value + buttonValue);
    } else if (['+', '-', '*', '/'].includes(buttonValue)) {
      setOperator(buttonValue);
    } else if (buttonValue === '=') {
      const result = eval(value + operator + result);
      setResult(result);
    }
  };

  return (
    <div>
      <input type="text" value={value} />
      <div>
        <button value="1" onClick={handleButtonClick}>1</button>
        <button value="2" onClick={handleButtonClick}>2</button>
        <button value="3" onClick={handleButtonClick}>3</button>
      </div>
      <div>
        <button value="+" onClick={handleButtonClick}>+</button>
        <button value="-" onClick={handleButtonClick}>-</button>
        <button value="*" onClick={handleButtonClick}>*</button>
        <button value="/" onClick={handleButtonClick}>/</button>
      </div>
      <div>
        <button value="=" onClick={handleButtonClick}>=</button>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
