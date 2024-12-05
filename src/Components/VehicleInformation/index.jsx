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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/lab'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker"
import GoogleMapReact from 'google-map-react';


const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const vehicleopt=[
    {id: 1,label:"Vehicle 1"},
    {id: 2,label:"Vehicle 2"},
    {id: 3,label:"Vehicle 3"},
]
const placeopt=[
    {id: 1,label:"Place 1"},
    {id: 2,label:"Place 2"},
    {id: 3,label:"Place 3"},
]
const statusopt=[
    {id: 1,label:"Active"},
    {id: 2,label:"Inactive"},
]
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const VehicleinformationIndex=() => {
	const navigate = useNavigate()
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
					<Grid item md={6} className="main-title">
						<h4>Vehicle location</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> Vehicle location</h6>
					</Grid>
				</Grid>
				<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="normal-form">
					<Grid container spacing={3} className="search-form-main">
						<Grid item md={3} className="search-form-block">
                            <label>Start Date</label>
							<DatePicker
                                className="gm-t-10 grey-bg date-custom pdr-2"
                                placeholderText="DD-MM-YYYY"
                                name="dateofBirth"
                                value={formdata.dateofBirth || ''}
                                onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block res-pad-t-0">
							<label>End Date</label>
							<DatePicker
                                className="gm-t-10 grey-bg date-custom pdr-2"
                                placeholderText="DD-MM-YYYY"
                                name="dateofBirth"
                                value={formdata.dateofBirth || ''}
                                onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block respo-pad-t pd-lt-52">
							<label>Vehicle</label>
							<AutoComplete
                                className="dropdown gm-t-10 respo-m-w mx-w-100"
                                fullWidth
                                options={vehicleopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input respo-pad-t respo-wd"
                                        label="Select"
                                        name="vehicle"
                                        placeholder="Select"
                                    />
                                )}
                            />
						</Grid>
						<Grid item md={3} className="search-form-block respo-pad-t pd-lt-52  ">
							<label>Place</label>
							<AutoComplete
                                className="dropdown gm-t-10 respo-m-w mx-w-100"
                                fullWidth
                                options={placeopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input respo-wd"
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
            </Box>
		</>
	)
}

export default VehicleinformationIndex;