import React from "react";
import "./index.css";

export default function Education(){
    return(
        <div className="education" id="edu">
        <h1 className="heading">Education</h1>
        <table border="5px" className="Table">
            <tr>
                <th>Qualification Name</th>
                <th>Percentage/CGPA</th>
                <th>Passing Year</th>
            </tr>
            <tr>
                <td>10th</td>
                <td>76.67%</td>
                <td>2019</td>
            </tr>
            <tr>
            <td>12th</td>
            <td>78.8%</td>
            <td>2021</td>
            </tr>
            <tr>
            <td>BCA</td>
            <td>9.56</td>
            <td>2024</td>
            </tr>
        </table>
        <div className="certif">
            <div >
                <img  src="./certificates/html.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/css.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/javascript.png" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/php.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/Web Development.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/spl_2.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/sql_1.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/scrum.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/c.jpg" className="imgs"></img>
            </div>
            <div >
            <img  src="./certificates/c++.png" className="imgs"></img>
            </div>
           
        </div>
        </div>
    )
}