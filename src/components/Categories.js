import React from 'react';
import '../css/index.css';

const Categories = (props) => {
    return(
        <div className='category_button_container'>
    
       
            <div class="image_category">

            </div>

                <div class="text_category">
             <p class="pizza">{props.ctext1}</p>
                </div>   
             
     
        </div>
    )
}

export default Categories;
