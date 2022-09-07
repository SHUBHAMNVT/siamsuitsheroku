import React from "react";
import './admin.css'
import { useState } from "react";
import LogoImage from "./../../../images/logo-retail.png"

export default function ManageRetailer(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Retailers</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New Retailer </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>RETAILER NAME</th>
                    <th>OWNER NAME</th>
                    <th>CODE</th>
                    <th>E-MAIL</th>
                    <th>PHONE</th>
                    <th>LOGO</th>
                    <th>EDIT</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh </td>
                    <td>SUN-123 </td>
                    <td>sunil@gmail.com </td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="disablebutton">Disable</button></td>
                    </tr>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh</td>
                    <td>SUN-123</td>
                    <td>sunil@gmail.com</td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="disablebutton">Disable</button></td>
                    </tr>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh</td>
                    <td>SUN-123</td>
                    <td>sunil@gmail.com</td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="enablebutton">Enable</button></td>
                    </tr>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh</td>
                    <td>SUN-123</td>
                    <td>sunil@gmail.com</td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="disablebutton">Disable</button></td>
                    </tr>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh</td>
                    <td>SUN-123</td>
                    <td>sunil@gmail.com</td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="enablebutton">Enable</button></td>
                    </tr>
                    <tr>
                    <td><strong>Sunil Textile</strong></td>
                    <td>Sunil Singh</td>
                    <td>SUN-123</td>
                    <td>sunil@gmail.com</td>
                    <td><strong>+1123456789</strong></td>
                    <td><img src={LogoImage} className="logo-retail" /></td>
                    <td><strong>Edit</strong>  <button className="enablebutton">Enable</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}