import React from 'react';
import './style.css';

const CountryList = ({ countryList,  onAction}) => {

    return (
        <div>
            <ul className = "countryList">
                {countryList.map(country => (
                <li key={country.flag}><button onClick={onAction}>{country.name}</button></li>))}
            </ul>
        </div>
    )
}

export default CountryList;