import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/banner/Banner';
import Itemlist from './components/Itemlist.js/Itemlist';
import VegetableFood from './components/VegetableDish/Vegetablelist';
import FootBanner from './components/FooterBanner/FooterBanner';
import Footer from './components/FooterBanner/Footer';
function App() {
  return (
    <div className="App w-full cursor-pointer  h-screen">
      <Navbar/>
      <Banner/>
      <Itemlist/>
      <VegetableFood/>
      <FootBanner/>
      <Footer/>
       </div>
  );
}

export default App;
