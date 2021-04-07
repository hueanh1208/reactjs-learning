import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import ProducList from "./components/ProductList";
import Promotion from "./components/Promotion";
function App() {
  return (
    <div>
      <div>
          <Header />
          <Carousel/>
          <ProducList/>
          <Promotion/>
      </div>
    </div>
  );
}

export default App;
