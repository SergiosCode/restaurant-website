import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Highlights from "./components/Highlights";
import Events from "./components/Events";
import Reservation from "./components/Reservation";
import Info from "./components/Info";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Highlights />
      <Events />
      <Reservation />
      <Info/>
    </div>
  );
}

export default App;
