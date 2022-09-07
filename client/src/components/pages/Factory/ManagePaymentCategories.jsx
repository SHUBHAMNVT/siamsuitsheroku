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
                <strong>Manage Extra Payment Categories</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add Extra Payment Category </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>CATEGORY NAME</th>
                    <th>PRODUCT</th>
                    <th>POSITION</th>
                    <th>STYLING</th>
                    <th>COST</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                    <tr>
                    <td>Open Sleeve Seam</td>
                    <td>Jacket</td>
                    <td>Hand Stitching</td>
                    <td>Pick Stitching</td>
                    <td>$50</td>
                    <td><strong><Link to="#" className="action">Edit</Link> | <Link to="#" className="action">Delete</Link></strong></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}