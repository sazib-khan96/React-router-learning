import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDeatail = () => {
    const product = useLoaderData()
    const {title,
        category,
        images,
        price,
        stock,
        brand,
        description,
        thumbnail,
    } = product
    return (
        <div className='w-6/12 mx-auto '>
            <h1>This is Porduct detail page</h1>
            <div className='flex gap-5 mt-8'>
               <div>
                 <img src={thumbnail} alt="product images" />
                <h1>{title}</h1>
                <div className='flex gap-5'>
                    <p> Brand: {brand}</p>
                    <p>Stock :{stock}</p>
                </div>
                <p>${price}</p>
               </div>
               <div>
                <p>{description}</p>
               </div>
              
            </div>
            <div className='flex gap-5'>
             <button className='px-4 py-2 bg-amber-400'>Buy Now</button>
             <button className='px-4 py-2 bg-amber-400'>Add Wishlist</button>
            </div>
        </div>
    );
};

export default ProductDeatail;