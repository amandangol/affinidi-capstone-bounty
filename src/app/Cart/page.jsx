"use client";
import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getCode } from 'country-list';
import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from 'currency-symbol-map';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';
import CircularIndicator from '../utils/CircularIndicator'; 

const Cart = () => {
  const router = useRouter();
  const { userProfile } = useContext(UserContext);
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  let userCountry = userProfile?.country || '';
  let countryCode = getCode(userCountry);
  let countryCurrency = countryToCurrency[countryCode];
  let currencySymbol = getSymbolFromCurrency(countryCurrency);

  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems?.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const navigateToCheckout = () => {
    router.push('/Checkout');
  };

  return (
    <div className="pt-8 pr-8 flex justify-center justify-items-center w-full">
      {loading ? (
        <CircularIndicator />
      ) : cartItems?.length === 0 ? (
        <div className="text-center text-2xl font-bold pt-10">You haven't added anything to your cart yet.</div>
      ) : (
        <div className="w-full pr-8 pl-8">
          <table className="table-auto text-center border-separate bg-gray-100 w-full">
            <caption className="text-lg font-bold pb-2">Your Cart</caption>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "20%" }} />
            </colgroup>
            <thead>
              <tr>
                <th className="border border-slate-600 px-4">Product</th>
                <th className="border border-slate-600 px-4">Name</th>
                <th className="border border-slate-600 px-4">Quantity</th>
                <th className="border border-slate-600 px-4">Price</th>
                <th className="border border-slate-600 px-4">Total Price</th>
                <th className="border border-slate-600 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr key={item.id}>
                  <td className="border border-slate-600 flex justify-center justify-items-center">
                    <img className="size-24" src={item.image} alt={item.title} />
                  </td>
                  <td className="border border-slate-600">{item.title}</td>
                  <td className="border border-slate-600">{item.quantity}</td>
                  <td className="border border-slate-600">{currencySymbol} {Intl.NumberFormat().format(item.price)}</td>
                  <td className="border border-slate-600">{currencySymbol} {Intl.NumberFormat().format(item.price * item.quantity)}</td>
                  <td className="border border-slate-600 justify-center justify-items-center">
                    <FontAwesomeIcon
                      className="size-8 text-red-600 px-2 cursor-pointer hover:scale-125"
                      icon={faTrashAlt}
                      onClick={() => removeFromCart(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="py-2 font-bold">Total</td>
                <td className="border border-slate-600 font-bold">{currencySymbol} {Intl.NumberFormat().format(calculateTotalPrice())}</td>
              </tr>
            </tfoot>
          </table>
          <div className="flex justify-center justify-items-center pt-8">
            <button onClick={navigateToCheckout} disabled={cartItems?.length === 0} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {cartItems?.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
