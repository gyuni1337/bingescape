'use client';

import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Search from "../Components/Inputs/Search/Search";
import GenreFeed from "../Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/DataContext';
import { firestore, auth } from "../../app/lib/firebase";
import { useEffect } from "react";
import React from 'react';
import VideoPlayer from '../Components/VideoDownload/Video'; 
import Card from "../Components/Card/Card";
import BigCard from "../Components/Card/BigCard/BigCard";
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
          <GenreFeed />
          <div className="flex justify-center gap-10 mt-10">
            <BigCard bgImage={'./images/tree.png'} text="Julmys"/>
            <BigCard bgImage={'./images/popcorn.png'} text="Hemmakväll"/>
            <BigCard bgImage={'./images/clown.jpg'} text="Scary Movie Night"/>
            <BigCard bgImage={'./images/family.jpg'} text="Familjefilmer"/>

          </div>

          {/* <VideoPlayer src="path/to/your/video.mp4" />  */}
          <div className="flex justify-start mx-24 mt-10 mb-20 flex-wrap">
          <div className="mb-5">
          <h1 className="text-2xl">Populärt just nu</h1>

          </div>
          <div className="flex gap-10 flex-wrap ">

            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
            <Card title="Random Movie" info="Film | 2019" genre="Drama & Komedi"/>
          </div>
          </div>
          <Footer />
        </div>
      </DataProvider>
    </>
  );
}
