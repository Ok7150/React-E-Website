import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import Offers from './Components/Offers/Offers';
import Recommendation from './Components/Recommendation/Recommendation.js';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Offers />
      <Recommendation/>
      <ProductList />
      <Footer />

    </div>
  );
}

export default App;
