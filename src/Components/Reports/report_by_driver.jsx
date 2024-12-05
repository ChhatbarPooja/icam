import React, { useState }  from "react";
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
import ReactEcharts from 'echarts-for-react';
import { Autocomplete } from '@mui/lab'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DatePicker from "react-datepicker";

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const driver_safety = {
	tooltip: {
	 	trigger: 'item'
    },
    legend: {
	 	top: 'bottom',
	 	textStyle: {
			color: '#000',
	 	},
	  	itemGap: 10,
		icon: 'circle',
    },
    series: [{
		name: 'Demographics by gender',
		type: 'pie',
		radius: ['30%', '80%'],
		center: ['50%', '40%'],
		avoidLabelOverlap: true,
	   	label: {
		 	position: 'inner',
		 	formatter: '{c}%'
	   	},
	   
	   	labelLine: {
		 	show: false
	   	},
	   	data: [
		 	{ value: 43, name: 'Low Risk' },
		 	{ value: 29, name: 'Mild Risk'},
			{ value: 14, name: 'Medium Risk'},
			{ value: 14, name: 'High Risk'},
	   	]
	}]
};

const aggr_driver = {
	legend: {
		show: true,
		icon: "circle",
		orient: 'vertical',
		right: 0,
		top: '40%',
	},
	grid: { 
		top: '30',
		bottom: '20' ,
		left: '40',
		right: '150'
	},
	xAxis: {
		type: 'category',
		data: ['Driver 5', 'Driver 9', 'Driver 11', 'Driver 17', 'Driver 19']
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			formatter: '{value}%',
		}
	},
	series: [
		{
			name: 'Hard Acceleration',
			type: 'bar',
			stack: 'total',
			emphasis: {
				focus: 'series'
			},
			data: [10, 10, 25, 10, 25]
		},
		{
			name: 'Harsh Cornering',
			type: 'bar',
			stack: 'total',
			emphasis: {
				focus: 'series'
			},
			data: [60, 60, 70, 40, 60]
		},
		{
			name: 'Harsh Braking',
			type: 'bar',
			stack: 'total',
			emphasis: {
				focus: 'series'
			},
			data: [5, 10, 5, 10, 5]
		}
	]
};


const month_opt=[
    {id: 1,label:"January"},
    {id: 2,label:"February"},
	{id: 3,label:"March"},
	{id: 3,label:"April"},
	{id: 3,label:"May"},
	{id: 3,label:"June"},
	{id: 3,label:"July"},
	{id: 3,label:"August"},
	{id: 3,label:"September"},
	{id: 3,label:"October"},
	{id: 3,label:"Novermber"},
	{id: 3,label:"December"},
]
const year_opt=[
	{id: 1,label:"2022"},
	{id: 1,label:"2021"},
	{id: 1,label:"2020"},
	{id: 1,label:"2019"},
	{id: 1,label:"2018"},
]

const driver_quality = {
	tooltip: {
	 	trigger: 'item'
    },
    legend: {
	 	textStyle: {
			color: '#000',
	 	},
	  	itemGap: 10,
		icon: 'circle',
		orient: 'vertical',
		right: 0,
		top: '40%',
    },
	grid: { 
		top: '30',
		bottom: '0' ,
		left: '40',
		right: '150'
	},
    series: [{
		name: 'Driver Quality Score',
		type: 'pie',
		radius: ['30%', '80%'],
		center: ['50%', '40%'],
		avoidLabelOverlap: true,
	   	label: {
		 	position: 'inner',
		 	formatter: '{c}%'
	   	},	   
	   	labelLine: {
		 	show: false
	   	},
	   	data: [
		 	{ value: 68, name: 'Average' },
		 	{ value: 22, name: 'Below the average'},
			{ value: 18, name: 'Above the average'},
	   	]
	}]
};

const distracted_drivers = {
	xAxis: {
		type: 'category',
		data: ['Driver3', 'Driver5', 'Driver8', 'Driver11', 'Driver18', 'Driver21', 'Driver23', 'Driver25', 'Driver28', 'Driver32'],
		axisLabel: {
			interval: 0,
		}
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			formatter: '{value}%',
		}
	},
	grid: { 
		top: '30',
		bottom: '20' ,
		left: '50',
		right: '50'
	},
	series: [
		{
			data: [58, 90, 44, 68, 25, 45, 68, 55, 85, 50],
			type: 'bar'
		}
	]
}
const driveropt = [
	{ id: 1, label: "Driver 1" },
	{ id: 2, label: "Driver 2" },
	{ id: 3, label: "Driver 3" },
];
const incidentopt = [
	{ id: 1, label: "Incident 1" },
	{ id: 2, label: "Incident 2" },
	{ id: 3, label: "Incident 3" },
];

const ReportsByDriver=() => {
	const navigate = useNavigate()
	const handleSubmitSearch = async (event) => {

	}
	const [formdata, setFormData] = useState({ dateofBirth: "" });
	const handleDateChange = (value, name) => {
		console.log(value);
		console.log(name);
		setFormData((formData) => ({
		  ...formData,
		  [name]: value,
		}));
	};

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>Reports by Drivers</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Reports</h6>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main ">
					<Grid item md={4} className="user-list-block">
						<Grid container className="user-list-main search-form h-100">
							<Grid item md={12} className="user-list-block">
								<Grid container className="user-list-main h-100">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">DRIVER SAFETY SCORE BOARD</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom h-calc-100-60">
										<Grid container spacing={3} className="user-list-main-block h-100">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ height: '100%' }}
												option={{
													...driver_safety,
													color: ['#3366CC','#D43F8D','#109618', '#FF9900'],
												}}
											/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={8} className="user-list-block">
						<Grid container className="user-list-main">
							<Grid item md={12} className="user-list-block search-form">
								<Grid container className="user-list-main">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">TOP 5 AGGRESSIVE DRIVERS</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom">
										<Grid container spacing={3} className="user-list-main-block">
											<Grid item md={12} className="user-list-normal overflow-scroll">
												<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
													<Grid container className="user-list-main-block">
														<Grid item md={6} className="user-list-normal overflow-scroll">
															<label>Month</label>
															<AutoComplete
																className="dropdown gm-t-10 mar-b-0"
																fullWidth
																options={month_opt}
																renderInput={(params) => (
																	<TextField
																		{...params}
																		className="search-dropdown custom-input mar-b-0"
																		label="Select"
																		name="vehicle"
																		placeholder="Select"
																	/>
																)}
															/>
														</Grid>
														<Grid item md={6} className="user-list-normal overflow-scroll">
															<label>Year</label>
															<AutoComplete
																className="dropdown gm-t-10 mar-b-0"
																fullWidth
																options={year_opt}
																renderInput={(params) => (
																	<TextField
																		{...params}
																		className="search-dropdown custom-input mar-b-0"
																		label="Select"
																		name="vehicle"
																		placeholder="Select"
																	/>
																)}
															/>
														</Grid>
													</Grid>
												</ValidatorForm>
											<ReactEcharts
												style={{ width: '100%' }}
												option={{
													...aggr_driver,
													color: ['#25467B', '#00ADEF', '#8FC936'],
												}}
											/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main gm-t-10">
					<Grid item md={12} className="user-list-block">
						<Grid container className="user-list-main search-form">
							<Grid item md={12} className="user-list-block user-list-top-bar">
								<h4 className="font-16">LOG INCIDENT</h4>
							</Grid>
							<Grid item md={12} className="user-list-bottom mar-b-0">
								<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
									<Grid container spacing={3} className="search-form-main">
										<Grid item md={3} className="search-form-block">
											<label>Search</label>
											<TextField
												type="text"
												name="name"
												id="name"
												label="Search"
												placeholder="Search"
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>
										<Grid item md={3} className="search-form-block  p-top-respo-driver">
											<label>Driver</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={driveropt}
												renderInput={(params) => (
												<TextField
													{...params}
													className="search-dropdown custom-input status-respo-width"
													label="Select"
													name="driver"
													placeholder="Select"
												/>
												)}
											/>
										</Grid>
										<Grid
											item
											md={3}
											sx={{ display: "flex" }}
											className="search-form-block respo-w-100 p-top-respo-driver"
										>
											<Grid>
												<label>Date</label>
												<DatePicker
												className="gm-t-10 grey-bg date-custom date-1"
												placeholderText="DD-MM-YYYY"
												name="dateofBirth"
												value={formdata.dateofBirth || ""}
												onChange={(value, name) =>
													handleDateChange(value, "dateofBirth")
												}
												/>
											</Grid>
											<Grid sx={{ marginTop: "21px" }} >
												<DatePicker
												className="gm-t-6 grey-bg date-custom date-1"
												placeholderText="DD-MM-YYYY"
												name="dateofBirth"
												value={formdata.dateofBirth || ""}
												onChange={(value, name) =>
													handleDateChange(value, "dateofBirth")
												}
												/>
											</Grid>
										</Grid>
										<Grid item md={3} className="search-form-block  p-top-respo-driver">
											<label>Incident</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={incidentopt}
												renderInput={(params) => (
												<TextField
													{...params}
													className="search-dropdown custom-input status-respo-width"
													label="Select"
													name="driver"
													placeholder="Select"
												/>
												)}
											/>
										</Grid>
									</Grid>
								</ValidatorForm>
							</Grid>
							<Grid item md={12} className="user-list-block user-list-normal">
								<table>
									<TableHead>
										<TableRow>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center">INCIDENT</TableCell>
											<TableCell className="text-center">DESCRIPTION</TableCell>
											<TableCell className="text-center">DATE</TableCell>
											<TableCell className="text-center">LOCATION</TableCell>
											<TableCell className="text-center">REPORTED BY</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className="text-center">GJ018596</TableCell>
											<TableCell>Lorem Ipsum</TableCell>
											<TableCell>Injury</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>12-05-2021</TableCell>
											<TableCell>Ahmedabad</TableCell>
											<TableCell>John Marc</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">MH018742</TableCell>
											<TableCell>John Doe</TableCell>
											<TableCell>Near miss</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>08-08-2021</TableCell>
											<TableCell>Gandhinagar</TableCell>
											<TableCell>Rohit Jain</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">JK012589</TableCell>
											<TableCell>Pratik Marc</TableCell>
											<TableCell>Accident</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>18-09-2020</TableCell>
											<TableCell>Surat</TableCell>
											<TableCell>Stephen Joy</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">BR015896</TableCell>
											<TableCell>Lorem Ipsum</TableCell>
											<TableCell>Property damage</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>22-12-2019</TableCell>
											<TableCell>Vadodra</TableCell>
											<TableCell>Marc Joe</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">HR015472</TableCell>
											<TableCell>Pratik Marc</TableCell>
											<TableCell>Theft</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>05-07-2018</TableCell>
											<TableCell>Hydrabad</TableCell>
											<TableCell>Lorem Doe</TableCell>
										</TableRow>
									</TableBody>
								</table>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main gm-t-10">
					<Grid item md={6} className="user-list-block">
						<Grid container className="user-list-main search-form h-100">
							<Grid item md={12} className="user-list-block">
								<Grid container className="user-list-main h-100">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">DRIVER QUALITY SCORE</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom h-calc-100-60 mar-b-0">
										<Grid container spacing={3} className="user-list-main-block h-100">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ height: '100%' }}
												option={{
													...driver_quality,
													color: ['#3366CC','#D43F8D','#109618'],
												}}
											/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={6} className="user-list-block">
						<Grid container className="user-list-main">
							<Grid item md={12} className="user-list-block search-form">
								<Grid container className="user-list-main">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">TOP MOST DISTRACTED DRIVERS</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom">
										<Grid container spacing={3} className="user-list-main-block">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ width: '100%' }}
												option={{
													...distracted_drivers,
													color: ['#0774F8'],
												}}
											/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default ReportsByDriver;