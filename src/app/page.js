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
                    <Cards />
                    <Footer />
                </div>
            </DataProvider>
        </>
    );
}
