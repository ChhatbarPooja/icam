import React, { Component } from "react";
import { useState } from "react";
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
import { Autocomplete } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { RadioGroup, Radio } from "react-radio-group";
import "react-datepicker/dist/react-datepicker.css";

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertFromHTML } from 'draft-js'

import htmlToDraft from 'html-to-draftjs';

// const [state, setState] = useState('test')



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
const vehicle_opt = [
    { id: 1, label: "Vehicle 1" },
    { id: 2, label: "Vehicle 2" },
    { id: 3, label: "Vehicle 3" },
]

const EditVehicle = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('yes');
    const handleSubmitSearch = async (event) => {

    }
    const [formdata, setFormData] = useState({ dateofBirth: "" })
    const handleDateChange = (value, name) => {
        console.log(value)
        console.log(name)
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));

    }

    return (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>Vehicles</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={() => navigate('/vehicles')}>Vehicles /</span> Edit Vehicles</h6>
                    </Grid>
                    <Grid item md={12} className="add-user-form-block">
                        <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
                            <div className="search-form extra-padding">
                                <Grid container spacing={3} className="search-form-main">
                                    <Grid item md={12} className="user-add-block">
                                        <div className="no-border-fieldset">
                                            <Grid container spacing={3} className="search-form-main respo-pad-0-20">
                                                <Grid item md={6} className="user-add-block">
                                                    <label>Vehicle</label>
                                                    <TextField
                                                        type="text"
                                                        name="vehicle"
                                                        id="vehicle"
                                                        value={"Honda City (Car)"}
                                                        placeholder="Enter Vehicle name"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block res-pad-t-0">
                                                    <label>Vehicle Number</label>
                                                    <TextField
                                                        type="text"
                                                        name="vehicle_number"
                                                        id="vehicle_number"
                                                        value={"GJ017896"}
                                                        placeholder="Enter vehicle number"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Driver ID</label>
                                                    <TextField
                                                        type="text"
                                                        name="driver_id"
                                                        id="driver_id"
                                                        value={"#IC127"}
                                                        placeholder="Enter driver ID"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Driver Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="driver_name"
                                                        id="driver_name"
                                                        value={"Lorem Ipsum"}
                                                        placeholder="Enter driver name"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Device ID</label>
                                                    <TextField
                                                        type="text"
                                                        name="device_id"
                                                        id="device_id"
                                                        value={"D!-Camera01"}
                                                        placeholder="Enter Device ID"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Device Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="device_name"
                                                        id="device_name"
                                                        value={"ssgsdf fadsfa"}
                                                        placeholder="Enter Device name"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Model Number</label>
                                                    <TextField
                                                        type="text"
                                                        name="model_number"
                                                        id="model_number"
                                                        value={"8940038300"}
                                                        placeholder="Enter model number"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Model Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="model_name"
                                                        id="model_name"
                                                        value={"GHuyt56jsh"}
                                                        placeholder="Enter model name"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Manufacturer by</label>
                                                    <TextField
                                                        type="text"
                                                        name="manufacturer_by"
                                                        id="manufacturer_by"
                                                        value={"Benz"}
                                                        placeholder="Enter Manufacturer name"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Vehicle Grouping</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0 text-black"
                                                        fullWidth
                                                        options={vehicle_opt}
                                                        defaultValue={'Group1'}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg text-black"

                                                                name="Select"

                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Storage</label>
                                                    <TextField
                                                        type="text"
                                                        name="storage"
                                                        id="storage"
                                                        value={"1.7 T"}
                                                        placeholder="Enter storage capacity"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg text-black"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Status</label>
                                                    <RadioGroup name="nameRadio" value={''} className="gm-t-10 flex-content">
                                                        <div className="radio-options">
                                                            <Radio value="active" checked={selected === 'yes'} />Active
                                                        </div>
                                                        <div className="radio-options">
                                                            <Radio value="inactive" />Inactive
                                                        </div>
                                                    </RadioGroup>
                                                </Grid>
                                                <Grid item md={12} className="user-add-block pad-t-0">
                                                    <label>Description</label>
                                                    <TextField
                                                        type="text"
                                                        name="Description"
                                                        id="Description"
                                                        placeholder="Write something about driver...."
                                                        className="search-email gm-t-10 custom-input"
                                                        multiline
                                                        rows={4}
                                                        maxRows={5}
                                                        value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing"} />

                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="form-input text-left mar-t-50">
                                <Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
                                    SAVE
                                </Button>
                                <Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={() => navigate('/vehicles')}>
                                    CANCEL
                                </Button>
                            </div>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default EditVehicle;