import React from "react";
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

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const optionbyAge = {
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
		name: 'Demographics by activity',
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
		 	{ value: 53, name: 'Active' },
		 	{ value: 47, name: 'Inactive'},
		
		  
	   	]
	}]
};

const optionbytruck = {
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
		 	{ value: 16.4, name: 'Truck3' },
		 	{ value: 22.7, name: 'Truck7'},
			{ value: 22.7, name: 'Truck8'},
			{ value: 10.9, name: 'Truck9'},
			{ value: 27.3, name: 'Truck11'},
	   	]
	}]
};

const vehicle_quaity_score = {
	xAxis: {
	  	type: 'category',
	  	data: ['Vehicle2', 'Vehicle5', 'Vehicle8', 'Vehicle10', 'Vehicle13', 'Vehicle14', 'Vehicle17', 'Vehicle19', 'Vehicle20', 'Vehicle23']
	},
	yAxis: {
	  	type: 'value'
	},
	grid: { 
		top: '10',
		bottom: '20' ,
		left: '50',
		right: '50'
	},
	series: [
	  	{
			data: [140, 80, 240, 230, 190, 140, 80, 210, 260, 198],
			type: 'bar'
	  	}
	]
};

const overall_mileage = {
	xAxis: {
		type: 'category',
		data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	},
	yAxis: {
		type: 'value'
	},
	grid: { 
		top: '30',
		bottom: '20' ,
		left: '50',
		right: '50'
	},
	series: [
		{
			data: [2900, 3700, 2900, 4100, 2900, 3300, 2950, 2800, 3800, 4800, 4700, 4700, 2600, 3600],
			type: 'bar'
		}
	]
}

const vehicle_issue = {
	xAxis: {
		splitLine: {
			show: false
		},
	},
	yAxis: {
		type: 'category',
		data: ["A Sputtering Engine", "Poor Fuel Economy", "Brakes Squeaking or Grinding", "Broken Starter Motor"],
		inverse: true,
		splitLine: {
			show: false
		},
	},
	grid: { 
		top: '50',
		bottom: '70' ,
		left: '180',
		right: '50'
	},
	series: [
		{
			name: 'Number of vehicles',
			data: [125, 50, 80, 125],
			type: 'bar',
			label: {
				show: true,
				position: 'right',
			}
		}
	],
	legend: {
		show: true,
		icon: "circle",
		bottom: 0
	},
}

const veh_opt=[
    {id: 1,label:"Vehicle 1"},
    {id: 2,label:"Vehicle 2"},
	{id: 3,label:"Vehicle 3"},
]

const ReportsByVehicle=() => {
	const navigate = useNavigate()
	const handleSubmitSearch = async (event) => {

	}

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>Reports by Truck</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Reports</h6>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={8} className="user-list-block">
						<Grid container className="user-list-main">
							<Grid item md={12} className="user-list-block search-form">
								<Grid container className="user-list-main">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">TOTAL EVENTS TRIGGERED</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom">
										<Grid container spacing={3} className="user-list-main-block">
											<Grid item md={12} className="user-list-normal overflow-scroll">
												<Table>
													<TableHead>
														<TableRow>
															<TableCell className="text-center">Sr. No.</TableCell>
															<TableCell>Events</TableCell>
															<TableCell>Date</TableCell>
															<TableCell className="text-center">Vehicle</TableCell>
															<TableCell>Driver</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														<TableRow>
															<TableCell className="text-center">1</TableCell>
															<TableCell>Overspeed</TableCell>
															<TableCell>12-05-2021</TableCell>
															<TableCell className="text-center">GJ018596</TableCell>
															<TableCell>Lorem Ipsum</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="text-center">2</TableCell>
															<TableCell>Fuel Leakage</TableCell>
															<TableCell>08-08-2021</TableCell>
															<TableCell className="text-center">MH018742</TableCell>
															<TableCell>John Doe</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="text-center">3</TableCell>
															<TableCell>Tyre blast</TableCell>
															<TableCell>18-09-2020</TableCell>
															<TableCell className="text-center">JK012589</TableCell>
															<TableCell>Pratik Marc</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="text-center">4</TableCell>
															<TableCell>Zebra line crossed</TableCell>
															<TableCell>22-12-2019</TableCell>
															<TableCell className="text-center">BR015896</TableCell>
															<TableCell>Lorem Ipsum</TableCell>
														</TableRow>
														<TableRow>
															<TableCell className="text-center">5</TableCell>
															<TableCell>Sudden break</TableCell>
															<TableCell>05-07-2018</TableCell>
															<TableCell className="text-center">HR015472</TableCell>
															<TableCell>Pratik Marc</TableCell>
														</TableRow>
													</TableBody>
												</Table>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={4} className="user-list-block">
						<Grid container className="user-list-main search-form h-100">
							<Grid item md={12} className="user-list-block">
								<Grid container className="user-list-main h-100">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">VEHICLES STATUS</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom h-calc-100-60">
										<Grid container spacing={3} className="user-list-main-block h-100">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ height: '100%' }}
												option={{
													...optionbyAge,
													color: ['#3366CC','#D43F8D','#43215A'],
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
					<Grid item md={4} className="user-list-block">
						<Grid container className="user-list-main search-form h-100">
							<Grid item md={12} className="user-list-block">
								<Grid container className="user-list-main h-100">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">TOP 5 MOST ISSUES WITH TRUCKS</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom h-calc-100-60">
										<Grid container spacing={3} className="user-list-main-block h-100">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ height: '100%' }}
												option={{
													...optionbytruck,
													color: ['#3366CC','#DC3912','#FF9900', '#109618', '#990099'],
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
										<h4 className="font-16">VEHICLE QUALITY SCORE</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom">
										<Grid container spacing={3} className="user-list-main-block">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ width: '100%' }}
												option={{
													...vehicle_quaity_score,
													color: ['#3366CC'],
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
					<Grid item md={6} className="user-list-block">
						<Grid container className="user-list-main search-form h-100">
							<Grid item md={12} className="user-list-block">
								<Grid container className="user-list-main h-100">
									<Grid item md={12} className="user-list-block user-list-top-bar">
										<h4 className="font-16">TOP VEHICLES WHICH ARE CAUSING ISSUES </h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom h-calc-100-60">
										<Grid container spacing={3} className="user-list-main-block h-100">
											<Grid item md={12} className="user-list-normal overflow-scroll">
											<ReactEcharts
												style={{ height: '100%' }}
												option={{
													...vehicle_issue,
													color: ['#D90825'],
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
										<h4 className="font-16">OVERALL MILEAGE</h4>
									</Grid>
									<Grid item md={12} className="user-list-bottom">
										<Grid container spacing={3} className="user-list-main-block">
											<Grid item md={12} className="user-list-normal overflow-scroll">
												<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
													<label>Vehicles</label>
													<AutoComplete
														className="dropdown gm-t-10 mar-b-0"
														fullWidth
														options={veh_opt}
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
												</ValidatorForm>
												<ReactEcharts
													style={{ width: '100%' }}
													option={{
														...overall_mileage,
														color: ['#3366CC'],
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

export default ReportsByVehicle;