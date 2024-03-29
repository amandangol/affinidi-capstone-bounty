"use client"; // This is a client componentimport React, {useState} from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';
import ProductHomepage from './Product_Homepage/product';
import Cart from './Cart/page';
import Checkout from './Checkout/page';

const Home = () => {
  const pathName = usePathname();

  return (
    <>
      {pathName === '/' && <ProductHomepage />}
      {pathName === '/Cart' && <Cart />}
      {pathName === '/Checkout' && <Checkout  />}
    </>
  );
}

export default Home;