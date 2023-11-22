import React from 'react';
import '../css/index.css'
import ServiceItem from '../components/ServiceItem';


const Services = () => {
    return(
    <main className='content'> 
        <p class="title">Святкові Послуги</p>

    <div className='service_container'>
        <ServiceItem text1 = "День народження" text2 = "Створення незабутньої атмосфери для особливого дня з розкішними стравами та розвагами, що включають в себе живу музику та персоналізовані підходи."
        text3 = " Столи оформлені у веселій тематиці чи в стилі за бажанням святкуючого. Спеціально складене меню із улюбленими стравами та десертами, а також можливість підібрати особливі напої, створюють гастрономічне свято. Персонал ресторану відзначає увагу до деталей та надає персоналізований сервіс. Розваги або музика, які відповідають атмосфері та інтересам гостей, допомагають створити неповторний досвід для відзначаючих. Цей день запам'ятовується як важливе та радісне свято, яке було проведене з уважністю до деталей та комфорту гостей." />
        <ServiceItem text1 = "Весілля" text2 = "Елегантне та романтичне середовище для унікального події, яке органічно поєднує вишукані страви, вишукане обслуговування та вражаючий декор."
        text3 = "Помітні деталі включають елегантне прикрашення, розкішне оформлення столів з квітами та свічками, стильне освітлення, яке створює урочистий настрій. Спеціально підібране меню з вишуканими стравами та напоями відображає гастрономічні перлини закладу. Професійний персонал ресторану забезпечує бездоганне обслуговування, а музика чи живий виконавець створює атмосферу свята та романтики. Все це разом створює неповторний досвід для наречених та гостей, запам'ятовуючийся надовго. "/>
        <ServiceItem text1 = "Майстер-клас по готуванню піци для дітей" text2 = "Цікавий та освітній формат, де діти вчаться готувати смачну піцу від кращих шеф-кухарів, отримуючи веселі враження та корисні навички."
        text3 = "Шеф-кухар чи інструктор надає крок за кроком інструкції з розгорнутим поясненням процесу готування. Діти можуть брати участь у розкладанні тіста, виборі інгредієнтів, покладанні начинки та, звичайно ж, випіканні піци. Все це відбувається у веселій та дружній атмосфері, де кожна дитина має можливість активно брати участь у процесі готування та відкривати для себе світ кулінарії."/>
    </div>
    </main>
    )
}

export default Services;


/*
      
    <div className='service_container'>
        <ServiceItem text1 = "День народження" text2 = "200 грн" />
        <ServiceItem text1 = "Весілля" text2 = "290 грн"/>
        <ServiceItem text1 = "Шеф класи для дітей" text2 = "126 грн"/>
        <ServiceItem text1 = "Інше" text2 = "126 грн"/>
    </div>
*/