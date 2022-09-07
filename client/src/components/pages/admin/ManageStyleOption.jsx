import React from "react";
import './admin.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageStylingOption(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="manage-button-head">
                  <div className="manage-button-head-inner">
                    <strong>Manage Style Options</strong>
                  </div>
                  <div className="manage-button-head-inner">
                    <button type="button" className="custom-btn leftbutton"> <i class="fa-solid fa-plus"></i> Create Group Style </button>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Style Option </button>
                  </div>
                </div>
                <div className="searchstyle">
                  <p>Select Product</p>
                  <input type="search" className='searchinput' placeholder="Select Product Type "/>
                  <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODUCT</th>
                    <th>OPTION CHOICE NAME</th>
                    <th>THAI OPTION CHOICE NAME</th>
                    <th>ADDITIONAL</th>
                    <th>TYPE</th>
                    <th>EDIT STYLING</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>01</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>02</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>03</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>04</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>05</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>06</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>07</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>08</td>
                    <td>Jacket</td>
                    <td>jacket Font</td>
                    <td>เสื้อแจ็กเกต</td>
                    <td><strong>No</strong></td>
                    <td><strong>Normal</strong></td>
                    <td><strong><Link to="#" className="action">Edit Styling</Link></strong></td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}