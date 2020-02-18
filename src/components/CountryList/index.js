import React from 'react';
import './style.css';
import axios from 'axios';

const CountryList = ({ countryList }) => {
    
    const getDetails = (e) => {
        console.log(e.target);
        axios.get(`https://restcountries.eu/rest/v2/name/${e.target.text}?fullText=true`)
    }

    return (
        <div>
            <ul className = "countryList">
                {countryList.map(country => (
                <button key={country.flag} onClick={getDetails}>{country.name}</button>))}
            </ul>
        </div>
    )
}

export default CountryList;