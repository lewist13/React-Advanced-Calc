import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      operator: "+",
      result: null,
    };
  }

  setNum = (event, num) => {
    this.setState({ [num]: event.target.value });
  };

  calculate(event) {
    event.preventDefault();
    let first = parseInt(this.state.num1);
    let second = parseInt(this.state.num2);
    let operator = this.state.operator;

    switch (
      operator //created a switch that response onClick
    ) {
      case "+":
        this.setState({ result: first + second });
        break;
      case "-":
        this.setState({ result: first - second });
        break;
      case "*":
        this.setState({ result: first * second });
        break;
      case "/":
        this.setState({ result: first / second });
        break;
      default:
        this.setState({ result: first + second });
    }
  }

  setOperator(e) {
    e.preventDefault();
    // console.log(e.target.value)
    this.setState({
      operator: e.target.value,
      //here we are assigning our 4 operators to the value we gave them in the buttons
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Calculate with React!</h1>

          <div className="add">
            <input
              type="number"
              name="num1"
              placeholder="Enter your first number"
              value={this.state.num1} //created variable value to hold the endtered number
              onChange={(e) => this.setNum(e, "num1")}
              //anonomous function, added e for event
              // the event is able to grab the value and change num1 into the value entered
            />
            <span>
              <button value={"+"} onClick={(e) => this.setOperator(e)}>
                {" "}
                +
              </button>
              <button value={"-"} onClick={(e) => this.setOperator(e)}>
                {" "}
                -
              </button>
              <button value={"*"} onClick={(e) => this.setOperator(e)}>
                {" "}
                X
              </button>
              <button value={"/"} onClick={(e) => this.setOperator(e)}>
                {" "}
                /
              </button>
              {/* added value so we can use them as +, -, * and / */}
            </span>
            <input
              type="number"
              name="num2"
              placeholder="Enter your second number"
              value={this.state.num2}
              onChange={(e) => this.setNum(e, "num2")}
              //anonomous function, the event is able to grab the value and change num2 into the value entered
            />
            <button onClick={(e) => this.calc(e)}>=</button>
            <h3>Results go here!</h3>
            <h3> {this.state.result}</h3>
            {/* under the constructor we created result - to grab its value we write:
                        this.state.value */}
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
