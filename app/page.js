'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productslice';

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Page</h1>
      {/* {status === 'succeeded' && ( */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product,ind) => (
            <div
              key={ind}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-semibold text-center line-clamp-2">{product.title}</h3>
              <p className="mt-2 text-lg font-bold text-green-600">${product.price}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
}
