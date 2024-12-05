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
import { Autocomplete } from '@mui/lab'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DatePicker from "react-datepicker";
import Switch from "react-switch";

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const eventopt = [
	{ id: 1, label: "Event 1" },
	{ id: 2, label: "Event 2" },
	{ id: 3, label: "Event 3" },
];
const classopt = [
	{ id: 1, label: "Driver" },
	{ id: 2, label: "Vehicle" },
];

const ReportsByUser=() => {
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
						<h4>Reports by Users</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Reports</h6>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={12} className="user-list-block">
						<Grid container className="user-list-main search-form">
							<Grid item md={12} className="user-list-block user-list-top-bar">
								<h4 className="font-16">USER EVENTS</h4>
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
											<label>Events</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={eventopt}
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
											<label>Classification</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={classopt}
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
											<TableCell className="text-center">SR. NO.</TableCell>
											<TableCell className="text-center">EVENTS</TableCell>
											<TableCell className="text-center">DESCRIPTION</TableCell>
											<TableCell className="text-center">DATE</TableCell>
											<TableCell className="text-center">CLASSIFICATION</TableCell>
											<TableCell className="text-center">STATUS</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className="text-center">1</TableCell>
											<TableCell>Overspeed</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>12-05-2021</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="active-ta font-12 font-600">Actioned</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">2</TableCell>
											<TableCell>Fuel Leakage</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>08-08-2021</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><span className="inactive-tab font-12 font-600">Discarded</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">3</TableCell>
											<TableCell>Zebra line crossed</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>18-09-2020</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="esc-tab font-12 font-600">Escalated</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">4</TableCell>
											<TableCell>Tyre blast</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>12-22-2019</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><span className="inactive-tab font-12 font-600">Discarded</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">5</TableCell>
											<TableCell>Signal break</TableCell>
											<TableCell>The ct is a long established fact that a reader will be distracted by the readable content.</TableCell>
											<TableCell>05-07-2018</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="esc-tab font-12 font-600">Escalated</span></TableCell>
										</TableRow>
									</TableBody>
								</table>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main gm-t-10">
					<Grid item md={12} className="user-list-block">
						<Grid container className="user-list-main search-form">
							<Grid item md={12} className="user-list-block user-list-top-bar">
								<h4 className="font-16">EVENTS STATUS</h4>
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
											<label>Events</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={eventopt}
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
											<label>Classification</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={classopt}
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
											<TableCell className="text-center">SR. NO.</TableCell>
											<TableCell className="text-center">EVENTS</TableCell>
											<TableCell className="text-center">PRIORITY</TableCell>
											<TableCell className="text-center">DATE</TableCell>
											<TableCell className="text-center">CLASSIFICATION</TableCell>
											<TableCell className="text-center">STATUS</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className="text-center">1</TableCell>
											<TableCell>Overspeed</TableCell>
											<TableCell className="text-center"><span className="red-priority">P1</span></TableCell>
											<TableCell>12-05-2021</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="active-ta font-12 font-600">Completed</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">2</TableCell>
											<TableCell>Fuel Leakage</TableCell>
											<TableCell className="text-center"><span className="green-priority">P0</span></TableCell>
											<TableCell>08-08-2021</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><span className="esc-tab font-12 font-600">Inprocess</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">3</TableCell>
											<TableCell>Zebra line crossed</TableCell>
											<TableCell className="text-center"><span className="blue-priority">P3</span></TableCell>
											<TableCell>18-09-2020</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="esc-tab font-12 font-600">Inprocess</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">4</TableCell>
											<TableCell>Tyre blast</TableCell>
											<TableCell className="text-center"><span className="orange-priority">P2</span></TableCell>
											<TableCell>12-22-2019</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><span className="active-ta font-12 font-600">Completed</span></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">5</TableCell>
											<TableCell>Signal break</TableCell>
											<TableCell className="text-center"><span className="red-priority">P1</span></TableCell>
											<TableCell>05-07-2018</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><span className="active-ta font-12 font-600">Completed</span></TableCell>
										</TableRow>
									</TableBody>
								</table>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main gm-t-10">
					<Grid item md={12} className="user-list-block">
						<Grid container className="user-list-main search-form">
							<Grid item md={12} className="user-list-block user-list-top-bar">
								<h4 className="font-16">EVENTS STATUS</h4>
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
											<label>Events</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={eventopt}
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
											<label>Classification</label>
											<AutoComplete
												className="dropdown gm-t-10"
												fullWidth
												options={classopt}
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
											<TableCell className="text-center">SR. NO.</TableCell>
											<TableCell className="text-center">EVENTS</TableCell>
											<TableCell className="text-center">PRIORITY</TableCell>
											<TableCell className="text-center">DATE</TableCell>
											<TableCell className="text-center">CLASSIFICATION</TableCell>
											<TableCell className="text-center">ACCIDENT</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className="text-center">1</TableCell>
											<TableCell>Overspeed</TableCell>
											<TableCell className="text-center"><span className="red-priority">P1</span></TableCell>
											<TableCell>12-05-2021</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">2</TableCell>
											<TableCell>Fuel Leakage</TableCell>
											<TableCell className="text-center"><span className="green-priority">P0</span></TableCell>
											<TableCell>08-08-2021</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">3</TableCell>
											<TableCell>Zebra line crossed</TableCell>
											<TableCell className="text-center"><span className="blue-priority">P3</span></TableCell>
											<TableCell>18-09-2020</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">4</TableCell>
											<TableCell>Tyre blast</TableCell>
											<TableCell className="text-center"><span className="orange-priority">P2</span></TableCell>
											<TableCell>12-22-2019</TableCell>
											<TableCell className="text-center">VEHICLE</TableCell>
											<TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
										</TableRow>
										<TableRow>
											<TableCell className="text-center">5</TableCell>
											<TableCell>Signal break</TableCell>
											<TableCell className="text-center"><span className="red-priority">P1</span></TableCell>
											<TableCell>05-07-2018</TableCell>
											<TableCell className="text-center">DRIVER</TableCell>
											<TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
										</TableRow>
									</TableBody>
								</table>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default ReportsByUser;