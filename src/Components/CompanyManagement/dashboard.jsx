import React, { useState } from "react";
import { useTheme, styled } from "@mui/system";
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
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { Autocomplete } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ArrowRightAltIcon from "../../Assets/images/Arrow-right.png";
import people from "../../Assets/images/people.png";
import DatePicker from "react-datepicker"
import GoogleMapReact from 'google-map-react';
import Eye from "../../Assets/images/Vector.png"
import Dots from "../../Assets/images/dots.png"
import Trash from "../../Assets/images/trash.png"
import Pencil from "../../Assets/images/Pencil.png"

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: "16px",
}));
const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
const placeopt = [
	{ id: 1, label: "Place 1" },
	{ id: 2, label: "Place 2" },
	{ id: 3, label: "Place 3" },
];
const modelopt = [
	{ id: 1, label: "Driver" },
	{ id: 2, label: "Vehicle" },
];
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const DashboardIndex = () => {
    const navigate = useNavigate();
    const [age, setAge] = React.useState("");
    const [formdata, setFormData] = useState({ dateofBirth: "" })
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
                    <Grid item md={6} className="main-title">
                        <h4>DASHBOARD</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6>
                        <span className="pointer" onClick={() => navigate("/dashboard")}>
                            Home /
                        </span>{" "}
                        Dashboard
                        </h6>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={3}>
                        <Card sx={{ minWidth: 150 }} className="card-container">
                            <CardContent>
                                <div className="d-flex-row">
                                <img src={people} className="people-img" />
                                <div className="d-flex text-align">
                                    <span className="font-14 black-color">NO. OF COMPANIES</span>
                                    <span className="font-25 font-bold">
                                    <b>256</b>
                                    </span>
                                </div>
                                </div>
                            </CardContent>
                            <div className="d-flex-row icon-div">
                                <CardActions>
                                    <Button size="small">View All</Button>
                                </CardActions>
                                <IconButton size="large" className="arrow-icon">
                                    <img src={ArrowRightAltIcon}/>
                                </IconButton>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card sx={{ minWidth: 150 }} className="card-container">
                            <CardContent>
                                <div className="d-flex-row">
                                    <img src={people} className="people-img" />
                                    <div className="d-flex text-align">
                                        <span className="font-14 black-color">TOTAL EVENTS</span>
                                        <span className="font-25 font-bold">
                                            <b>18656</b>
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <div className="d-flex-row icon-div">
                                <CardActions>
                                    <Button size="small">View All</Button>
                                </CardActions>
                                <IconButton size="large" className="arrow-icon">
                                    <img src={ArrowRightAltIcon}/>
                                </IconButton>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card sx={{ minWidth: 150 }} className="card-container">
                            <CardContent>
                                <div className="d-flex-row">
                                <img src={people} className="people-img" />
                                <div className="d-flex text-align">
                                    <span className="font-14 black-color">TOTAL VEHICLES</span>
                                    <span className="font-25 font-bold">
                                    <b>12565</b>
                                    </span>
                                </div>
                                </div>
                            </CardContent>
                            <div className="d-flex-row icon-div">
                                <CardActions>
                                <   Button size="small">View All</Button>
                                </CardActions>
                                <IconButton size="large" className="arrow-icon">
                                    <img src={ArrowRightAltIcon}/>
                                </IconButton>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card sx={{ minWidth: 150 }} className="card-container">
                            <CardContent>
                                <div className="d-flex-row">
                                <img src={people} className="people-img" />
                                <div className="d-flex text-align">
                                    <span className="font-14 black-color">TOTAL DRIVERS</span>
                                    <span className="font-25 font-bold">
                                    <b>18670</b>
                                    </span>
                                </div>
                                </div>
                            </CardContent>
                            <div className="d-flex-row icon-div">
                                <CardActions>
                                    <Button size="small">View All</Button>
                                </CardActions>
                                <IconButton size="large" className="arrow-icon">
                                    <img src={ArrowRightAltIcon}/>
                                </IconButton>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="normal-form mar-t-50">
					<Grid container spacing={3} className="search-form-main">
						<Grid item md={3} className="search-form-block">
                            <label>Start Date</label>
							<DatePicker
                                className="gm-t-10 grey-bg date-custom pdr-2 cust-width"
                                placeholderText="DD-MM-YYYY"
                                name="dateofBirth"
                                value={formdata.dateofBirth || ''}
                                onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block res-pad-t-0">
							<label>End Date</label>
							<DatePicker
                                className="gm-t-10 grey-bg date-custom pdr-2 cust-width"
                                placeholderText="DD-MM-YYYY"
                                name="dateofBirth"
                                value={formdata.dateofBirth || ''}
                                onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block">
							<label>Places</label>
							<AutoComplete
                                className="dropdown gm-t-10 w-100"
                                fullWidth
                                options={placeopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input"
                                        label="Select"
                                        name="vehicle"
                                        placeholder="Select"
                                    />
                                )}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block res-pad-t-0">
							<label>Models</label>
							<AutoComplete
                                className="dropdown gm-t-10 w-100"
                                fullWidth
                                options={modelopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input"
                                        label="Select"
                                        name="model"
                                        placeholder="Select"
                                    />
                                )}
                            />
						</Grid>				
					</Grid>
				</ValidatorForm>
                <Grid container spacing={3} className="search-form-main">
					<Grid item md={12} className="search-form-block">
                        <div style={{ height: '100vh', width: '100%' }}>
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
                </Grid>
                <Grid container spacing={3} className="user-list-main mar-t-24">
					<Grid item md={12} className="user-list-block">
						<div className="user-list-start">
							<div className="user-list-top-bar">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={6} className="main-title-user respo-w-fit">
										<h4 className="font-14">LIST OF VEHICLES</h4>
									</Grid>
									<Grid item md={6} className="view-all-user respo-w-fit respo-mar-l-auto">
										<h6 className="font-grey font-12 font-underline text-align-right">View all</h6>
									</Grid>
								</Grid>
							</div>
							<div className="user-list-bottom">
								<Grid container spacing={3} className="user-list-main-block">
									<Grid item md={12} className="user-list-right">
										<div className="tab-overflow-scroll overflow-scroll">
											<Table>
												<TableHead>
													<TableRow>
														<TableCell>Sr. No.</TableCell>
														<TableCell>Vehicles</TableCell>
														<TableCell>Vehicles Number</TableCell>
														<TableCell>Camera Device</TableCell>
														<TableCell>Camera Model No.</TableCell>
														<TableCell>Kilometers</TableCell>
														<TableCell>Mileage</TableCell>
														<TableCell>Location</TableCell>
														<TableCell>Status</TableCell>
														<TableCell>Action</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<TableRow>
														<TableCell className="text-center">1</TableCell>
														<TableCell>Honda City (Car)</TableCell>
														<TableCell>GJ017896</TableCell>
														<TableCell>D!-Camera01</TableCell>
														<TableCell className="text-center">GHuyt5678</TableCell>
														<TableCell>58,963 Km</TableCell>
														<TableCell>90 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="active-ta font-12">Active</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">2</TableCell>
														<TableCell>Ecco (Van)</TableCell>
														<TableCell>MH035896</TableCell>
														<TableCell>D2-Camera02</TableCell>
														<TableCell className="text-center">GHuyt56jshi</TableCell>
														<TableCell>76,963 Km</TableCell>
														<TableCell>87 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="inactive-ta font-12">Inactive</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">3</TableCell>
														<TableCell>Travels (Bus)</TableCell>
														<TableCell>JK5258974</TableCell>
														<TableCell>D3-Camera03</TableCell>
														<TableCell className="text-center">cgushbhfm</TableCell>
														<TableCell>57,853 Km</TableCell>
														<TableCell>76 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="inactive-ta font-12">Inactive</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">4</TableCell>
														<TableCell>Honda Amaze (Car)</TableCell>
														<TableCell>GJ018596</TableCell>
														<TableCell>D1-Camera02</TableCell>
														<TableCell className="text-center">Frtdghb789</TableCell>
														<TableCell>38,863 Km</TableCell>
														<TableCell>82 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="active-ta font-12">Active</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">5</TableCell>
														<TableCell>Truck</TableCell>
														<TableCell>MH035894</TableCell>
														<TableCell>D1-Camera03</TableCell>
														<TableCell className="text-center">456gtybffgv</TableCell>
														<TableCell>25,893 Km</TableCell>
														<TableCell>52 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="active-ta font-12">Active</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">6</TableCell>
														<TableCell>School Van</TableCell>
														<TableCell>GA581258</TableCell>
														<TableCell>D2-Camera02</TableCell>
														<TableCell className="text-center">Gh6754hdsh</TableCell>
														<TableCell>74,263 Km</TableCell>
														<TableCell>35 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="inactive-ta font-12">Inactive</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">7</TableCell>
														<TableCell>Truck</TableCell>
														<TableCell>MH035894</TableCell>
														<TableCell>D1-Camera03</TableCell>
														<TableCell className="text-center">456gtybffgv</TableCell>
														<TableCell>38,258 Km</TableCell>
														<TableCell>25 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="active-ta font-12">Active</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">8</TableCell>
														<TableCell>School Van</TableCell>
														<TableCell>GA581258</TableCell>
														<TableCell>D2-Camera02</TableCell>
														<TableCell className="text-center">Gh6754hdsh</TableCell>
														<TableCell>58,963 Km</TableCell>
														<TableCell>25 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="inactive-ta font-12">Inactive</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">9</TableCell>
														<TableCell>Truck</TableCell>
														<TableCell>MH035894</TableCell>
														<TableCell>D1-Camera03</TableCell>
														<TableCell className="text-center">456gtybffgv</TableCell>
														<TableCell>58,963 Km</TableCell>
														<TableCell>33 KMPH</TableCell>
														<TableCell><Button className="table-button">View Map</Button></TableCell>
														<TableCell className="text-center"><span className="active-ta font-12">Active</span></TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/vehicles/edit_vehicle')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</div>
									</Grid>
								</Grid>
							</div>
						</div>
					</Grid>
				</Grid>
            </Box>
        </>
    )
}

export default DashboardIndex;