import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Highlights from "./components/Highlights";
import Events from "./components/Events";
import Reservation from "./components/Reservation";
import ReservationPage from "./components/ReservationPage";
import Info from "./components/Info";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/reservation">
            <ReservationPage />
          </Route>
          <Route path='/'>
          
            <Header />

            <Body />

            <Highlights />

            <Events />
            <Reservation/>

          </Route>
        </Switch>
      </Router>

      <Info />
    </div>
  );
}

export default App;
