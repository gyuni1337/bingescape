'use client';

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Inputs/Search/Search";
import GenreFeed from "../../Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../../DataContext/DataContext';
import { firestore, auth } from "../../app/lib/firebase";
import { useEffect } from "react";
import React from 'react';
import VideoPlayer from '../../Components/VideoDownload/Video'; 
import Card from "../../Components/Card/Card";
import BigCard from "../../Components/Card/bigCard/BigCard";
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
            <BigCard bgImage="https://s3-alpha-sig.figma.com/img/4e07/538d/111ad763f0986d9065e55147f642b589?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1TmGXmUi~JNg-BmuZMRVZF1dwOVsrDDZBxXeq3u5un3r8TCjdwshZnfT660vMjQ9viWxia88N11edeONy96u76KWUqEkzEUaBmyB-nNJiLYIiHVtddEO6sZAOfJbe45a1CtW7zNAEgoAi39CIe9T4E7KKZli5r3d~1IJJqYpcrXyKjg43xtE0VJlawgj3phW~kdcMra1w7T9AiETkON--P~CmSbC0CeTqy6HW9huN8pv83eDoD~OQdMV6f8F95kJEyRJJA93GVjleeJlNLfLVPvJfnj0C~bIjgM402WOjTIKwT7KoKlCT5bnceI1ilpolWdWo037hxcY-pk~7Bb-Q__" text="Julmys"/>
            <BigCard bgImage="https://s3-alpha-sig.figma.com/img/85c7/8d66/3c34500aea402456a7069eb7e4b324b1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1ijjKrK2eVhbFtYctEbQDlflQVcrgkhP1~L1jw7wad0Elk1ip-SEr5j9iT~ylXCdEkigg~0spO94VYklpDF~~9mjwGhIe1Jw1nxWO3r4EEzIhJYEK8WrtaucaRZCCzZvtl2wW3o5PXBQnQIRKdqDxODyQuH82JuxVy2stLDWUnksWAhkoV334e0vel9Cr~USMRsMJGzVvrIkgpYjU9WCrxX1VDZEJz~q4dpl8z5NlbS3MDxX67lIv8QRIEq7oTHxIyw-bn01Wd7yiJBsESq2CwPEBgyOUE4vdz0zhzx8beo4~kecUeXqt14ciqKTcXGWvY3q0h~BH-qYFr3sJh9AQ__" text="Hemmakväll"/>
            <BigCard bgImage="https://www.figma.com/file/W37v6galdek1JUnYcGsSJ6/image/3cedc96ace8a792b19e41be1969715841ec97e00" text="Scary Movie Night"/>
            <BigCard bgImage="https://www.figma.com/file/W37v6galdek1JUnYcGsSJ6/image/6cbc182416b57afcdbfc09a84dfc3e1d669087de" text="Familjefilmer"/>

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
