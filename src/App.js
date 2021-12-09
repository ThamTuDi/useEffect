import './App.css';
import { useState } from 'react';
import Dem from './Dem';
import Content from './Content';

function App() {
  const [check, setCheck] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <div className='App'>
      <button type='button' className='btn btn-primary' onClick = { () => setCheck(!check)}>Đếm ngược</button>
      <button type='button' className='btn btn-warning' onClick = {()=>setShow(!show)}>Toggle</button>
      {check && <Dem/>}
      {show && <Content/>}
    </div>
  );
}

export default App;
