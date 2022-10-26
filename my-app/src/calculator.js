import React, { useState } from 'react';

const CalculatorButton = (props) => {

    return (
        <>
            <p>_________________________________</p>
            <div>
                CALCULATOR
            </div>
            <div class="calculator">
                <div class="integerInputs"><input type="text" id="firstNum" placeholder='Num1'></input>
                    <p id='op'>{props.operand}</p>
                    <input type="text" id="secondNum" placeholder='Num2'></input>
                </div>
                <button onClick={props.plus}>+</button>
                <button onClick={props.minus}>-</button>
                <button onClick={props.divide}>÷</button>
                <button onClick={props.times}>*</button>
                <button onClick={props.equals}>=</button>
                <p>Result = {props.result}</p>
            </div>

        </>
    )
}


function Calculator() {
    const [result, setResult] = useState('________');
    const [operand, setOp] = useState('Operand')

    const plus = () => {
        let num1 = parseInt(document.getElementById('firstNum').value);
        let num2 = parseInt(document.getElementById('secondNum').value);
        let output = num1+num2;
        setOp('+');
        return output;
    };

    const minus = () => {
        let num1 = parseInt(document.getElementById('firstNum').value);
        let num2 = parseInt(document.getElementById('secondNum').value);
        let output = num1-num2;
        setOp('-');
        return output;
    };
    const divide = () => {
        let num1 = parseInt(document.getElementById('firstNum').value);
        let num2 = parseInt(document.getElementById('secondNum').value);
        let output = num1/num2;
        setOp('÷');
        return output;
    };
    const times = () => {
        let num1 = parseInt(document.getElementById('firstNum').value);
        let num2 = parseInt(document.getElementById('secondNum').value);
        let output = num1*num2;
        setOp('*');
        return output;
    };

    const equals = () => {
        let num1 = parseInt(document.getElementById('firstNum').value);
        let num2 = parseInt(document.getElementById('secondNum').value);

        if(!num1||!num2) {
            if(num1!==0 && num2!==0){
                alert("Please enter interger values");
                setOp('Operand');
                setResult('________');
            }
        }

        if (operand==="+"){
            setResult(plus());
        }
        else if(operand==="-"){
            setResult(minus());
        }else if(operand==="÷"){
            setResult(divide());
        }else if(operand==="*"){
            setResult(times());
        }else{
            setResult("________");
        }
    }
    return (<CalculatorButton result={result} operand={operand} plus={plus} minus={minus} divide={divide} times={times} equals={equals}/>);

}

export default Calculator;