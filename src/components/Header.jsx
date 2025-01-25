import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <header>
        <div className="main-container">
            <div className="container">
                <div className="logo"><img src="/logo.svg" alt="" /></div>
                <div className="search-food"> 
                    <input type="text" placeholder='Search Food...' />
                </div>
            </div>

            <div className="filter-section">
                <ul>
                    <li>All</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
            </div>
        </div>
    </header>
    

    </>
  )
}

export default Header