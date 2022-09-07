import React from "react";
import './admin.css'
import { useState } from "react";

export default function ManageWorkers(){

   const [ data , setData] = useState()

   const handleChange = () =>{

   }
   
    return (
        <main className="main-panel">
            <div className="content-wrapper">
            <div className="order-table manage-page">
                <div className="order-top-tabs">
                <strong>Manage Factory Users</strong>
                <button type="button" className="custom-btn"> <i class="fa-solid fa-plus"></i> Add New User </button>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>E-MAIL</th>
                    <th>ROLE</th>
                    <th>OPTION</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                    <tr>
                    <td><strong>Super Admin</strong></td>
                    <td>Admin</td>
                    <td>admin@123</td>
                    <td>sanjcreation@gmail.com</td>
                    <td>administrator</td>
                    <td>-</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </main>
    )
}