import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calculator from './calculator';


const Greeting = (props) => {
  return (
    <div className='Greeting'>
      <h1>{'Hello ' + (props.name ? props.name : 'World')}</h1>
    </div>
  )
}


const GreetingButton = (props) => {
  const [currentName, setCurrentName] = useState('')

  return (
    <>
      <p>_________________________________</p>
      <div className='Greeting'>
        <p>React Hello Name</p>
        <div><input type="text" id="inputName" onChange={(e) => setCurrentName(e.target.value)} placeholder='Input Name Here'></input></div>
        <button onClick={() => props.handleClick(currentName)}> Greet </button>
        <Greeting name={props.name} />
      </div>
    </>)
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

  const changeEmoji = (input) => {
    input = (input === '👹' ? '👺' : '👹');
    return input;
  };

  return (<EmojiButton changeEmoji={changeEmoji} />);

}

function GreetingButtonFunc() {
  const [name, setName] = useState('World');

  return (<GreetingButton name={name} handleClick={setName}/>);
}


function App() {

  return (
    <>
      <div>
        <Greeting name='Props Name' />
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