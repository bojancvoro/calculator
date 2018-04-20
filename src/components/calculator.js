import React from "react";

class Calculator extends React.Component {


    render() {
        return (
            <div className="App">

        <div className="calculator">

          <div className="screen">
            <p id="screen-relay"></p>
            <p id="output"></p>
          </div>

          <div className="buttons">

            <div className="first-row">
              <ul>
                <li id="seven">7</li>
                <li id="eight">8</li>
                <li id="nine">9</li>
                <li id="devide">/</li>
                <li id="backspace">Del</li>
                </ul>
            </div>

              <div className="second-row">
                <ul>
                  <li id="four">4</li>
                  <li id="five">5</li>
                  <li id="six">6</li>
                  <li id="multiply">*</li>
                  <li id="clear">CE</li>
                </ul>
              </div>


              <div class="third-row">
                <ul>
                  <li id="one">1</li>
                  <li id="two">2</li>
                  <li id="three">3</li>
                  <li id="minus">-</li>
                  <li id="equeals">=</li>
                </ul>
              </div>

              <div class="fourth-row">
                <ul>
                  <li id="zero">0</li>
                  <li id="sign">+-</li>
                  <li id="dot">.</li>
                  <li id="plus">+</li>
                  <li id="equals">=</li>
                </ul>
              </div>

            </div>

          </div>


        </div>
        )
    }
}

export default Calculator;