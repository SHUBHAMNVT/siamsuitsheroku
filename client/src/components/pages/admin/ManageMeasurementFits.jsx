import React from "react";
import './admin.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageMeasurementFits(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Measurement Fits</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Measurement Fits</button>
                </div>

                <div className="searchstyle searchstyle-two">
                  <div className="searchinput-inner">
                    <p>Select Retailer</p>
                    <input type="text" className='searchinput' placeholder="Select Retailer "/>
                  </div>

                  <div className="searchinput-inner">
                    <p>Select Product</p>
                    <input type="search" className='searchinput' placeholder="Select Product Type "/>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>

                <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>RETAILER</th>
                    <th>PRODUCT</th>
                    <th>SIZE</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>02</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>03</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>04</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>05</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>06</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>07</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>08</td>
                    <td>Johnson Tailors</td>
                    <td>Shirt</td>
                    <td>In shape, Loose, Medium</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}