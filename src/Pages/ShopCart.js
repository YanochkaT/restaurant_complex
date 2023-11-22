// ShopCart.js
import React from 'react';
import { useCart } from './CartContext';

import '../css/index.css'

const ShopCart = () => {
  const { selectedProducts, clearCart, updateProductCount } = useCart();

  const handleIncrease = (productId) => {
    updateProductCount(productId, 1); // Increase count by 1
  };

  const handleDecrease = (productId) => {
    updateProductCount(productId, -1); // Decrease count by 1
  };

  return (
    <main className='content'>
      <p class="title">Замовлення доставкою</p>

      <div className='shopcart_container'> 

      <div className='shopcart_container_left'>

        {selectedProducts && selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
                <div className='shopcart_box'>
              <li key={product.id} className='shopcart_text'>
                <li>{product.product_name}</li>

                {product.product_price}грн --- Count: {product.count}  
             
                <button className='shopcart_quantity' onClick={() => handleIncrease(product.id)}>+</button>
                <button  className='shopcart_quantity' onClick={() => handleDecrease(product.id)}>-</button> 
              </li>
                </div>
            ))}
          </ul>

          
        ) : (
          
            <div className=''><p className='shopcart_text'>Ваше замовлення не містить нічого.</p></div>
        )}
        <button className='shopcart_button' onClick={clearCart}>Очистити все</button>

      </div>

      <div className='shopcart_container_right'></div>
      </div>
      
      <div className='shopcart_container_middle'></div>
      

    </main>
  );
};

export default ShopCart;

