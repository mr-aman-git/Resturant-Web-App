import React, { useEffect, useState } from 'react'
import './Header.css'
import FoodSection from './FoodSection';

let BASE_URL= "http://localhost:9000/";
const Header = () => {
    let[storeData, setStoreData]= useState(null);
    let[loading, setLoading]= useState(false);
    let[error, setError]= useState(null);

    useEffect(()=>{
        let foodData= async ()=>{
            setLoading(true);
            try {
                let respones= await fetch(BASE_URL);
                let jsonData= await respones.json();
                setStoreData(jsonData);
                setLoading(false);

            } catch (error) {
                setError("Unableto fetch data");
            }
        }
        foodData();

    },[]);

    if(loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    console.log(storeData);
    
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
    
<FoodSection />
    </>
  )
}

export default Header