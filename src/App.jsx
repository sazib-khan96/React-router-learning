import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { Suspense  } from "react";
import PriceCard from "./Components/PriceCard/PriceCard";
import axios from "axios";
import Showaxios from "./Components/ShowAxios/Showaxios";



const priceData = fetch('/public/priceData.json')
.then(res => res.json())

const userData = fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>  res.json()) //its a promise

      // .then(data => console.log(data))
      
const getPost = axios.get('https://jsonplaceholder.typicode.com/posts')

      

function App() {



  const fallback = <h1>Data Loading ...........</h1>
  return (
    <div>
     
    <Navbar></Navbar>

     

    <Hero></Hero>
    <Suspense fallback={fallback}>
          <PriceCard priceData={priceData} ></PriceCard>
    </Suspense>
   {/* normal featch  */}
     <Suspense fallback={<hi>data is loading ......</hi>}>
          <Showaxios getPost={getPost} ></Showaxios>
      </Suspense>


     
    </div>
  );
}

export default App;
