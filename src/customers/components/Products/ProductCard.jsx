import React from 'react';
import './ProductsCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className='productCard w-[14rem] m-3 transition-all cursor-pointer border border-stone-200 shadow-lg rounded-lg overflow-hidden'>
      <div className='h-[15rem]'>
        <img className="h-full w-full object-cover" src={product.imageUrl} alt={product.name} />
      </div>
      <div className='textPart bg-white p-3 border-t-2 border-stone-200'>
        <div>
          <p className='font-semibold text-gray-600'>{product.name}</p>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <p className='font-semibold text-gray-400 text-sm'>{product.category}</p>
          <p className='font-semibold text-gray-400 text-sm'>{product.grams}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
