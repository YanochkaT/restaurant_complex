import React from 'react';
import '../css/index.css';

const MenuList = (props) => {
    return(
        <div className='menu_box'>    
           
            <div className='menu_photo'>
                <img src="../src/img/src/img/400_0_1669036584-8046.jpg" alt= "NO"></img>
            </div>


            <p className='text_menu_list'>{props.text1}</p>
            <p className='price'>{props.text2} грн</p>


            <div className='button_menu'>
                <button className='button_text'>Додати</button>
            </div>
        
        </div>
    )
}

export default MenuList;
