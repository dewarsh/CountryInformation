import React, { Component } from "react";
import CountryList from '../CountryList';
import axios from 'axios';
import "./style.css";

class CountryInformation extends Component {

    state = {
        countryList: [],
        countryFlag:"",

    }

    onCountryInputChange = e => {
        axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
        .then(res => {
            console.log(res);
            this.setState({countryList: res.data});
        });
        this.setState({countryList:[]})
        console.log(e);
        console.log(e.target.value);
    }

    render(){
        console.log(this.state.countryList.length);
        return (
            <div className="countryInformation">
                Country Information <br/>
                Please search for the country name<br/> <br/>

            <input type="text" onChange={this.onCountryInputChange}/>   
            <CountryList countryList={this.state.countryList} />
            </div>
        );
    }
}

export default CountryInformation;