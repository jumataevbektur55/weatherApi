import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conpanents/Header";
import Hero from "./conpanents/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path={"/"} element={<Hero/>}/>
      </Routes>
    </div>
  );
}

export default App;
 