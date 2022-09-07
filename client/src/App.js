import React from 'react'
import { useContext } from 'react';
import Header from './components/header/Header';
import Login from './components/pages/login/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Dashboard from './components/pages/dashboard/Dashboard';
import { Context } from "./context/Context";
import ManageUserLogin from "./components/pages/admin/ManageUserLogin"
import ManageRetailer from "./components/pages/admin/ManageRetailer"
import ManageRoles from './components/pages/admin/ManageRoles';
import ManageProduct from './components/pages/admin/ManageProduct'
import ManageMeasurements from './components/pages/admin/ManageMeasurements';
import ManageStyleOption from './components/pages/admin/ManageStyleOption';
import ManageRetailStyle from './components/pages/admin/ManageRetailStyle';
import ManageMeasurementFits from './components/pages/admin/ManageMeasurementFits';
import ManagePipings from './components/pages/admin/ManagePipings';
import ManageReatilerPrice from './components/pages/admin/ManageRetailerPrice';
import ManageWorkers from './components/pages/Factory/ManageWorkers';
import ManagePositions from './components/pages/Factory/ManagePositions';
import ManageExtraPayments from './components/pages/Factory/ManageExtraPayments';
import ManagePaymentCategories from './components/pages/Factory/ManagePaymentCategories';
import FactoryWorkerBarcoding from './components/pages/Factory/FactoryWorkerBarcoding';
import PaymentSummary from './components/pages/Factory/PaymentSummary';
import WorkPaymentHistory from './components/pages/Factory/WorkPaymentHistory';
import AddWorkAdvancePayment from './components/pages/Factory/AddWorkAdvancePayment';
import WorkAdvancePaymentHistory from './components/pages/Factory/WorkAdvancePaymentHistory';
import Sidebar from './components/sidebar/Sidebar';
import ShippingBoxReport from './components/pages/shopping/ShippingBoxReport';
import OrderStatusBarcoding from './components/pages/shopping/OrderStatusBarcoding';
import CreateInvoice from './components/pages/invoice/CreateInvoice';
import InvoiceHistory from './components/pages/invoice/InvoiceHistory';
import PaidInvoice from './components/pages/invoice/PaidInvoice';

function App() {
  
  const {isLoggedIn} = useContext(Context);

  return (
  <>
  { isLoggedIn ?
    
    <Router>
      <Header/>
      <div className="Main-page-body-wrapper-complussry">
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={ <Dashboard/> }></Route>
        <Route exact path="/admin/roles" element={ <ManageRoles/> }></Route>
        <Route exact path="/admin/userlogin" element={ <ManageUserLogin/> }></Route>
        <Route exact path="/admin/retailer" element={ <ManageRetailer/> }></Route>
        <Route exact path="/admin/product" element={ <ManageProduct/> }></Route>
        <Route exact path="/admin/measurements" element={ <ManageMeasurements/> }></Route>
        <Route exact path="/admin/styleoption" element={ <ManageStyleOption/> }></Route>
        <Route exact path="/admin/retailstyle" element={ <ManageRetailStyle/> }></Route>
        <Route exact path="/admin/measurementfits" element={ <ManageMeasurementFits/> }></Route>
        <Route exact path="/admin/pipings" element={ <ManagePipings/> }></Route>
        {/* <Route exact path="/admin/retailerprice" element={ <ManageReatilerPrice/> }></Route> */}
        <Route exact path="/factory/workers" element={ <ManageWorkers/> }></Route>
        <Route exact path="/factory/positions" element={ <ManagePositions/> }></Route>
        <Route exact path="/factory/extrapayments" element={ <ManageExtraPayments/> }></Route>
        <Route exact path="/factory/paymentcategories" element={ <ManagePaymentCategories/> }></Route>
        <Route exact path="/factory/workerbarcoding" element={ <FactoryWorkerBarcoding/> }></Route>
        <Route exact path="/factory/paymentsummary" element={ <PaymentSummary/> }></Route>
        <Route exact path="/factory/paymenthistory" element={ <WorkPaymentHistory/> }></Route>
        <Route exact path="/factory/advancepayment" element={ <AddWorkAdvancePayment/> }></Route>
        <Route exact path="/factory/advancepaymenthistory" element={ <WorkAdvancePaymentHistory/> }></Route>
        <Route exact path="/invoice/createinvoice" element={ <CreateInvoice/> }></Route>
        <Route exact path="/invoice/invoicehistory" element={ <InvoiceHistory/> }></Route>
        <Route exact path="/invoice/paidinvoice" element={ <PaidInvoice/> }></Route>
        <Route exact path="/shipping/shippingboxreport" element={ <ShippingBoxReport/> }></Route>
        <Route exact path="/shipping/orderstatusbarcoding" element={ <OrderStatusBarcoding/> }></Route>
      </Routes>
    </div>
    </Router>

    : 

    <Router>
      <Routes>
        <Route exact path="/" element={ <Login/> }></Route>
        <Route exact path="/admin/roles" element={ <Login/> }></Route>
        <Route exact path="/admin/userlogin" element={ <Login/> }></Route>
        <Route exact path="/admin/retailer" element={ <Login/> }></Route>
        <Route exact path="/admin/product" element={ <Login/> }></Route>
        <Route exact path="/admin/measurements" element={ <Login/> }></Route>
        <Route exact path="/admin/styleoption" element={ <Login/> }></Route>
        <Route exact path="/admin/retailstyle" element={ <Login/> }></Route>
        <Route exact path="/admin/measurementfits" element={ <Login/> }></Route>
        <Route exact path="/admin/pipings" element={ <Login/> }></Route>
        {/* <Route exact path="/admin/retailerprice" element={ <Login/> }></Route> */}
        <Route exact path="/factory/workers" element={ <Login/> }></Route>
        <Route exact path="/factory/positions" element={ <Login/> }></Route>
        <Route exact path="/factory/extrapayments" element={ <Login/> }></Route>
        <Route exact path="/factory/paymentcategories" element={ <Login/> }></Route>
        <Route exact path="/factory/workerbarcoding" element={ <Login/> }></Route>
        <Route exact path="/factory/paymentsummary" element={ <Login/> }></Route>
        <Route exact path="/factory/paymenthistory" element={ <Login/> }></Route>
        <Route exact path="/factory/advancepayment" element={ <Login/> }></Route>
        <Route exact path="/factory/advancepaymenthistory" element={ <Login/> }></Route>
        <Route exact path="/shipping/shippingboxreport" element={ <Login/> }></Route>
        <Route exact path="/shipping/orderstatusbarcoding" element={ <Login/> }></Route>
      </Routes>
    </Router>
  }
  </>

  );
}

export default App;
