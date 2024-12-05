import React, { useState } from "react";
import { styled } from '@mui/system'
import {
	Box,
	Grid,
	Table,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
	Button
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/lab'
import 'rc-tree/assets/index.css'
import DatePicker from "react-datepicker"
import GoogleMapReact from 'google-map-react';
import EventImages from "../../Assets/images/event-details-img.png"

const style = {
	position: 'absolute',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 300,
	bgcolor: 'background.paper',
	margin: '0px',
	p: 2,
};


const TextField = styled(TextValidator)(() => ({
	width: '100%',
	marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
	width: 300,
	marginBottom: '16px',
}))
const eventactionopt = [
	{ id: 1, label: "Action 1" },
	{ id: 2, label: "Action 2" },
	{ id: 3, label: "Action 3" },
]
const locationopt = [
	{ id: 1, label: "Location 1" },
	{ id: 2, label: "Location 2" },
	{ id: 3, label: "Location 3" },
]
const statusopt = [
	{ id: 1, label: "Active" },
	{ id: 2, label: "Inactive" },
]
const eventopt = [
	{ id: 1, label: "Overspeed" },
	{ id: 2, label: "Signal Break" },
	{ id: 3, label: "Short Break" },
	{ id: 3, label: "Zebra Line Cross" },
	{ id: 3, label: "Mobile Usage" },
]
const vehicleopt = [
	{ id: 1, label: "Vehicle 1" },
	{ id: 2, label: "Vehicle 2" },
	{ id: 3, label: "Vehicle 3" },
]
const priorityopt = [
	{ id: 1, label: "P0" },
	{ id: 2, label: "P1" },
	{ id: 3, label: "P2" },
	{ id: 3, label: "P3" },

]

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const InboxIndex=() => {
	const navigate = useNavigate()
	const [startDate, setStartDate] = useState(new Date());
	const [formdata, setFormData] = useState({ dateofBirth: "" })
	const handleSubmitSearch = async (event) => {
	}
	const handleDateChange = (value, name) => {
		console.log(value)
		console.log(name)
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	}
	const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title res-p-tt0">
						<h4>Events Inbox</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb res-mb-20 res-pt-set ">
						<h6><span className="pointer " onClick={() => navigate('/dashboard')}>Home /</span> Events</h6>
					</Grid>
				</Grid>
				<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="search-form pr-0 pd-block res-pd-b-0 pd-f" >
					<Grid container spacing={3} className="search-form-main">
						<Grid item md={3} className="search-form-block pd-l-0 respo-wd-f mar--24">
							<label className="event-label">Event</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width red-marg-b-0 rs-wd-100"
								fullWidth
								options={eventopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0 "
										label="Select"
										name="vehicle"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block pd-l-0 res-pd-0 respo-wd-f mar--24 ">
							<label className="event-label">Location</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width red-marg-b-0 rs-wd-100"
								fullWidth
								options={locationopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0"
										label="Select"
										name="model"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} xs={12} sx={{ display: 'flex' }} className="search-form-block respo-w-100 pd-l-0 res-pd-0 respo-wd-f mar--24">
							<Grid container className="search-form-main">
								<Grid item md={6} className="fl-width">
									<label className="event-label">Date</label>
									<DatePicker
										className="gm-t-10 grey-bg date-custom pdr-2 date-wd"
										placeholderText="DD-MM-YYYY"
										name="dateofBirth"
										value={formdata.dateofBirth || ''}
										onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
									/>
								</Grid>
								<Grid item md={6} sx={{ marginTop: '21px' }} className="red-marg-t-0 fl-width" >
									<DatePicker
										className="mar-t-7 grey-bg date-custom date-wd rs-mar-t-10"
										placeholderText="DD-MM-YYYY"
										name="dateofBirth"
										value={formdata.dateofBirth || ''}
										onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={3} className="search-form-block pd-l-0 res-pd-0 respo-wd-f mar--24">
							<label className="event-label">Priority</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width rsmb0"
								fullWidth
								options={priorityopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0"
										label="Select"
										name="status"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={3} className="search-form-main respo-wd-f resm0">
						<Grid item md={3} className="search-form-block pd-l-0 res-pd-0 px-1 respo-wd-f mar--24 rsp-pdr-00">
							<label className="event-label">Event Action</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width red-marg-b-0"
								fullWidth
								options={eventactionopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0"
										label="Select"
										name="vehicle"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block pd-l-0 res-pd-0 respo-wd-f mar--24 rsp-pdr-00">
							<label className="event-label">Vehicle</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width red-marg-b-0"
								fullWidth
								options={vehicleopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0"
										label="Select"
										name="model"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block pd-l-0 res-pd-0 respo-wd-f mar--24 rsp-pdr-00">
							<label className="event-label">Driver</label>
							<AutoComplete
								className="dropdown gm-t-10 fl-width"
								fullWidth
								options={statusopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input rsmb0"
										label="Select"
										name="status"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
					</Grid>
				</ValidatorForm>
				<Grid container spacing={3} className="user-list-main-block pt-20">
					<Grid item md={3} className="event-list-right">
						<div className="search-form ">
							<Grid container className="user-list-main-block">
								<Grid item md={12} className="event-inbox-box active fl-width">
									<p>Short Broken Event<br/>
										Raised By: Joe Hook<br/>
										Rised Date: 24/06/2022<br/>
										Rised Time: 10:50 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
								<Grid item md={12} className="event-inbox-box fl-width">
									<p>Event: Overspeed<br/>
										Raised by: Carl Max<br/>
										Raised Date: 24/06/2022<br/>
										Raised Time: 10:00 AM<br/>
									</p>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item md={9} className="event-list-right">
						<Grid container className="user-list-main-block ">
							<Grid item md={12} className="event-list-right ">
								<Grid container spacing={2} className="user-list-main-block custom-white-box mar-t-0 set-box">
									<Grid item md={7} className="event-list-right pad-0 ">
										<div style={{ height: '100%', width: '100%' }}>
											<GoogleMapReact
												bootstrapURLKeys={{ key: "" }}
												defaultCenter={defaultProps.center}
												defaultZoom={defaultProps.zoom}
											>
												<AnyReactComponent
													lat={59.955413}
													lng={30.337844}
													text="My Marker"
												/>
											</GoogleMapReact>                                
										</div>
									</Grid>
									<Grid item md={5} className="event-list-right pad-16 res-pd-b-0">
										<Grid item md={12} className="custom-white-box respo-mar-b-30">
											<Grid container spacing={2} className="tts">
												<Grid item md={12}>
													<h4 className="text-left box-header pl-20 font-16 mar-b-0">EVENT DETAILS</h4>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Event</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">Overspeed</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Driver</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">John Doe</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Vehicle Number</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">GJ018965</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Notify by</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">SMS</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Priority</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15"><span className="red-priority">P1</span></label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Date & Time</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">June 21,2022 10:00 AM</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Probability</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">0.5</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Classification</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">Drivers</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Description</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15">Lorem Ipsum is simply dummy text of the printing & typesetting industry.</label>
												</Grid>
												<Grid item md={5} className="user-add-block">
													<label className="driver-label font-14">Status</label>
												</Grid>
												<Grid item md={7} className="user-add-block ">
													<label className="font-14 grey-txt driver-label label-with-before p-r-15"><span className="progress px3-up">65%</span></label>
												</Grid>
												<Grid item md={3} className="user-add-block">
													<label className="driver-label discard mar-t-0">Discard</label>
												</Grid>
												<Grid item md={3} className="user-add-block">														
													<label className="driver-label escalate mar-t-0">Escalate</label>
												</Grid>
												<Grid item md={6} className="user-add-block pad-r-16 text-align-right mar-b-24">														
													<button className="take-action-btn">Take Action</button>
												</Grid>
											</Grid>
										</Grid>
										<Grid item md={12} className="custom-white-box respo-mar-b-30 mar-t-24 ">
											<Grid container spacing={2}>
												<Grid item md={12} className="fl-width">
													<h4 className="text-left box-header pl-20 font-16 mar-b-0">SNAPSHOTS</h4>
												</Grid>
												<Grid item md={12} className="mar-b-16 fl-width">
													<Grid container>
														<Grid item md={4} className="res-w-33" >
															<img src={EventImages} alt="" className="snapshots" />
														</Grid>
														<Grid item md={4} className="res-w-33" >
															<img src={EventImages} alt="" className="snapshots" />
														</Grid>
														<Grid item md={4} className="res-w-33" >
															<img src={EventImages} alt="" className="snapshots" />
														</Grid>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box >
		</>
	)
}

export default InboxIndex;