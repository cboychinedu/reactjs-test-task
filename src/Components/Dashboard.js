// Importing the necessary modules 
import React, { Component } from "react"; 
import Searches from "./Searches";
import Clicks from "./Clicks";
import "../css/Dashboard.css"; 
import Sales from "./Sales";

// Creating the dashboard page 
class Dashboard extends Component {
    // Render 
    render() {
        return(
            <React.Fragment> 
            
                <div className="main-div">  

                    <h2 className="main-metrics"> Main metrics </h2>

                    <div className="days-display"> 
                        <div className="time"> 
                            <p> Last hour </p>
                        </div>
                        <div className="time"> 
                            <p> Today </p>
                        </div>
                        <div className="time selection"> 
                            <p> Yesterday </p>
                        </div>
                        <div className="time"> 
                            <p> Last 3 days </p>
                        </div>
                    </div>

                    <div className="stats-div"> 
                        <div className="errors-div"> 
                            <div className="color"> </div>
                            <div className="errors-para-div"> 
                                <p className="errors-para"> Errors: 0,12% </p>
                                <p className="average-para"> Average: 0,11% </p>
                            </div>
                          
                        </div>

                        <div className="zeros-div">
                            <div className="color"> </div>
                            <div className="zeros-para-div"> 
                                <p className="zeros-para"> Zeros: 5,12% </p>
                                <p className="average-para"> Average: 0,11% </p>

                            </div>

                        </div>

                        <div className="timeouts-div"> 
                            <div className="color"> </div>
                            <div className="timeouts-para-div"> 
                                <p className="timeouts-para"> Timeouts: 0,12% </p>
                                <p className="average-para"> Average: 0,11% </p>
                            </div>
                        </div>
                    </div>

                    <div className="loader-div"> 
                        <div className="yellow"> </div>
                        <div className="navy-blue"> </div>
                        <div className="blue"> </div>
                        <div className="ash"> </div>
                    </div>

                    <div className="error-status-div"> 
                        <div className="error-number-div"> 
                            <div className="error-color-yellow"> </div>
                            <p className="error-number"> Error 500: 1256 </p>
                        </div>
                        <div className="error-number-div"> 
                            <div className="error-color-navy-blue"> </div>
                            <p className="error-number"> Error 501: 800 </p>
                        </div>
                        <div className="error-number-div"> 
                            <div className="error-color-blue"> </div>
                            <p className="error-number"> Error 502: 650 </p>
                        </div>
                        <div className="error-number-div"> 
                            <div className="error-color-ash"> </div>
                            <p className="error-number"> Other: 330 </p>
                        </div>
                    </div>

                    {/* Adding the searches component */}
                    <Searches /> 

                    {/* Adding the clicks component */}
                    <Clicks /> 

                    {/* Adding the sales component */}
                    <Sales /> 


                </div>
            </React.Fragment>
        )
    }
}


// Exporting the Dashboard 
export default Dashboard; 