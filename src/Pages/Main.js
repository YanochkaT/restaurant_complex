// Main.js
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MenuList from '../components/MenuList';
import Categories from '../components/Categories';
import '../css/index.css';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';


const Main = () => {
  const [menuData, setMenuData] = useState([]);
  const { addProduct } = useCart();
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
    const backendApiUrl1 = 'http://localhost:3001/getAllRows';
    Axios.get(backendApiUrl1)
      .then((response) => {
        // Initialize product counts for each product to 0
        const counts = {};
        response.data.forEach((product) => {
          counts[product.id] = 0;
        });
        setProductCounts(counts);
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  const filterData = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith1'; // Replace with your actual backend URL
//alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
 //       alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };

  const filterData1 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith2'; // Replace with your actual backend URL
//    alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };

/*------------------*/

  const filterData2 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith3'; // Replace with your actual backend URL
//    alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };


  const filterData3 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith4'; // Replace with your actual backend URL
//      alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };


  const filterData4 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith5'; // Replace with your actual backend URL
//      alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };


  
  const filterData5 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith6'; // Replace with your actual backend URL
//      alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };

  
  const filterData6 = async () => {
    const backendApiUrl2 = 'http://localhost:3001/getRowsWith7'; // Replace with your actual backend URL
//      alert("qwerty");
    // Make a GET request to the backend API
    Axios.get(backendApiUrl2)
      .then((response) => {
//        alert("qwerty111");
        setMenuData(response.data);
      })
      .catch((error) => {
        alert(error);
        console.error('Error fetching data from the backend:', error);
      });
  };

  /*----------------------------------*/

  const handleIncrement = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: prevCounts[productId] + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max(0, prevCounts[productId] - 1),
    }));
  };

  const handleOrderClick = (product) => {
    // Include count when adding the product to the cart
    addProduct({ ...product, count: productCounts[product.id] });
    alert(`Product Name: ${product.product_name}, Price: ${product.product_price}, Count: ${productCounts[product.id]}`);
  };

  return (
        <main className='content'>


          <p class="title">Головна</p>
            <Slider />
          <p class="title">Категорії</p>
          <div class="categories_container">
           <button className='category_box' onClick = {filterData}><Categories ctext1 = "Піца"/></button> 
            <button className='category_box' onClick = {filterData1}><Categories ctext1 = "Бургери"/></button>

            <button className='category_box' onClick = {filterData2}><Categories ctext1 = "Салати"/></button>
            <button className='category_box' onClick = {filterData3}><Categories ctext1 = "Супи"/></button>
            <button className='category_box' onClick = {filterData4}><Categories ctext1 = "Суші"/></button>
            <button className='category_box' onClick = {filterData5}><Categories ctext1 = "Десерти"/></button>
            <button className='category_box' onClick = {filterData6}><Categories ctext1 = "Напої"/></button>

          </div>

      <div className='menu_container'>
        {menuData.map((menuItem) => (
          <div key={menuItem.id}>
            <MenuList imgsrc = {menuItem.product_image} text1={menuItem.product_name} text2={menuItem.product_price} text3={menuItem.product_description} text4={menuItem.product_weight} />

            <div className='menu_quantity_container'>
            <div className='menu_item_quantity'>
              <button className='menu_item_minus' onClick={() => handleDecrement(menuItem.id)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M18.2022 11.7396H7.58864C7.41271 11.7396 7.24399 11.8095 7.11958 11.9339C6.99518 12.0583 6.92529 12.227 6.92529 12.403C6.92529 12.5789 6.99518 12.7476 7.11958 12.872C7.24399 12.9964 7.41271 13.0663 7.58864 13.0663H18.2022C18.3782 13.0663 18.5469 12.9964 18.6713 12.872C18.7957 12.7476 18.8656 12.5789 18.8656 12.403C18.8656 12.227 18.7957 12.0583 18.6713 11.9339C18.5469 11.8095 18.3782 11.7396 18.2022 11.7396Z" fill="#C8161D"/>
                    <rect x="1.4552" y="0.962708" width="22.8806" height="22.8806" stroke="#D9D9D9"/>
                    </svg></button>
              <span>{productCounts[menuItem.id]}</span>
              <button className='menu_item_plus' onClick={() => handleIncrement(menuItem.id)}>   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22 22" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0895 5.52612C11.2627 5.52612 11.4288 5.59492 11.5512 5.71738C11.6737 5.83984 11.7425 6.00593 11.7425 6.17911V11.403C11.7425 11.5762 11.6737 11.7423 11.5512 11.8647C11.4288 11.9872 11.2627 12.056 11.0895 12.056H5.86563C5.69245 12.056 5.52636 11.9872 5.4039 11.8647C5.28144 11.7423 5.21265 11.5762 5.21265 11.403C5.21265 11.2298 5.28144 11.0637 5.4039 10.9413C5.52636 10.8188 5.69245 10.75 5.86563 10.75H10.4365V6.17911C10.4365 6.00593 10.5053 5.83984 10.6278 5.71738C10.7502 5.59492 10.9163 5.52612 11.0895 5.52612Z" fill="#C8161D"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4365 11.403C10.4365 11.2298 10.5053 11.0637 10.6278 10.9413C10.7502 10.8188 10.9163 10.75 11.0895 10.75H16.3134C16.4866 10.75 16.6527 10.8188 16.7751 10.9413C16.8976 11.0637 16.9664 11.2298 16.9664 11.403C16.9664 11.5762 16.8976 11.7423 16.7751 11.8647C16.6527 11.9872 16.4866 12.056 16.3134 12.056H11.7425V16.6269C11.7425 16.8 11.6737 16.9661 11.5512 17.0886C11.4288 17.2111 11.2627 17.2798 11.0895 17.2798C10.9163 17.2798 10.7502 17.2111 10.6278 17.0886C10.5053 16.9661 10.4365 16.8 10.4365 16.6269V11.403Z" fill="#C8161D"/>
                    <rect x="1.14172" y="1.4552" width="19.8955" height="19.8955" stroke="#D9D9D9"/>
                    </svg></button>
              </div>
            <button className='button_menu_add' onClick={() => handleOrderClick(menuItem)}>Додати</button>
            </div>

          </div>
        ))}
        <Link to="/shopcart">
          <button font-weight = 'bold'> -- ОФОРМИТИ ЗАМОВЛЕННЯ -- </button>
        </Link>
      </div>
    </main>
  );
};
export default Main;




/*
<main className='content'>
<p class="title">Головна</p>
<Slider />
<p class="title">Категорії</p>
<div class="categories_container">
<Categories ctext1 = "Піца"/>
      <Categories ctext1 = "Бургери"/>
      <Categories ctext1 = "Салати"/>
      <Categories ctext1 = "Супи"/>
      <Categories ctext1 = "Суші"/>
      <Categories ctext1 = "Десерти"/>
      <Categories ctext1 = "Напої"/>
</div>

<div className='menu_container'>
  {menuData.map((menuItem) => (
    <MenuList key={menuItem.id} text1={menuItem.product_name} text2={menuItem.product_price} />
  ))}
</div>
</main>
*/