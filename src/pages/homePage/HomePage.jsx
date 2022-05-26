import React from 'react'
import Pizzacard from '../../components/pizzaCard/Pizzacard';
import SliderInfo from '../../components/sliderInfo/SliderInfo';
import css from "./HomePage.module.css";

// const onj = {
//   name: "apf",
//   price: "505",
//   img: "lsjdgjlsdkg"
// }

export default function HomePage(props) {
  return (
    <div className='mt-5'>
        <SliderInfo />
        <div>SLIDER FOR HOT PIZZA</div>

        <h1 className='mt-5 mb-5'>Пицца</h1>

        <div className={'mb-5 ' + css.pizzasWrapper}>
            {
              props.pizzas.map((item, index) => <Pizzacard 
                addToBasket={props.addToBasket}
                key={item.id} 
                {...item}
              />)
            }
        </div>
    </div>
  )
}
