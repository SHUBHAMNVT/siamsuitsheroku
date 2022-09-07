import React from "react";
import './admin.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar"

export default function ManageMeasurements(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Measurements</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Measurements </button>
                </div>

                <div className="searchstyle">
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
                    <th>MEASUREMENT NAME</th>
                    <th>THAI MEASUREMENT NAME</th>
                    <th>PRODUCT NAME</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>02</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>03</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>04</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>05</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>06</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>07</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>08</td>
                    <td>Jacket</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>jacket</strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}