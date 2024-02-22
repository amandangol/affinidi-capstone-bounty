"use client";
import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import UserContext from '../contexts/UserContext';
import { useRouter } from 'next/navigation';
import Session from '../api/auth/[...nextauth]/Session';
import './Navbar.css';
import defaultPicture from '../images/affinidi_logo.png';
import dummyPerson from '../images/dummy.png';
import logo from '../images/affinidi.svg';

const Header = () => {
  const Router = useRouter();
  const { setProfile } = useContext(UserContext);
  const [localProfile, setLocalProfile] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  let profilePicture = localProfile?.picture || dummyPerson;

  const toCart = () => {
    Router.push("/Cart");
  };

  const toHome = () => {
    Router.push("/");
  };

  useEffect(() => {
    let session = Session();

    session.then((result) => {
      console.log('Session result:', result);
      setSessions(result);
    }).catch(error => {
      console.error('Session error:', error);
    }).finally(() => {
      setLoading(false); // Update loading state regardless of success or error
    });
  }, []);

  useEffect(() => {
    setLocalProfile(sessions?.user);
    setProfile(sessions?.user);
  }, [sessions]);

  const logout = () => {
    sessionStorage.clear();
    Router.push("/api/auth/signout?callbackUrl=/");
  };
  
  const renderLoginState = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    if (sessions?.user !== undefined) {
      return (
        <div className="flex items-center gap-x-3 pr-3">
          {localProfile && (
            <span className="text-center text-black-800 font-semibold text-lg">
              Greetings, {localProfile.givenName}
            </span>
          )}
          <img src={profilePicture} alt="Person icon" className="w-12 h-12 rounded-full mb-2"></img>
          <button onClick={toCart}>
            <img className="w-12 h-12" src="/cart.png" alt="Cart"/> 
          </button>
          <button className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-500" onClick={logout}>Logout</button>
        </div>
      );
    }
    return (
      <Link href="/api/auth/signin" className="pl-3">
        <button className="flex items-center bg-blue-500 text-white font-semibold text-lg px-4 py-4 rounded-md hover:bg-blue-700">
          <img src={logo.src} alt="logo" className="w-12 h-6"/>  Affinidi Login 
        </button>
      </Link>
    );
  };
  
  return (
    <header className="Header bg-gray-200 p-4 flex flex-row items-center">
      <button onClick={toHome}>
        <div className="flex flex-col items-center">
          <img src={defaultPicture.src} alt="Affinidi logo" className=" h-8" />
          <h1 className="font-semibold text-gray text-2xl">StackShop</h1>
        </div>
      </button>
      <nav>
        {renderLoginState()}
      </nav>
    </header>
  );
};

export default Header;
