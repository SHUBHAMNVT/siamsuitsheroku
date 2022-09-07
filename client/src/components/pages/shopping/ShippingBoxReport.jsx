import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './shipping.css';

export default function ShippingBoxReport(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table managemeasurement-page">
                <div className="order-top-tabs">
                <strong>Shipping Box Report</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Customer Id</p>
                    <input type="text" className="searchinput" placeholder="123456"/>
                  </div>
                  <div className="searchinput-inner">
                    <p>Order Number</p>
                    <input type="text" className="searchinput" placeholder="123456"/>
                  </div>
                  <div className="searchinput-inner">
                    <p>Retailer</p>
                    <select name="workername" id="workername" className="searchinput">
                        <option value="all">Select Retailer</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>SR. NO</th>
                    <th>DATE</th>
                    <th>BOX TRACKING NO</th>
                    <th>RETAILER</th>
                    <th>PRODUCT</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>02</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>03</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>04</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>05</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>06</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>07</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                    <tr>
                    <td>08</td>
                    <td>2022-05-15</td>
                    <td>FEDEX1234</td>
                    <td>Sanjana</td>
                    <td>1 Pants,1 Vest,1 Shirt</td>
                    <td><Link to="#" className="action"><i class="fa-solid fa-download"></i> Download</Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}