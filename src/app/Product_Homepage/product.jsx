import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getCode } from 'country-list';
import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from 'currency-symbol-map';
import './ProductHome.css';
import CircularIndicator from '../utils/CircularIndicator'; 
import Footer from '../components/footer';


const ProductHomepage = () => {
  const Router = useRouter();
  const { profile } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const [rates, setRates] = useState();
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantityMap, setQuantityMap] = useState({}); // State to manage quantity for each product
  const fakeStoreApi = process.env.NEXT_PUBLIC_FAKE_STORE_API;
  

  let arrayPrice = [];

  let userCountry = profile?.country || '';
  let countryCode = getCode(userCountry);
  let countryCurrency = countryToCurrency[countryCode];
  let currencySymbol = getSymbolFromCurrency(countryCurrency) || '$';

  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };

  const getRates = async () => {
    try {
      // fetch the data from API
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${countryCurrency.toLowerCase()}.json`
      ).then(resp => resp.json());

      setRates(response[countryCurrency.toLowerCase()]);
    } catch (e) {
      console.log("Loading");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const contentType = response.headers.get('content-type');
  
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not in JSON format');
      }
  
      const data = await response.json();
      setProducts(data);
      setLoading(false);
  
      // Initialize quantity state for each product to 1
      const initialQuantityMap = {};
      data.forEach(product => {
        initialQuantityMap[product.id] = 0;
      });
      setQuantityMap(initialQuantityMap);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };
  
  
  

  const checkItems = (product, event) => {
    if (profile === null || profile === undefined) {
        alert("You must login first!");
    } else {
        // Pass the quantity from quantityMap
        const quantity = quantityMap[product.id];
        addToCart(product, event, arrayPrice, quantity); // Make sure quantity is passed here
        setOpen(true);
    }
};

const categories = {};

// Categorize products based on their category
products.forEach((product) => {
  if (!categories[product.category]) {
    categories[product.category] = [];
  }
  categories[product.category].push(product);
});



  const newPrice = () => {
    try {
      if (rates !== undefined) {
        return rates;
      } else {
        let basicRates = 1;
        
        return basicRates;
      }
    } catch (e) {
      let basicRates = 1;
      
      console.log('loading');
      return basicRates;
    }
  };

  

  const noDiscountedPrice = (price) => {
    let currentPrice = (Math.round(price * newPrice()));

    arrayPrice.push(currentPrice);
    return currentPrice;
  };

  const updatedPrice = (price) => {
    let currentPrice = (Math.round(price * newPrice()));

    arrayPrice.push(currentPrice);
    return currentPrice;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToCart = () => {
    handleClose();
    Router.push("/Cart");
  };

  const incrementQuantity = (productId) => {
    setQuantityMap(prevState => ({
      ...prevState,
      [productId]: prevState[productId] + 1
    }));
    console.log('Quantity Map after increment:', quantityMap);
  };
  const decrementQuantity = (productId) => {
    if (quantityMap[productId] > 1) {
        setQuantityMap(prevState => ({
            ...prevState,
            [productId]: prevState[productId] - 1
        }));
        console.log('Quantity Map after decrement:', quantityMap);
    } else if (quantityMap[productId] === 1) {
        setQuantityMap(prevState => ({
            ...prevState,
            [productId]: 0
        }));
    }
};

  // Inside the ProductHome component

const addToCartHandler = (product) => {
  
  const quantity = quantityMap[product.id];
  // Clear the arrayPrice before adding new prices
  arrayPrice = [];
  // Call the addToCart function from context
  addToCart(product, event, price, quantity);
};

  
  useEffect(() => { 
    getRates();
    fetchProducts();
  }, [countryCurrency]);

  if (loading) {
    return <CircularIndicator />;
  }
  
  

  return (
    <div className="ProductHome">
      <div className="categories-container">
        {Object.entries(categories).map(([category, productsInCategory]) => (
          <div key={category} className="category">
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="products-container grid grid-cols-2 gap-4">
              {productsInCategory.map((product) => (
                <div key={product.id} className="ProductItem rounded-xl backdrop-blur-md bg-blue/50 p-2 hover:drop-shadow-xl hover:bg-slate-50">
                  <img src={product.image} alt={product.title} />
                  <div>
                    <div className="font-bold text-lg pb-3">{product.title}</div>
                    <div className="font-semi text-md pb-3">{product.description}</div>
                    <div className="py-5">
                      <span className="price">{currencySymbol}</span>
                      <span className="price-value">
                        {Intl.NumberFormat().format(Math.round(noDiscountedPrice(product.price)))}
                      </span>
                    </div>
                    <div className="quantity-controls pt-2">
                      <button className="quantity-button" onClick={() => decrementQuantity(product.id)}>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <span className="quantity-display">{quantityMap[product.id]}</span>
                      <button className="quantity-button" onClick={() => incrementQuantity(product.id)}>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                    <form className="pt-5" onSubmit={(event) => { event.preventDefault(); checkItems(product, event, quantityMap[product.id]); }}>
                      <button className={`mx-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 ${quantityMap[product.id] === 0 && 'disabled'}`} disabled={quantityMap[product.id] === 0}>Add to Cart</button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="rounded-md bg-slate-200 shadow-md">
          <div className="flex flex-col justify-items-center justify-center">
            <div className="text-lg font-medium text-center mb-3">Item successfully added to cart!</div>
            <div className="flex auto-rows-auto gap-x-3 justify-center">
              <button onClick={goToCart} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Go to Cart</button>
              <button onClick={handleClose}className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Continue Shopping</button>
            </div>
          </div>
        </Box>
      </Modal>
      <Footer />

    </div>
  );

  
};
export default ProductHomepage;
