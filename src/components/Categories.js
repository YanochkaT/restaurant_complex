import React from 'react';
import '../css/index.css';

const Categories = (props) => {
    return(
        <div>
            <div class="categor_conteiner">
            <div class="photo_cont">
                
            </div>
            <div class="cat_text">
                <p class="pizza">{props.ctext1}</p>
            </div>
        </div>
        </div>
    )
}

export default Categories;