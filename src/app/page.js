import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Search from "../Components/Inputs/Search/Search";
import GenreFeed from "../Components/Genre/GenreFeed/GenreFeed";
import { DataProvider } from '../DataContext/DataContext';

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
