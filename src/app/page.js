'use client';

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { DataProvider } from './DataContext/DataContext';
import { firestore, auth } from "../app/lib/firebase";
import { useEffect } from "react";
import React from 'react';
import Card from "./Components/Card/Card";
import Billboard from "./Components/Billboard/Billboard";
export default function Home() {

  useEffect(() => {

      if (localStorage.getItem('accessToken') !== null) { console.log(localStorage.getItem('accessToken')); };

  }, []);

  return (
    <>
      <DataProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Billboard title={"Miracle in Cell No. 7"} genres={"Drama, thriller"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed maximus odio, congue facilisis urna. Proin semper ac nulla vel vestibulum. Vestibulum et hendrerit dolor, eget finibus odio. Nulla egestas eleifend libero, nec tempus nibh ornare et. Quisque rhoncus orci quis sapien eleifend viverra. Sed porta nibh non ex venenatis, a consectetur eros scelerisque. "} /> 

          <Footer />
        </div>
      </DataProvider>
    </>
  );
}

