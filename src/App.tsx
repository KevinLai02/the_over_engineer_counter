import React, { useState, useRef } from 'react';

function App() {
  const [number, setNumber] = useState<number>(0)
  const codeRef = useRef<string>('')
  const winAudio = new Audio("/audios/win.mp3")

  const checkKonamiCode = (e: React.KeyboardEvent<HTMLDivElement>) => {
    codeRef.current += e.key
    const isCorrect = codeRef.current.indexOf('ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba')
    console.log(isCorrect);
    console.log(codeRef.current);
    
    if (isCorrect > -1) {
      winAudio.play()
      alert("You win the life!!")
      codeRef.current = ''
    }
    
  }

  return (
    <div 
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}
      onKeyDown={checkKonamiCode}
      tabIndex={0}
    >
      <button onClick={()=>alert('Pro mode is unavailable for free users.')}>Pro mode</button>
      <div style={{display: 'flex', marginTop: '30px'}}>
        <button 
          style={{marginLeft: '20px', marginRight: '20px'}}
          onClick={() => {
            setNumber(prev => prev -= 1)
          }}
        >
          -
        </button>
        <p>{number}</p>
        <button 
          style={{marginLeft: '20px', marginRight: '20px'}}
          onClick={() => {
            setNumber(prev => prev += 1)
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
