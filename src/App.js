import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { useState } from 'react';
import AllProducts from './AllProducts';
import Categories from './Categories';

function App() {
  let [pid, setPid] = useState(1);
  let [showProduct, setShowproduct] = useState(false);
  function check(event) {
    event.preventDefault();
    let inputTag = parseInt(event.target.prodId.value);
    if (inputTag !== NaN & inputTag > 0) {
      setPid(inputTag);
      setShowproduct(true);
    }
  }
  return (
    <div className="App">
      <div className='nav products'>
      <header className='display'>
        <h2>Ecommerce</h2>
        </header>
        <div className='display search'>
        <form onSubmit={check}>
        <input type="number" name='prodId' placeholder='Search by Product Id'/>
        <button className='searchBtn'>Search</button>
      </form>
        </div>
        </div>
      <Categories></Categories>
      {showProduct ? <Products pid={pid}></Products> : ""}
      <AllProducts></AllProducts>
     
    </div>
  );
}
export default App;
