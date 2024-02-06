import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { DataProvider } from '../DataContext/DataContext'; // Adjust the path as needed

export default function Home() {
  return (
    <>
    <DataProvider>
     <div className="flex flex-col min-h-screen">
        <Header />
        <Footer />
      </div>
      </DataProvider>
    </>
  );
}
