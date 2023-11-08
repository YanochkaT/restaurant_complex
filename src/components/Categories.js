import React from 'react';
import '../css/index.css';

const Categories = (props) => {
    return(
        <div className='category_button_container'>
        <button className='category_box'>
            <div class="image_category">

            </div>

                <div class="text_category">
             <p class="pizza">{props.ctext1}</p>
                </div>    
        </button>
        </div>
    )
}

export default Categories;
