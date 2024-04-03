import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Search from "@/Components/Inputs/Search/Search";
import GenreFeed from "@/Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/DataContext'; // Adjust the path as needed
import React from 'react';
import VideoPlayer from '@/Components/VideoDownload/Video'; // Adjust the path as necessary

export default function Home() {
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
}

