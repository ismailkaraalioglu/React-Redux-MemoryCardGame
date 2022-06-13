import "./App.css";
import Footer from "./components/Footer";

// COMPONENTS
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
