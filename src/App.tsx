import { useState } from 'react';
import { ObservableDiv } from '../lib/components/ObservableDiv';

function App() {

  const [size, setSize] = useState({ width: 0, height: 0 });

  const resizeHandler = ({ width, height }: DOMRectReadOnly) => {
    setSize({ width, height });
  };

  return (
    <ObservableDiv
      onResize={resizeHandler}
      onMount={(domElement) => console.log('Mounted', domElement)}
      onUnMount={() => console.log('Unmounted')}
      className='observable-div'
    >
      <p>{size.width.toLocaleString()} x {size.height.toLocaleString()}</p>
    </ObservableDiv>
  );

}

export default App;
