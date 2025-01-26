import React, { useEffect, useState } from 'react'
import './Header.css'
import FoodSection from './FoodSection';

let BASE_URL= "http://localhost:9000";
const Header = () => {
    let[storeData, setStoreData]= useState(null);
    let[loading, setLoading]= useState(false);
    let[error, setError]= useState(null);
    let[search, setSearch]= useState(null);

    useEffect(()=>{
        let foodData= async ()=>{
            setLoading(true);
            try {
                let respones= await fetch(BASE_URL);
                let jsonData= await respones.json();
                setStoreData(jsonData);
                setSearch(jsonData);
                setLoading(false);

            } catch (error) {
                setError("Unableto fetch data");
            }
        }
        foodData();

    },[]);
    if(loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    
    // SEARCH FILTER
    let searchFilter= (event)=>{
        let searchData= event.target.value;
        if(searchData == ''){
            setSearch(null);
        }

        let searchFilter= storeData?.filter((food)=>food.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearch(searchFilter);
        
    }

  return (
    <>
    <header>
        <div className="main-container">
            <div className="container">
                <div className="logo"><img src="/logo.svg" alt="" /></div>
                <div className="search-food"> 
                    <input type="text" placeholder='Search Food...' onChange={searchFilter} />
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
    
<FoodSection storeData={search} BASE_URL={BASE_URL}/>
    </>
  )
}

export default Header