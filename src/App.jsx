import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { Suspense } from "react";
import PriceCard from "./Components/PriceCard/PriceCard";

const priceData = fetch('/public/priceData.json')
.then(res => res.json())

function App() {
  const fallback = <h1>Data Loading ...........</h1>
  return (
    <div>
     
    <Navbar></Navbar>
    <Hero></Hero>
    <Suspense fallback={fallback}>
          <PriceCard priceData={priceData} ></PriceCard>
    </Suspense>
     
    </div>
  );
}

export default App;
