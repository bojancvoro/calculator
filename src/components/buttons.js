import React from "react";

const Buttons = (props) => {
    return (
      <div className="buttons">

        <div className="first-row" onClick={props.handleInput}>
          <ul>
            <li className="number">7</li>
            <li className="number" >8</li>
            <li className="number">9</li>
            <li id="devide" className="operator">/</li>
            <li id="backspace">Del</li>
          </ul>
        </div>

        <div className="second-row" onClick={props.handleInput}>
          <ul>
            <li className="number">4</li>
            <li className="number">5</li>
            <li className="number">6</li>
            <li id="multiply" className="operator">*</li>
            <li id="clear">CE</li>
          </ul>
        </div>

        <div className="third-row" onClick={props.handleInput}>
          <ul>
            <li className="number">1</li>
            <li className="number">2</li>
            <li className="number">3</li>
            <li id="subtract" className="operator">-</li>
            <li className="equeals">=</li>
          </ul>
        </div>

        <div className="fourth-row">
          <ul>
            <li className="number" onClick={props.handleInput}>0</li>
            <li id="sign">+-</li>
            <li id="dot">.</li>
            <li id="add" className="operator" onClick={props.handleInput}>+</li>
            <li className="equals" onClick={props.calculate}>=</li>
          </ul>
        </div>

      </div>
    )
  }

export default Buttons;