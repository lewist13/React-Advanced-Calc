import React, { useState } from "react";

const Calculator = (props) => {
  // Declare state variables
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleNumber = (e) => {
    e.preventDefault();
    setNumber1(e.target.value);
    console.log(e.target.value);
  };

  const handleOperator = (e) => {
    e.preventDefault();
    if (operator) {
      return setResult("error");
    }
    setOperator(e.target.value);
    setNumber2(number1);
    setNumber1(0);
  };

  const handleDecimal = (e) => {
    e.preventDefault();
    if (!number2) {
      number2("0."); //
    } else if (number2.indexOf(".") === -1) {
      number2(number2 + "."); //
    }
  };

  const calculate = () => {
    let op = operator;
    switch (op) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "x":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
      case "%":
        setResult(Number(number1) % Number(number2));
        break;
      default:
        return;
    }
  };

  const handleClear = () => {
    setNumber1(0);
    setNumber2(0);
    setOperator("");
    setResult(0);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>
          {" "}
          {number1} {operator} {number2}{" "}
        </p>
        <div className="answer-box">{result}</div>
        <div className="calc-row">
          <button
            className="calc-button calc-button-top"
            value="AC"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="calc-button calc-button-top"
            onClick={(e) => handleOperator(e)}
          >
            +/-
          </button>
          <button
            className="calc-button calc-button-top"
            value="%"
            onClick={(e) => handleOperator(e)}
          >
            %
          </button>
          <button
            className="calc-button calc-button-op"
            value="/"
            onClick={(e) => handleOperator(e)}
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="7"
            onClick={(e) => handleNumber(e)}
          >
            7
          </button>
          <button
            className="calc-button"
            value="8"
            onClick={(e) => handleNumber(e)}
          >
            8
          </button>
          <button
            className="calc-button"
            value="9"
            onClick={(e) => handleNumber(e)}
          >
            9
          </button>
          <button
            className="calc-button calc-button-op"
            value="x"
            onClick={(e) => handleOperator(e)}
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="4"
            onClick={(e) => handleNumber(e)}
          >
            4
          </button>
          <button
            className="calc-button"
            value="5"
            onClick={(e) => handleNumber(e)}
          >
            5
          </button>
          <button
            className="calc-button"
            value="6"
            onClick={(e) => handleNumber(e)}
          >
            6
          </button>
          <button
            className="calc-button calc-button-op"
            value="-"
            onClick={(e) => handleOperator(e)}
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button"
            value="1"
            onClick={(e) => handleNumber(e)}
          >
            1
          </button>
          <button
            className="calc-button"
            value="2"
            onClick={(e) => handleNumber(e)}
          >
            2
          </button>
          <button
            className="calc-button"
            value="3"
            onClick={(e) => handleNumber(e)}
          >
            3
          </button>
          <button
            className="calc-button calc-button-op"
            value="+"
            onClick={handleOperator}
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button
            className="calc-button width-2"
            value="0"
            onClick={(e) => handleNumber(e)}
          >
            0
          </button>
          <button className="calc-button" onClick={handleDecimal}>
            .
          </button>
          <button
            className="calc-button calc-button-op"
            value="="
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
