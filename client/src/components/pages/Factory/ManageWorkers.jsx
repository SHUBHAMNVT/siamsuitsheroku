import React from "react";
import './factory.css'
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageWorkers(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Workers</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Worker </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>THAI NAME</th>
                    <th>POSITION</th>
                    <th>PHOTO</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Aon Pant</td>
                    <td>อ้น</td>
                    <td>Pants Sewing</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr>
                    <tr>
                    <td>Chart Sleeve</td>
                    <td>เชด</td>
                    <td>Jacket Sleeve</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr> 
                    <tr>
                    <td>Jae Loa</td>
                    <td>เจ๊ล้อ</td>
                    <td>Coat Body, coat neck, Jacket body, Jacket Neck, Long Tail Body, SAFARI BODY, SAFARI NECK, Tuxedo jacket, Tuxedo Neck, Vest Neck, Vest Sewing</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr> 
                    <tr>
                    <td>Aon Pant</td>
                    <td>อ้น</td>
                    <td>Pants Sewing</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr>
                    <tr>
                    <td>Chart Sleeve</td>
                    <td>เชด</td>
                    <td>Jacket Sleeve</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr> 
                    <tr>
                    <td>Jae Loa</td>
                    <td>เจ๊ล้อ</td>
                    <td>Coat Body, coat neck, Jacket body, Jacket Neck, Long Tail Body, SAFARI BODY, SAFARI NECK, Tuxedo jacket, Tuxedo Neck, Vest Neck, Vest Sewing</td>
                    <td>IMAGE</td>
                    <td>
                      <strong>
                        <Link to="#" className="action">Profile</Link> | <Link to="#" className="action">Edit</Link> | 
                        <Link to="#" className="action">Delete</Link> | <Link to="#" className="action">Print Barcode</Link>
                      </strong>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}