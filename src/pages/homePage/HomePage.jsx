import React from 'react'
import { useSelector } from 'react-redux';
import Pizzacard from '../../components/pizzaCard/Pizzacard';
import SliderInfo from '../../components/sliderInfo/SliderInfo';
import css from "./HomePage.module.css";

// const onj = {
//   name: "apf",
//   price: "505",
//   img: "lsjdgjlsdkg"
// }

export default function HomePage() {
  const pizzas = useSelector( (state) => state.pizzas.data );

  return (
    <div className='mt-5'>
        <SliderInfo />
        <div>SLIDER FOR HOT PIZZA</div>

        <h1 className='mt-5 mb-5'>Пицца</h1>

        <div className={'mb-5 ' + css.pizzasWrapper}>
            {
              pizzas.length 
                ? pizzas.map((item, index) => <Pizzacard
                  key={item.id} 
                  {...item}
                />)
                : <h2 className='water-text'>Пока нет пицц!</h2>
            }
        </div>
    </div>
  )
}
