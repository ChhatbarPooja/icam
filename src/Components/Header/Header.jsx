import React, { useState } from "react";
import MainLogo from "../../Assets/images/logo.png";
import Search_icon from "../../Assets/images/search-icon.png";
import Notification_icon from "../../Assets/images/bell.png";
import User_icon from "../../Assets/images/user.png";
import Not_img from "../../Assets/images/dashborad1.png";
import Responsive_menu from "../../Assets/images/responsive-menu.png";
import {
    Grid,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    Button,
    Tooltip,
} from '@mui/material'
import { NavLink, HashRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import { useNavigate } from "react-router-dom";


$(document).ready(function () {
    $(document).on("click", ".responsive-menu", function () {
        if ($(".header-bottom").css("display") == "none") {
            $(".header-bottom").slideDown(500);
        } else {
            $(".header-bottom").slideUp(500);
        }
    });
    $(document).on("click", ".table-drop-icon", function () {
        $(this).next().toggleClass("active");
    });
    $(document).on("click", "body", function (e) {
        if ($(e.target).closest(".table-drop-icons").length > 0) {
            return false;
        } else {
            $(".table-dropdown.active").removeClass("active");
        }
    });
    $(".menu-hover").hover(function () {
        $("body").addClass("add-overlay");
    }, function () {
        $("body").removeClass("add-overlay");
    });
    $(document).on("click", ".toggle-custom-drop", function () {
        $(".notification-drop").toggle();
        $("body").toggleClass("add-overlay");
    });
})

const Main_header = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="header-main">
                <div className="header-top">
                    <div className="header-logo resp-text-left">
                        <img src={MainLogo} />
                        <img className="responsive-menu" src={Responsive_menu} />
                    </div>
                    <div className="header-search">
                        <div className="header-search-inner">
                            <form action="" method="post">
                                <input type="text" className="input-field" placeholer="Search..." />
                                <input type="submit" className="submit-btn" value="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="header-not">
                        <div className="header-notification p-relative">
                            <img className="pointer toggle-custom-drop" src={Notification_icon} />
                            <div className="menu-none notification-drop">
                                <div className="not-drop pointer">
                                    <div className="not-img">
                                        <img src={Not_img} />
                                    </div>
                                    <div className="not-det">
                                        <div className="not-title">
                                            <h4 className="font-12 font-bold mar-0">Short brake event (Event heading)</h4>
                                        </div>
                                        <div className="not-cont">
                                            <span className="font-10 grey-txt">The ct is a long established fact that a reader.</span>
                                        </div>
                                        <div className="not-min-cont">
                                            <label className="font-9 font-bold">Driver</label><span className="font-9 grey-txt mar-r-10"> : John Doe</span><label className="font-9 font-bold">Vehicle</label><span className="font-9 grey-txt mar-r-10"> : GJ018965</span><label className="font-9 font-bold">Camera</label><span className="font-9 grey-txt"> : D1-Camera01</span>
                                        </div>
                                        <div className="not-time">
                                            <label className="font-10 grey-txt">2 Minutes ago</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="not-drop pointer">
                                    <div className="not-img">
                                        <img src={Not_img} />
                                    </div>
                                    <div className="not-det">
                                        <div className="not-title">
                                            <h4 className="font-12 font-bold mar-0">Overspeed</h4>
                                        </div>
                                        <div className="not-cont">
                                            <span className="font-10 grey-txt">The ct is a long established fact that a reader.</span>
                                        </div>
                                        <div className="not-min-cont">
                                            <label className="font-9 font-bold">Driver</label><span className="font-9 grey-txt mar-r-10"> : John Doe</span><label className="font-9 font-bold">Vehicle</label><span className="font-9 grey-txt mar-r-10"> : GJ018965</span><label className="font-9 font-bold">Camera</label><span className="font-9 grey-txt"> : D1-Camera01</span>
                                        </div>
                                        <div className="not-time">
                                            <label className="font-10 grey-txt">10 Minutes ago</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="not-drop pointer">
                                    <div className="not-img">
                                        <img src={Not_img} />
                                    </div>
                                    <div className="not-det">
                                        <div className="not-title">
                                            <h4 className="font-12 font-bold mar-0">Fuel Leakage</h4>
                                        </div>
                                        <div className="not-cont">
                                            <span className="font-10 grey-txt">The ct is a long established fact that a reader.</span>
                                        </div>
                                        <div className="not-min-cont">
                                            <label className="font-9 font-bold">Driver</label><span className="font-9 grey-txt mar-r-10"> : John Doe</span><label className="font-9 font-bold">Vehicle</label><span className="font-9 grey-txt mar-r-10"> : GJ018965</span><label className="font-9 font-bold">Camera</label><span className="font-9 grey-txt"> : D1-Camera01</span>
                                        </div>
                                        <div className="not-time">
                                            <label className="font-10 grey-txt">15 Minutes ago</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="not-drop pointer">
                                    <div className="not-img">
                                        <img src={Not_img} />
                                    </div>
                                    <div className="not-det">
                                        <div className="not-title">
                                            <h4 className="font-12 font-bold mar-0">Tyre Blast</h4>
                                        </div>
                                        <div className="not-cont">
                                            <span className="font-10 grey-txt">The ct is a long established fact that a reader.</span>
                                        </div>
                                        <div className="not-min-cont">
                                            <label className="font-9 font-bold">Driver</label><span className="font-9 grey-txt mar-r-10"> : John Doe</span><label className="font-9 font-bold">Vehicle</label><span className="font-9 grey-txt mar-r-10"> : GJ018965</span><label className="font-9 font-bold">Camera</label><span className="font-9 grey-txt"> : D1-Camera01</span>
                                        </div>
                                        <div className="not-time">
                                            <label className="font-10 grey-txt">20 Minutes ago</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-all-notifications pointer" onClick={() => navigate("/usernotification")}>
                                    <h4 className="font-14 font-bold mar-0 text-center">View All</h4>
                                </div>
                            </div>
                        </div>
                        <div className="user-sec">
                            <div className="user-profile">
                                <img src={User_icon} />
                            </div>
                            <div className="user-detail">
                                <h4 className="user-name">JOHN DOE</h4>
                                <p className="user-pos">Sr. ENT Doctor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-menu">
                        <div className="heade-menu-inner">
                            <nav className="main-menu">
                                <NavLink to="/dashboard">
                                    Dashboard
                                </NavLink>
                                <NavLink to="/events">
                                    Events
                                </NavLink>
                                <NavLink to="/FNOL">
                                    FNOL
                                </NavLink>
                                <NavLink to="/vehicles">
                                    Vehicles
                                </NavLink>
                                <NavLink to="/drivers">
                                    Drivers
                                </NavLink>
                                <NavLink to="/vehicle_information">
                                    Vehicle Information
                                </NavLink>
                                <NavLink to="/inbox">
                                    Inbox
                                </NavLink>
                                <NavLink className="menu-hover" to="">
                                    Reports
                                    <div className="menu-none">
                                        <NavLink to="/reports/report_by_vehicle">
                                            Reports by Vehicles
                                        </NavLink>
                                        <NavLink to="/reports/report_by_driver">
                                            Reports by Drivers
                                        </NavLink>
                                        <NavLink to="/reports/report_by_user">
                                            Reports by Users
                                        </NavLink>
                                    </div>
                                </NavLink>
                                <NavLink to="/event_designer">
                                    Event Designer
                                </NavLink>
                                <NavLink to="/user_management">
                                    User Management
                                </NavLink>
                                <NavLink to="/company_management">
                                    Company Management
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_header;