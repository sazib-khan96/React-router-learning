import React, { use } from "react";
import PriceCardInfo from "../PriceCardInfo/PriceCardInfo";
const PriceCard = ({priceData}) => {

    const price = use(priceData)


  return (

       <div className=" md:max-w-9/12 px-2 py-8 mx-auto text-center">
        <h1 className="text-2xl md:text-4xl mb-2">Choose the Perfect Plan for You</h1>
        <p>Flexible pricing plans designed to fit your needs, with powerful features and no hidden costs.</p>
        <div className=" lg:grid grid-cols-3 mt-8  mx-auto gap-5 ">
        {
          price.map(cardItem => <PriceCardInfo cardItem={cardItem}></PriceCardInfo> )
        }
       </div>  
       </div>

   
  );
};

export default PriceCard;
