// Importing the necessary modules 
import React, { Component } from "react"; 
import "../css/Dashboard.css"; 
import ClicksImage from "../Images/clicks.png"; 
import arrowImage from "../Images/arrow.png"; 
import data from "./data"; 

// Creating the search component 
class Clicks extends Component {
    // Render 
    render() {
        console.log(data["data"]);
        return (
            <React.Fragment> 
                <div className="clicks-div"> 
                    <div className="image-div"> 
                        <img src={ClicksImage} alt="search-image" className="searchImage" /> 
                        <img src={arrowImage} alt="arrow-image" className="arrowImage" /> 

                    </div>

                    <div className="clicks-para-div"> 
                        <p className="para red"> Clicks <span className="percent-red"> -13% </span></p> <br /> 
                        <p className="para"> {data["data"][0]["clicks_current_yesterday"]} <span className="yesterday"> Yesterday </span> </p> <br /> 
                        <p className="last-friday"> {data["data"][0]["clicks_current_last_3days"]} <span className="last-friday"> Last 3 days </span></p>
                    
                    </div>

                    <div className="mobile-traffic-div">
                        <p className="para red"> CTR: 0,004% </p> <br /> 

                        <p className="para-light"> Conversion from searches to clicks on all devices. </p> <br /> 
                        <p className="para"> Help: <a> CTR </a>, <a> Cliks </a> </p>

                    </div> 
                
                </div>

                <div className="divider"> </div>
                
            
            
            </React.Fragment>
        )
    }
}

// Exporting the search component 
export default Clicks; 