import React from 'react'
import './FoodSection.css'

const FoodSection = ({storeData, BASE_URL}) => {
    console.log(storeData);
    

  return (
    <>
    <main>
        <div className="food-section">
            {/* FOOD BOX CONTAINER */}
            {storeData ?.map((food)=>
            <section key={food.name}>
                <div className='food-box' >
                    <img src={BASE_URL + food.image} alt="IMG" />
                    <div className='food-content'>
                        <h4>{food.name}</h4>
                        <p>{food.text}</p>
                        <button>${food.price.toFixed(2)}</button>
                    </div>
                </div>
            </section>
         )}       

            {/* FOOD BOX CONTAINER */}

        </div>

    </main>
    </>
  )
}

export default FoodSection