import './App.css';
import Product1 from './images/image-product-desktop.jpg'

function App() {
  return (
    <div className="App container p-0 bg-white mt-5 col-md-6">
        <div className='row m-0 p-0 d-flex'>
          <div className='col-md-6 col-sm-12 m-0 p-0'>
            <img src={Product1}/>
          </div>
          <div className='col-md-6 col-sm-12 ps-3'>
            <p>Prefume</p>
            <h2>Gabrielle Essence Eau De Parfum</h2>
            <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
            <h2>$149.99</h2>
            <span><del>$169.99</del></span>
          </div>
          
        </div>
    </div>
  );
}

export default App;
