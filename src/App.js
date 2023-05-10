import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {products} from './products';

function App() {
  return (
   <Store products={products}/>
  );
}

export default App;
