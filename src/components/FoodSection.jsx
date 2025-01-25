import React from 'react'
import './FoodSection.css'

const FoodSection = () => {
  return (
    <>
    <main>
        <div className="food-section">
            {/* FOOD BOX CONTAINER */}
            <div className="food-box">
                <img src="https://hinzcooking.com/wp-content/uploads/2023/03/karachi-biryani.jpg" alt="" />
                <div className="food-content">
                <h4>Biryani</h4>
                <p>Biryani is a mixed rice dish popular in South Asia, made with rice, meat. </p>
                <p><span>$80.00</span></p>
                </div>
            </div>

            <div className="food-box">
                <img src="https://hinzcooking.com/wp-content/uploads/2023/03/karachi-biryani.jpg" alt="" />
                <div className="food-content">
                <h4>Biryani</h4>
                <p>Biryani is a mixed rice dish popular in South Asia, made with rice, meat. </p>
                <p><span>$80.00</span></p>
                </div>
            </div>

            <div className="food-box">
                <img src="https://hinzcooking.com/wp-content/uploads/2023/03/karachi-biryani.jpg" alt="" />
                <div className="food-content">
                <h4>Biryani</h4>
                <p>Biryani is a mixed rice dish popular in South Asia, made with rice, meat. </p>
                <p><span>$80.00</span></p>
                </div>
            </div>

            {/* FOOD BOX CONTAINER */}

        </div>

    </main>
    </>
  )
}

export default FoodSection