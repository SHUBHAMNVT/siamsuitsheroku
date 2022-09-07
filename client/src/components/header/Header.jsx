import React from "react";
import { useContext } from 'react';
import "./header.css"
import { useNavigate } from "react-router-dom";
import Logo from "./../../images/logo.png"
import User from "./../../images/usr.webp"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

import { Context } from "../../context/Context";

export default function Header(){
  const { dispatch } = useContext(Context)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    

    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const navigate = useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleProfileMenuOpen = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleMenuClose = () => {
      setAnchorEl2(null);
    };

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    }
    const menuId = 'primary-search-account-menu';
    return (
        <header>
            <div className="header-nav">
                <div className="logo-box">
                    <a href="/"><img src={Logo} alt="SiamSuits Logo" /></a>
                    <div className="navigation-toggle">
                       <a href="javascript:Void(0)" id="togglemenu"> <i className="fa-solid fa-bars"></i> </a>
                    </div> 
                </div>   
                <div className="navigation-navm">
                    <div className="top-search-box">
                        <form className="expanding-search-form">
                            <div className="input-group">
                              <div className="searchicon"> <i class="fa-solid fa-magnifying-glass"></i> </div>
                                <input type="text" for="search" name="search" className="form-control" placeholder="Seach Order #, Customer name, Invoice#, Shipment #" />
                                <div className="search-dropdown">
                                
                                <Button
                                  id="basic-button"
                                  aria-controls={open ? 'basic-menu' : undefined}
                                  aria-haspopup="true"
                                  className="button dropdown-toggle"
                                  aria-expanded={open ? 'true' : undefined}
                                  onClick={handleClick}
                                >
                                  <span className="toggle-active"> Order </span>
                                  <span className="fa fa-angle-down pull-right"></span>
                                </Button>
                                <Menu
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                  MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                  }}
                                >
                                  <MenuItem onClick={handleClose}>People</MenuItem>
                                  <MenuItem onClick={handleClose}>Products</MenuItem>
                                  <MenuItem onClick={handleClose}>Blog</MenuItem>
                                </Menu>
                                    {/* <button className="button dropdown-toggle" type="button">
                                    <span className="toggle-active">Order  </span>
                                    <span className="fa fa-angle-down pull-right"></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                    <li className="menu-active"><a href="#">Orders </a></li>
                                    <li><a href="#">People</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Blog</a></li>
                                    </ul> */}
                                </div> 
                            </div>
                        </form>
                    </div>		     
                </div>
                <div className="nav-right-content">
                  <Button variant="contained" className="logout" onClick={handleLogout} ><LogoutIcon/> <span>Logout</span> </Button>
                </div>
            </div>
       </header>
    )
}