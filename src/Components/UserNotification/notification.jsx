
import React, { useState } from "react";
import { useTheme, styled } from '@mui/system'
import {
    Box,
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
import EventImage from "../../Assets/images/event.png"
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const FormControlLabel = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const Notification = () => {

    const navigate = useNavigate()



    return (

        <>
            <Box className="main-box mt-8 ">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>Notifications</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> notification </h6>
                    </Grid>

                </Grid>



                <Grid container md={12} xs={12}>
                    <h4 className="notification-time mar-b-10 pad-l-24 pad-r-24">Today</h4>
                </Grid>
                <Grid container spacing={3} className="user-list-main-block pt-20">

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Short brake  event (Event headling)</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">2 Minutes ago</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Overspeed</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">10 Minutes ago</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Signal Break</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">20 Minutes ago</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid></Grid>

                <Grid container md={12} xs={12}>
                    <h4 className="notification-time notification-mt-10 mar-b-10 pad-l-24 pad-r-24">Yesterday</h4>
                </Grid>
                <Grid container spacing={3} className="user-list-main-block pt-20">

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Zebra line crossed
                                        </p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">3:57 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Fuel Leakage</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">01:00 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Tyre Blast</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">12:50 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Speed Changes Suddenly</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">12:50 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid></Grid>







                <Grid container md={12} xs={12}>
                    <h4 className="notification-time notification-mt-10 mar-b-10 pad-l-24 pad-r-24">June 22, 2022</h4>
                </Grid>
                <Grid container spacing={3} className="user-list-main-block pt-20">

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Zebra line crossed</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid></Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">06:17 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Fuel Leakage</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">03:12 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid>

                    <Grid item md={12} className="event-list-right event-search-form">
                        <Table className="">

                            <TableBody>
                                <TableRow className="noti-block">
                                    <TableCell className="notification-cell">
                                        <div><img src={EventImage} className="event-image" alt=""></img></div>

                                    </TableCell>

                                    <TableCell>

                                        <p className="notification-p1">Tyre Blast</p>
                                        <p className="notification-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <Grid container spacing={0.5} className="notification-p3">
                                            <Grid item md={2} lg={2}>
                                                <b>Driver</b> : John Doe
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Vehicle</b> : GJ018965
                                            </Grid>
                                            <Grid item md={2} lg={2}>
                                                <b>Camera </b>: D1-Camera01
                                            </Grid>
                                        </Grid>

                                    </TableCell>
                                    <TableCell>
                                        <h4 className="noti-time">01:12 PM</h4>
                                    </TableCell>
                                </TableRow>
                            </TableBody></Table></Grid></Grid>






            </Box>
        </>
    )
}

export default Notification;