import { useState } from 'react'
import Children from './Children'
import './App.css';
import AccessDom from './components/access_dom/AccessDom'

function App() {
  // const [count, setCount] = useState(0);

  // const onClickButton = (number) => {
  //   setCount(count + number);
  // }
  return (
    // <div className="App">
    //   <button onClick={() => onClickButton(+1)}>+1</button>
    //   <button onClick={() => onClickButton(-1)}>-1</button>
    //   <Children count={count} setCount={setCount}>
    //     <Children count={count} setCount={setCount} />
    //   </Children>
    // </div>
    <div>
      <AccessDom/>
    </div>
  );
}

export default App;
