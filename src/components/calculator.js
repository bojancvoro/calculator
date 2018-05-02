import React from "react";
import Buttons from "./buttons";
import Display from "./display";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { displayData: "" }
        this.handleInput = this.handleInput.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleInput(e) {
        this.setState({ displayData: this.state.displayData + e.target.innerHTML });
    }

    handleCalculate() {
        const result = eval(this.state.displayData);
        console.log("state:" + this.state.displayData, "result:", result);
        this.setState({ displayData: result })
    }

    handleDelete() {
        const arrayDisplayData = this.state.displayData.toString().split("");
        arrayDisplayData.pop();
        const result = arrayDisplayData.join("");
        this.setState({ displayData: result });
    }

    handleClear() {
        this.setState({ displayData: "" });
    }

    render() {
        return (
            <div className="calculator">
                <Display displayData={this.state.displayData} />
                <Buttons 
                    handleInput={this.handleInput} 
                    handleCalculate={this.handleCalculate} 
                    handleDelete={this.handleDelete}
                    handleClear={this.handleClear}/>
            </div>
        )
    }
}

export default Calculator;