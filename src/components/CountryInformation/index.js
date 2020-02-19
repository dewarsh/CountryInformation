import React, { Component } from "react";
import CountryList from '../CountryList';
import Overwrite from '../Overwrite'
import axios from 'axios';
import "./style.css";

class CountryInformation extends Component {

    state = {
        countryList: [],
        imageUrl: "",
        value: ""
    }

    onCountryInputChange = e => {
        this.setState({
            value: e.target.value
        })
        axios.get(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
        .then(res => {
            console.log(res);
            this.setState({countryList: res.data});
        });
        this.setState({countryList:[]})
    }

    getDetails = (e) => {
        const buttonValue = e.target;
        console.log(buttonValue.textContent);
        axios.get(`https://restcountries.eu/rest/v2/name/${buttonValue.textContent}?fullText=true`)
        .then(res => {
            console.log(res.data);
            this.setState({imageUrl: res.data[0].flag})
        })
    }

    overwrite = () => {
        this.setState({imageUrl:""})
        this.setState({value:""})
        this.setState({countryList:[]})
    }

    render(){
        return (
            <div className="countryInformation">
            <h1>Country Information</h1>
            <p>Please search for the country name</p>
            <input type="text" value={this.state.value} onChange={this.onCountryInputChange} pattern="[A-Z][a-z]" title="Please enter only letters"/>
            <p>Click any country button to view the flag</p>   
            <img alt="Flag" src={this.state.imageUrl} className="flag"/> <br/>
            <Overwrite onAction={this.overwrite}/> <hr/>
            <CountryList countryList={this.state.countryList} onAction={this.getDetails}/>
            </div>
        );
    }
}

export default CountryInformation;