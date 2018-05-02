import React from "react";

const Buttons = (props) => {
    return (
      <div className="buttons">

        <div className="first-row" onClick={props.handleInput}>
          <ul>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li id="devide">/</li>
          </ul>
        </div>

        <div className="second-row" onClick={props.handleInput}>
          <ul>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li id="multiply">*</li>
          </ul>
        </div>

        <div className="third-row" onClick={props.handleInput}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li id="subtract">-</li>
          </ul>
        </div>

        <div className="fourth-row">
          <ul>
            <li id="del" onClick={props.handleDelete}>del</li>
            <li onClick={props.handleInput}>0</li>
            <li id="ce" onClick={props.handleClear}>CE</li>
            <li id="add" onClick={props.handleInput}>+</li>
          </ul>
        </div>

        <div className="fifth-row">
          <ul>
            <li id="equals" onClick={props.handleCalculate}>=</li>
          </ul>
        </div>

      </div>
    )
  }

export default Buttons;