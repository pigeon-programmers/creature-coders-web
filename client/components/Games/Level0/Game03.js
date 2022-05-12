import React from 'react';

const Game03 = () => {
  const handlePress = (evt) => {
    const {value, style} = evt.target
    if (value === 'string' || value === 'hello') {
      if (value === 'string' || value === 'hello') {
        style={{...style}, backgroundColor: grey}
      }
    }
  };

  return (
    <div style={{ margin: 100 }}>
      <div style={{ height: 300, width: 500, backgroundColor: '#ffd68a' }}>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'white',
          }}
          value="string"
        >
          string
        </button>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'white',
          }}
          value="boolean"
        >
          boolean
        </button>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'white',
          }}
          value="number"
        >
          number
        </button>
      </div>
      <div style={{ height: 300, width: 500, backgroundColor: '#add8e6' }}>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'pink',
          }}
          value="hello"
        >
          'hello'
        </button>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'pink',
          }}
          value="2"
        >
          2
        </button>
        <button
          style={{
            height: 25,
            width: 50,
            margin: 10,
            border: '1px solid black',
            backgroundColor: 'pink',
          }}
          value="false"
        >
          false
        </button>
      </div>
    </div>
  );
};

export default Game03;
