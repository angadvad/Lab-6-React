import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calculator from './calculator';


const Greeting = (props) => {
  return (
    <div className='Greeting'>
      <h1>{'Hello ' + (props.name === undefined || props.name.length === 0 ? 'World' : props.name)}</h1>
    </div>
  )
}


const GreetingButton = (props) => {
  return (
    <>
      <p>_________________________________</p>
      <div className='Greeting'>
        <p>React Hello Name</p>
        <div><input type="text" id="inputName" placeholder='Input Name Here'></input></div>
        <button onClick={props.handleClick}> Greet </button>
        <p>Hello {props.name}</p>
      </div>
    </>
  )
}

const EmojiButton = (props) => {
  const [currentEmoji, setCurrentEmoji] = useState('👹');

  return (
    <>
      <p>_________________________________</p>
      <div className='Emoji_Wrapper'>
        <div id='emoji_item'>{currentEmoji}</div>
        <button onClick={() => setCurrentEmoji(props.changeEmoji(currentEmoji))}> Change Emoji </button>
      </div>
    </>
  )

}

function Emoji() {
  const [emoji, setName] = useState('👹');

  const changeEmoji = () => {
    let input = document.getElementById('emoji_item').innerHTML;
    console.log(input);
    input = (input === '👹' ? '👺' : '👹');
    console.log(input);
    setName(input);
  };

  return (<EmojiButton changeEmoji={changeEmoji} />);

}

function GreetingButtonFunc() {
  const [name, setName] = useState('World');

  const handleClick = () => {
    let input = document.getElementById('inputName').value;
    input = (input === undefined || input.length === 0 ? 'World' : input);
    setName(input);
  };

  return (<GreetingButton name={name} handleClick={handleClick} />);
}


function App() {

  return (
    <>
      <div>
        <Greeting name='Prop Name' />
      </div>
      <div>
        <GreetingButtonFunc />
      </div>

      <div>
        <Emoji />
      </div>


      <div>
        <Calculator />
      </div>

    </>
  );

}

export default App;