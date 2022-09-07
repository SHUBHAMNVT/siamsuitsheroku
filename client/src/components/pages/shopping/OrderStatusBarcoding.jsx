import React from "react";
import './shipping.css'
import { useState } from "react";

export default function OrderStatusBarcoding(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table managemeasurement-page">
                <div className="order-top-tabs">
                <strong>Manage Barcoding</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Barcode Status</p>
                    <select name="workername" id="workername" className="searchinput">
                        <option value="all">Ready for Shipping</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>
                  <div className="searchinput-inner">
                    <p>Packing By</p>
                    <input type="text" className='searchinput' placeholder="Random"/>
                  </div>
                  <div className="searchinput-inner">
                    <p>Barcode</p>
                    <input type="text" className='searchinput' placeholder="Product Barcode"/>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
            </div>
            </div>
        </main>
    )
}