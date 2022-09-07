import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import "./sidebar.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem', color:'#242424' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 34, 85, 1)',
  // flexDirection: 'row-reverse',
  // '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
  //   transform: 'rotate(90deg)',
  // },
  // '& .MuiAccordionSummary-content': {
  //   marginLeft: theme.spacing(1),
  // },
  // color:'white',
  // borderRadius: '5px',
  // fontSize:'0.9rem'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState('');
  const [selectedSidebarLink, setSelectedSidebarLink] = React.useState("")
 
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <aside className="sidebar">
      <div id="leftside-navigation" className="nano">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="Accrodian-main">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="sidebarmenu">
        <i className="fa-solid fa-user"></i>
        <span>Admin</span>
        </AccordionSummary> 
        <AccordionDetails>
        <ul>
           <li><Link to="/admin/roles" className={selectedSidebarLink === "roles"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("roles")}}> Manage Roles </Link> </li>
           <li><Link to="/admin/userlogin" className={selectedSidebarLink === "userlogin"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("userlogin")}}> Manage User Login </Link> </li>
           <li><Link to="/admin/retailer" className={selectedSidebarLink === "retailer"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("retailer")}}> Manage Retailers </Link> </li>
           <li><Link to="/admin/product" className={selectedSidebarLink === "product"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("product")}}> Manage Products </Link> </li>
           <li><Link to="/admin/measurements" className={selectedSidebarLink === "measurements"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("measurements")}}> Manage Measurements </Link> </li>
           <li><Link to="/admin/styleoption" className={selectedSidebarLink === "styleoption"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("styleoption")}}> Manage Styling Options </Link> </li>
           <li><Link to="/admin/retailstyle" className={selectedSidebarLink === "retailstyle"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("retailstyle")}}> Manage Retail Stylings </Link> </li>
           <li><Link to="/admin/measurementfits" className={selectedSidebarLink === "measurementfits"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("measurementfits")}}> Manage Measurement Fits </Link> </li>
           <li><Link to="/admin/pipings" className={selectedSidebarLink === "pipings"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("pipings")}}> Manage Pipings </Link> </li>
           {/* <li><Link to="/admin/retailerprice" className={selectedSidebarLink === "retailerprice"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("retailerprice")}}> Manage Retailer Pricing </Link> </li> */}
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="Accrodian-main">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className="sidebarmenu">
          <i class="fa-sharp fa-solid fa-industry"></i>
          <span>Factory</span>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
           <li><Link to="/factory/workers" className={selectedSidebarLink === "workers"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("workers")}}> Manage Workers </Link> </li>
           <li><Link to="/factory/positions" className={selectedSidebarLink === "positions"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("positions")}}> Manage Positions </Link> </li>
           <li><Link to="/factory/extrapayments" className={selectedSidebarLink === "extrapayments"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("extrapayments")}}> Manage Extra Payments </Link> </li>
           <li><Link to="/factory/paymentcategories" className={selectedSidebarLink === "paymentcategories"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("paymentcategories")}}> Manage Payment Categories </Link> </li>
           <li><Link to="/factory/workerbarcoding" className={selectedSidebarLink === "workerbarcoding"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("workerbarcoding")}}> Factory Worker Barcoding </Link> </li>
           <li><Link to="/factory/paymentsummary" className={selectedSidebarLink === "paymentsummary"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("paymentsummary")}}> Payment Summary </Link> </li>
           <li><Link to="/factory/paymenthistory" className={selectedSidebarLink === "paymenthistory"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("paymenthistory")}}> Work Payment History </Link> </li>
           <li><Link to="/factory/advancepayment" className={selectedSidebarLink === "advancepayment"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("advancepayment")}}> Add Worker Advance Payment </Link> </li>
           <li><Link to="/factory/advancepaymenthistory" className={selectedSidebarLink === "advancepaymenthistory"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("advancepaymenthistory")}}> Worker Advance Payment History </Link> </li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="Accrodian-main">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className="sidebarmenu">
        <i class="fa-solid fa-box"></i>
          <span>Orders</span>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Search Orders </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> New Order </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Modified </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Processing </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Ready for Shipping </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Sent </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Manual Order </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Add </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> View </Link> </li>
           <li><Link to="/" className={selectedSidebarLink === "roles"? "activeList" : "notActive"}> Completed Orders </Link> </li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="Accrodian-main">
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className="sidebarmenu">
        {/* <i className="fa-solid fa-file-lines"></i> */}
        <i class="fa-solid fa-file-invoice"></i>
          <span>Invoice</span>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
           <li><Link to="/invoice/createinvoice" className={selectedSidebarLink === "createinvoice"? "activeList" : "notActive"}> Create Invoice </Link> </li>
           <li><Link to="/invoice/invoicehistory" className={selectedSidebarLink === "invoicehistory"? "activeList" : "notActive"}> Invoice History </Link> </li>
           <li><Link to="/invoice/paidinvoice" className={selectedSidebarLink === "paidinvoice"? "activeList" : "notActive"}> Paid Invoice </Link> </li>
        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="Accrodian-main">
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" className="sidebarmenu">
        <i className="fa-solid fa-truck-fast"></i>
          <span>Shipping</span>
        </AccordionSummary>
        <AccordionDetails>
        <ul>
           <li><Link to="/shipping/shippingboxreport" className={selectedSidebarLink === "shippingboxreport"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("shippingboxreport")}}> Shipping Box Report </Link> </li>
           <li><Link to="/shipping/orderstatusbarcoding" className={selectedSidebarLink === "orderstatusbarcoding"? "activeList" : "notActive"} onClick={()=>{setSelectedSidebarLink("orderstatusbarcoding")}}> Order Status Barcoding </Link> </li>
        </ul>
        </AccordionDetails>
      </Accordion>
    </div>
    </aside>
  );
}