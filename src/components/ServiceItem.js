import React from 'react';
import '../css/index.css';

const ServiceItem = (props) => {
    return(

            <div className='service_item'>

                <div className='service_item_left'>
                <div className='service_item_name'>
            <h2 className='text_menu_name'  font-weight = 'bold' >{props.text1}</h2>
                </div>

            <p className='item_price'>{props.text2} </p>
            <p className='item_price'>{props.text3} </p>
                </div>

                <div className='service_item_right'>
                </div>


            </div>

    )
}

export default ServiceItem;
