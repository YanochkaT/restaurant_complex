import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MenuList from '../components/MenuList';
import Categories from '../components/Categories';
import '../css/index.css';

const Main = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Define the backend API URL
    const backendApiUrl = 'http://localhost:3001/get'; // Replace with your actual backend URL
alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl)
      .then((response) => {
        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  }, []); // An empty dependency array triggers the effect on component mount

  return (
    <main className='content'>
      <p class="title">Головна</p>
      <div class="main_baner"></div>
      <p class="title">Категорії</p>
      <div class="categories_container">
      <Categories ctext1 = "Піца"/>
            <Categories ctext1 = "Бургери"/>
            <Categories ctext1 = "Салати"/>
            <Categories ctext1 = "Супи"/>
            <Categories ctext1 = "Суші"/>
            <Categories ctext1 = "Десерти"/>
            <Categories ctext1 = "Напої"/>
        {/* Add more categories */}
      </div>
      <div className='menu_container'>
        {menuData.map((menuItem) => (
          <MenuList key={menuItem.id} text1={menuItem.product_name} text2={menuItem.product_price} />
        ))}
      </div>
    </main>
  );
};

export default Main;
