// Importing the necessary modules 
import React, { Component } from "react"; 
import "../css/Dashboard.css"; 
import searchesImage from "../Images/searches.png"; 
import arrowImage from "../Images/arrow.png"; 

// Creating the search component 
class Searches extends Component {
    // Render 
    render() {
        return (
            <React.Fragment> 
                <div className="searches-div"> 
                    <div className="image-div"> 
                        <img src={searchesImage} alt="search-image" className="searchImage" /> 
                        <img src={arrowImage} alt="arrow-image" className="arrowImage" /> 

                    </div>

                    <div className="searches-para-div"> 
                        <p className="para"> Searches <span className="percent-green"> +5% </span></p> <br /> 
                        <p className="para"> 29 380 <span className="yesterday"> Yesterday </span> </p> <br /> 
                        <p className="last-friday"> 27 985 <span className="last-friday"> Last friday </span></p>
                    
                    </div>

                    <div className="mobile-traffic-div">
                        <p className="para"> Mobile traffic: 100% </p> <br /> 
                        <p className="para"> Web traffic: 100% </p> <br /> 

                        <p className="para-light"> You get 100% traffic on mobile and desktop device. </p> <br /> 
                        <p className="para"> Help: <a> Searches</a>, <a> Pessimisation </a> </p>

                    </div> 
                
                </div>

                <div className="divider"> </div>
                
            
            
            </React.Fragment>
        )
    }
}

// Exporting the search component 
export default Searches; 