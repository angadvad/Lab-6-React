import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calculator from './calculator';


const Greeting = (props) => {
  console.log(props)

  return (
    <div className='Greeting'>
      <h1>{'Hello ' + (props.name ? props.name : 'World')}</h1> {/*more common and concise*/}
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
        {/* <p>Hello {props.name}</p> // you can use either this or the component you made above */}
        <Greeting name={props.name}/> {/* this will now be the value from the input */}
      </div>
    </>
  )
}

const EmojiButton = (props) => {

  return (
    <>
    <p>_________________________________</p>
    <div className='Emoji_Wrapper'>
      <div id='emoji_item'>{props.emoji}</div>
      <button onClick={props.handleClick}> Change Emoji </button>
    </div>
    </>
  )

}

function Emoji() {
  const [emoji, setEmoji] = useState('👹');

  const changeEmoji = () => {
    //let input = document.getElementById('emoji_item').innerHTML; //we don't use DOM functions in React, we use state instead
    //console.log(input);
    let input = (emoji === '👹' ? '👺' : '👹');
    console.log(input);
    setEmoji(input);
  };

  return (<EmojiButton emoji={emoji} handleClick={changeEmoji} />);

}

function GreetingButtonFunc() {
  const [name, setName] = useState('World');

  // const handleClick = () => {
  //   let input = document.getElementById('inputName').value; //although this works, it's not the React way of doing things
  //   input = (input === undefined || input.length === 0 ? 'World' : input);
  //   setName(input);
  // };

  return (<GreetingButton name={name} handleClick={setName} />); //we can just use the setName state function as the click handler
}


function App() {

  return (
    <>
      <div>
      <Greeting name='Prop Name'/>
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