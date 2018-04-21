import React from "react";
import Buttons from "./buttons";
import Display from "./display";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayData: "", operand: 0, operation: "", newNum: true }
        this.handleInput = this.handleInput.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleInput(e) {
        if (e.target.className === "number") {
            if (this.state.newNum) {
                this.setState({ displayData: e.target.innerHTML, newNum: false });
            } else {
                this.setState({ displayData: this.state.displayData + e.target.innerHTML })
            }
        } else if (e.target.className === "operator") {
            this.setState({ operand: this.state.displayData })
            if (e.target.id === "add") {
                this.setState({ operation: "add", newNum: true })
            } else if (e.target.id === "subtract") {
                this.setState({ operation: "subtract", newNum: true })
            } else if (e.target.id === "multiply") {
                this.setState({ operation: "multiply", newNum: true })
            } else if (e.target.id === "devide") {
                this.setState({ operation: "devide", newNum: true })
            }
        }
    }

    calculate() {
        const firstOperand = Number(this.state.operand);
        const secondOperand = Number(this.state.displayData);
        if (this.state.operation === "add") {
            this.setState({ displayData: firstOperand + secondOperand, newNum: true });
        } else if(this.state.operation === "subtract") {
            this.setState({ displayData: firstOperand - secondOperand, newNum: true });
        } else if(this.state.operation === "multiply") {
            this.setState({ displayData: firstOperand * secondOperand, newNum: true });
        } else if(this.state.operation === "devide") {
            this.setState({ displayData: firstOperand / secondOperand, newNum: true });
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display displayData={this.state.displayData} />
                <Buttons handleInput={this.handleInput} calculate={this.calculate} />
            </div>
        )
    }
}

export default Calculator;