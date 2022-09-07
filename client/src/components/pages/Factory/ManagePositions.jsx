import React from "react";
import './factory.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManagePositions(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Positions</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Positions </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>POSITION NAME</th>
                    <th>THAI POSITION NAME</th>
                    <th>DESCRIPTION</th>
                    <th>PHOTO</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr> 
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr> 
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr> 
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Jacket body</td>
                    <td>ตัวเสื้อนอก</td>
                    <td>Jacket Sleeve Sb</td>
                    <td>550</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}