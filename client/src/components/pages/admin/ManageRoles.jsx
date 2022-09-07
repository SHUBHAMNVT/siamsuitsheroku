import React from "react";
import './admin.css'
import { useState } from "react";
import Sidebar from "../../sidebar/Sidebar"

export default function ManageRoles(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <>
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Roles</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Member </button>
                </div>
                <table className="table">
                 <thead>
                    <tr>
                    <th>ROLE NAME </th>
                    <th>MODULES </th>
                    <th>OPTION </th>
                    </tr>
                </thead>
                <tbody class="manage-rule">
                    <tr>
                    <td><strong>Administrator</strong> </td>
                    <td>Manage Roles,Manage User Login,Manage Products,Manage Retailers,Manage Measurements,Manage Standard Sizes,Manage Styling Options,Manage Retailer Styling,Manage Measurement Fits,Manage Fabrics,Manage Pipings,Manage Retailer Pricing,Manage Bulk Fabrics,Manage Fabric Suppliers,Manage Workers,Manage Positions,Worker Extra Payments,Extra Payment Categories,Factory Worker Barcoding,Add Fabric Stock,Reduce Fabric Stock,Available Fabric Stock,Going Out Of Stock Inventory,Search Orders,Manage Order Status,Orders Status Barcoding,Search Work Report,Work Report Per Order,Worker Summary Report,Daily Attendance Report,Attendance Summary Report,In Production Work Report,Active Retailer Invoice,Retailer Invoice History,Manage Shop Invoice,Submit Notes,View Active Notes,View Closed Notes,Shipping Box Report,Print Shipping Box,Reopen Shipping Box,Manage Pipings,Manage Linings </td>
                    <td><strong>NA</strong> </td>
                    </tr>
                    <tr>
                    <td><strong>Talor Bill and fabric stock</strong> </td>
                    <td>Manage Fabrics,Manage Pipings,Manage Addup Price,Manage Buying Fabrics,Manage Fabric Category,Manage Fabric Suppliers,Factory Worker Barcoding,Print Worker Payment Slip,Add Fabric Inventory,Add Lining Inventory,Add Piping Inventory,Reduce Fabric Inventory,Used Fabric Inventory Report,On Hand Fabric Inventory Report,Fabric Inventory Per Item Report,Search Orders </td>
                    <td><strong>Edit / Delete</strong> </td>
                    </tr>
                    <tr>
                    <td><strong>Barcoding</strong> </td>
                    <td>Worker Extra Payments,Factory Worker Barcoding,Orders Status Barcoding </td>
                    <td><strong>Edit / Delete</strong> </td>
                    </tr>
                    <tr>
                    <td><strong>QC</strong> </td>
                    <td>Orders Status Barcoding </td>
                    <td><strong>Edit / Delete</strong> </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
      </>
    )
}