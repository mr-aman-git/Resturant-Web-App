import React, { useEffect, useState } from 'react'
import './Header.css'
import FoodSection from './FoodSection';

let BASE_URL= "http://localhost:9000";
const Header = () => {
    let[storeData, setStoreData]= useState(null);
    let[loading, setLoading]= useState(false);
    let[error, setError]= useState(null);
    let[search, setSearch]= useState(null);
    let[selectList, setSelectList]= useState('all');

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
    
    // SEARCH FILTER
    let searchFilter= (event)=>{
        let searchData= event.target.value;
        if(searchData == ''){
            setSearch(null);
        }

        let searchFoodFilters= storeData?.filter((food)=>food.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setSearch(searchFoodFilters); 
    }

    // SELECT LIST FILTER
    function selectFilter(type) {
        if (type == 'all') {
            setSearch(storeData);
            setSelectList('all');
            return;
        }
        let selectFoodFilters = storeData?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase())
        );
        setSearch(selectFoodFilters);
        setSelectList(type);
    }

    if(loading) return <div>API SERVER NOT HOST </div>
    if (error) return <div>{error}</div>

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
                    <li onClick={()=>selectFilter('all')}>All</li>
                    <li onClick={()=>selectFilter('Breakfast')}>Breakfast</li>
                    <li onClick={()=>selectFilter('Lunch')}>Lunch</li>
                    <li onClick={()=>selectFilter('Dinner')}>Dinner</li>
                </ul>
            </div>
        </div>
    </header>
    
<FoodSection storeData={search} BASE_URL={BASE_URL}/>
    </>
  )
}

export default Header