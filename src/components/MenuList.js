import React from 'react';
import '../css/index.css';

// import image1 from '../images/restaurant_food/1_4гавайська-445x445.jpg';
//       <img src= {image1} alt="N"/>


const MenuList = (props) => {
    return(
        <div className='menu_box'>    
           
            <div className='menu_photo'></div>


            <p className='text_menu_name'>{props.text1}</p>



            <div className='text_menu_content'>
                <div className='text_menu_content_left'>
            <p className='item_price'>{props.text2} грн</p>

            <div className='menu_content_weight_container'>
            <p className='text_menu_weight'>{props.text4} г</p>
            </div>
                </div>

            <div className='text_menu_content_right'>
                <p>{props.text3} </p>
            </div>
            
            </div>

        
        </div>
    )
}

export default MenuList;
