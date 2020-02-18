import React from 'react';
import './style.css';
import axios from 'axios';

const CountryList = ({ countryList }) => {

    const getDetails = (e) => {
        const buttonValue = e.target;
        console.log(buttonValue.textContent);
        axios.get(`https://restcountries.eu/rest/v2/name/${buttonValue.textContent}?fullText=true`)
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <div>
            <ul className = "countryList">
                {countryList.map(country => (
                <li key={country.flag}><button onClick={getDetails}>{country.name}</button></li>))}
            </ul>
        </div>
    )
}

export default CountryList;