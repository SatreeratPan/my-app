import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [Total, setTotal] = useState('');

  const PrimeNumCheck = (number) => {
    let result = '';
    if (number % 2 === 0) {
      result = '${number} <b>ไม่</b>เป็นจำนวนเฉพาะ';
    } else {
      result = '${number} เป็นจำนวนเฉพาะ';
    }
    setTotal(result);
  };

  const Add = () => {
    setNum(num + 1);
    PrimeNumCheck(num + 1);
  };

  const Delete = () => {
    setNum(num - 1);
    PrimeNumCheck(num - 1);
  };

  
  return (
    <div className="App">
      <Header />
      <div className="MyContent">
      <h1>{num}</h1><br></br>
      <button className="btn-default" onClick={Add}>เพิ่ม</button>{'  '}
      <button className="btn-secon" onClick={Delete}>ลด</button>{'  '}
      <br></br><br></br>
      <span dangerouslySetInnerHTML={{ __html: Total }}></span>
      </div>
    <Footer />
    </div>
  );
}

export default App;
