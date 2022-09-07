import React from "react";
import './factory.css'
import { useState } from "react";
import Divider from '@mui/material/Divider';

export default function ManagePositions(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
      <>
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Workers Extra Payments</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Barcode id</p>
                    <input type="text" className='searchinput' placeholder="123456 "/>
                  </div>
                  <div className="searchinput-inner">
                    <p>Worker Name</p>
                    <select name="supply" id="worker" className="searchinput">
                        <option value="all">Select Worker</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>

                  <div className="searchinput-inner">
                    <p>Product</p>
                    <select name="supply" id="product" className="searchinput">
                        <option value="all">Select Product</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>
                </div>
                <Divider>PAYMENT CATEGORY</Divider>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Authorized by</p>
                    <select name="name" id="name" className="searchinput">
                        <option value="all">Select Name</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>

                  <div className="searchinput-inner">
                    <p>Date</p>
                    <input type="date" className="searchinput"/>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
            </div>
            </div>
        </main>
      </>
    )
}