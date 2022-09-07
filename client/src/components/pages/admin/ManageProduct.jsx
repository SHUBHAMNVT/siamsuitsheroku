import React from "react";
import './admin.css'
import { useState } from "react";

export default function ManageProduct(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manageproduct-page">
                <div className="order-top-tabs">
                <strong>Manage Product</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Product </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>MAKING COST</th>
                    <th>MEASUREMENTS</th>
                    <th>STYLING</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><strong>Long Tail</strong></td>
                    <td>Longtail</td>
                    <td>1800.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Vest</strong></td>
                    <td>vest</td>
                    <td>2000.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Long Tail</strong></td>
                    <td>Longtail</td>
                    <td>1800.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Jacket</strong></td>
                    <td>jacket</td>
                    <td>1800.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Long Tail</strong></td>
                    <td>Longtail</td>
                    <td>1800.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Shirt</strong></td>
                    <td>shirt</td>
                    <td>1800.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Jacket</strong></td>
                    <td>jacket</td>
                    <td>1600.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                    <tr>
                    <td><strong>Vest</strong></td>
                    <td>Vest</td>
                    <td>1900.00</td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Manage</strong></td>
                    <td><strong>Edit</strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}