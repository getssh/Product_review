import './App.css';
import Product1 from './images/image-product-desktop.jpg'
import Product2 from './images/image-product-mobile.jpg'

function App() {
  return (
    <div className="App container p-0 bg-white mt-5 col-md-6 br-5" style={{borderRadius: "1.5rem"}}>
        <div className='row m-0 p-0 d-flex'>
          <div className='col-md-6 col-sm-12 m-0 p-0 left-img'>
            <picture>
              <source className='my-pic' media='(max-width:765px)' srcSet={Product2}/>
              <source className='my-pic' media='(min-width:766px)' srcSet={Product1}/>
              <img className='my-pic' src={Product1}/>
            </picture>
          </div>
          <div className='col-md-6 col-sm-12 ps-3 mt-3'>
            <p style={{color: "hsl(158, 36%, 37%)", fontSize: "1rem"}}>P E R F U M E</p>
            <h1 style={{fontFamily:"Montserrat", fontWeight:"700"}}>Gabrielle Essence Eau De Parfum</h1>
            <p style={{color: "hsl(158, 36%, 37%)", fontFamily:"Fraunces"}}>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
            <div className='row'>
              <br/>
              <h2 style={{color: "hsl(158, 36%, 37%)"}} className='col-6'>$149.99</h2>
              <span className='col-6 mt-2'><del>$169.99</del></span>
            </div>
            <button className='btn text-white col-9 mt-4' style={{backgroundColor: "hsl(158, 36%, 37%)", fontWeight: "bold"}}>
              <svg className='me-2' width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
              Add to Cart
            </button>
          </div>
          
        </div>
    </div>
  );
}

export default App;
