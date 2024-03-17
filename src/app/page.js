import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Search from "@/Components/Inputs/Search/Search";
import GenreFeed from "@/Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/Datacontext';

export default function Home() {
  return (
    <>
    <DataProvider>
     <div className="flex flex-col min-h-screen">
        <Header />
        <Search/>
        <GenreFeed/>
        <Footer />
      </div>
      </DataProvider>
    </>
  );
}
