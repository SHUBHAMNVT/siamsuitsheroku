import React from "react";
import './factory.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WorkPaymentHistory(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Worker Payment History</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Worker Name</p>
                    <select name="workername" id="workername" className="searchinput">
                        <option value="all">Select Worker Name</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>
                  <div className="searchinput-inner">
                    <p>Start Date</p>
                    <input type="date" className="searchinput"/>
                  </div>
                  <div className="searchinput-inner">
                    <p>End Date</p>
                    <input type="date" className="searchinput"/>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>INVOCE SUMMARY NO</th>
                    <th>PAID AMOUNT</th>
                    <th>PAID DATE</th>
                    <th>PDF</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>0213647</td>
                    <td>$136</td>
                    <td>21-12-2021</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}