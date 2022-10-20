// Importing the necessary modules 
import React, { Component } from "react"; 
import "../css/Dashboard.css"; 
import data from "./data";
import SalesImage from "../Images/sales.png"; 

// Creating the search component 
class Sales extends Component {
    // Render 
    render() {
        return (
            <React.Fragment> 
                <div className="sales-div"> 
                    <div className="image-div"> 
                        <img src={SalesImage} alt="search-image" className="searchImage" /> 

                    </div>

                    <div className="clicks-para-div"> 
                        <p className="para"> Sales </p> <br /> 
                        <p className="para"> 24 <span className="yesterday"> Yesterday </span> </p> <br /> 
                        <p className="last-friday"> 24 <span className="last-friday"> Last friday </span></p>
                    
                    </div>

                    <div className="mobile-traffic-div">
                        <p className="para"> STR: 6.2% </p> <br /> 
                        <p className="para"> Avg. Check: 8903 </p><br /> 
                        <p className="para-light"> Conversion from cliks to bookings on all devices. </p> <br /> 
                        <p className="para"> Help: <a href="#"> STR </a>, <a href="#"> Bookings </a> </p>
            

                    </div> 
                
                </div>
                
            
            
            </React.Fragment>
        )
    }
}

// Exporting the search component 
export default Sales; 