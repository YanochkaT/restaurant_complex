import React from 'react';
import '../css/index.css'
import AboutItem from '../components/AboutItem';

const About = () => {
    return(
    <main className='content'> 
        <p class="title">Про Нас</p>

    <div className='about_container'>
        <AboutItem text1 = "День народження" text2 = "200 грн" />
        <AboutItem text1 = "Весілля" text2 = "290 грн"/>
        <AboutItem text1 = "Шеф класи для дітей" text2 = "126 грн"/>
    </div>

    </main>
    )
}

export default About;

