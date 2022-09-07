import React from "react";
import './invoice.css'
import { useState } from "react";

export default function PaidInvoice(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Paid Invoice</strong>
                </div>
                <div className="searchstyle searchstyle-one">
                  <div className="searchinput-inner">
                    <p>Start Date</p>
                    <input type="date" className="searchinput"/>
                  </div>
                  <div className="searchinput-inner">
                    <p>End Date</p>
                    <input type="date" className="searchinput"/>
                  </div>
						<div className="searchinput-inner">
                    <p>Worker Name</p>
                    <select name="workername" id="workername" className="searchinput">
                        <option value="all">Select Worker Name</option>
                        <option value="x">x</option>
                        <option value="y">y</option>
                        <option value="z">z</option>
                    </select>
						  <button type="button" className="custom-btn"> <i class="fa-solid fa-search"></i></button>
                  </div>
                </div>
            </div>
            </div>
        </main>
    )
}