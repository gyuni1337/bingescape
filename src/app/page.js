import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Search from "@/Components/Inputs/Search/Search";
import { DataProvider } from '../DataContext/DataContext'; // Adjust the path as needed

export default function Home() {
  return (
    <>
    <DataProvider>
     <div className="flex flex-col min-h-screen">
        <Header />
        <Search/>
        <Footer />
      </div>
      </DataProvider>
    </>
  );
}
