import React from "react";
import './admin.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import Piping1 from "./../../../images/pipe-image.png"
import Piping2 from "./../../../images/pipe-image1.png"

export default function ManagePipings(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="manage-button-head">
                    <div className="manage-button-head-inner">
                        <strong>Manage Pipings</strong>
                    </div>
                    <div className="manage-button-head-inner">
                        <button type="button" className="custom-btn leftbutton"> <i class="fa-solid fa-plus"></i> Add Bulk Lining & Category</button>
                        <button type="button" className="custom-btn leftbutton"> <i class="fa-solid fa-plus"></i> Add Bulk Lining</button>
                        <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add Lining</button>
                    </div>              
                
                </div>

                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Manage Pipings</p>
                    <input type="text" className='searchinput' placeholder="All "/>
                  </div>

                  <div className="searchinput-inner">
                    <p>Supplier</p>
                    <select name="supply" id="supply" class="searchinput">
                        <option value="all">Select Supplier ID</option>
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
                    <th>ID</th>
                    <th>PIPING CODE</th>
                    <th>SUPPLIER NAME</th>
                    <th>PIPING IMAGE</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping1} className="logo-piping"/></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>02</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping2} className="logo-piping"/></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>03</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping1} className="logo-piping" /></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>04</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping2} className="logo-piping" /></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>05</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping1} className="logo-piping" /></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>06</td>
                    <td>PP-03</td>
                    <td>Supplier</td>
                    <td><img src={Piping2} className="logo-piping" /></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}