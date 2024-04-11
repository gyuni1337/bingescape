'use client';

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { DataProvider } from '../DataContext/DataContext';
import { firestore, auth } from "../app/lib/firebase";
import { useEffect } from "react";
import React from 'react';
import Card from "../Components/Card/Card";
import Hero from "../Components/Hero/Hero";
export default function Home() {

  useEffect(() => {

      console.log(localStorage.getItem('accessToken'));

  }, []);


  return (
    <>
      <DataProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Hero src="https://www.youtube.com/watch?v=z1-wzTsoxQ8"/>

          <Footer />
        </div>
      </DataProvider>
    </>
  );
}

