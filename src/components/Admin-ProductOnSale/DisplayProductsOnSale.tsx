import React, { useEffect, useState } from 'react';
import Product from '../../models/Product';
import { apiGetFeaturedProducts, apiGetProductsOnSale } from '../../remote/e-commerce-api/productService';
import { ProductAdmin } from '../Admin-All-Products/ProductAdmin';
import { ProductCard } from '../display-products/ProductCard';


export const DisplayProductsOnSale = () => {

  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGetProductsOnSale()
      setProducts(result.payload)
    }
    fetchData()
  }, [])

  return (
    <>
     <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((item) => (
              <ProductAdmin product={item} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </>  
    
  );
};