'use client';

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Search from "../Components/Inputs/Search/Search";
import GenreFeed from "../Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/DataContext';
import { firestore, auth } from "../app/lib/firebase";
import { useEffect } from "react";
import React from 'react';
import VideoPlayer from '@/Components/VideoDownload/Video'; // Adjust the path as necessary
import Cards from "@/Components/Cards/Cards";
export default function Home() {

  useEffect(() => {

      console.log(localStorage.getItem('accessToken'));

  }, []);


  return (
    <>
      <DataProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Search />
          <VideoPlayer src="path/to/your/video.mp4" /> 
          <GenreFeed />
          <Footer />
        </div>
      </DataProvider>
    </>
  );
}

