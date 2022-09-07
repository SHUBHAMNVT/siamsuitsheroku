import React from "react";
import './factory.css'
import { useState } from "react";

export default function AddWorkAdvancePayment(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table managemeasurement-page">
                <div className="order-top-tabs">
                <strong>Worker Advance Payment</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Worker Name</p>
                    <select name="workername" id="workername" className="searchinput">
                        <option value="all">Select Worker Name</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
                  </div>
                  <div className="searchinput-inner">
                    <p>Advance Title</p>
                    <input type="text" className='searchinput'/>
                  </div>
                  <div className="searchinput-inner">
                    <p>Advance Amount</p>
                    <input type="text" className='searchinput'/>
                    <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
            </div>
            </div>
        </main>
    )
}