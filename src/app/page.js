<<<<<<< HEAD
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
          <VideoPlayer src="path/to/your/video.mp4" /> {/* Add the VideoPlayer component */}
          <GenreFeed />
          <Footer />
        </div>
      </DataProvider>
    </>
  );
=======
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Search from "@/Components/Inputs/Search/Search";
import GenreFeed from "@/Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/DataContext'; // Adjust the path as needed
import Cards from "@/Components/Cards/Cards";
export default function Home() {
    return (
        <>
            <DataProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <Search />
                    <GenreFeed />
                    <Cards title={"Main movie idk"} vadfuckduvill={"random bror"} serie={"Serie - 2019"}/>
                    <Footer />
                </div>
            </DataProvider>
        </>
    );
>>>>>>> Fawaz
}

