import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

 function App() {
  const [name, setName] = useState('Reddy');
  return (
    <div>
      <Hello name={name} />
      <button
        style={{
          background: 'skyblue',
          color: 'white',
          padding: '4px 10px',
          cursor: 'pointer',
        }}
        onClick={() => setName('Sudharshan Reddy KR')}
      >
        click
      </button>
    </div>
  );
}
render(<App />, document.getElementById('root'));
