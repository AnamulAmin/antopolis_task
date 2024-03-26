import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import GetToKnow from "./components/get_to_know/GetToKnow";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <GetToKnow />
      <Footer />
    </>
  );
}

export default App;
