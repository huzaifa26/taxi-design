import Benefits from "./Components/Benefits";
import Footer from "./Components/Footer";
import HotOffers from "./Components/HotOffers";
import HWW from "./Components/HWW";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main>
          <Navbar/>
        </Main>
        <HotOffers />
        <HWW />
        <Benefits />
        <Testimonial/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
