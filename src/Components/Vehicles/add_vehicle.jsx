import React, { useState, useEffect } from "react";
import { useTheme, styled } from '@mui/system'
import {
    Box,
    Grid,
    Button
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/material'
import { RadioGroup, Radio } from "react-radio-group";
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { vehicleAdd ,vehicleList,vehicleUpdate} from "../../Services/api"
import { putDataFromApi ,postDataFromApi, getDataFromApi } from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'
import AlertMessage from '../commoncomponent/AlertMessage'
import { ContentState, convertToRaw } from 'draft-js';

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
    {id: 4, name: "Tata Group"},
    {id: 3, name: "Tesla Group"}
]

const AddVehicleIndex = () => {
    const navigate = useNavigate()
    let { vehicleid } = useParams()

    const [alert, setalert] = useState(false)
    const [alertMessage, setalertMessage] = useState('')
    const [alertType, setalertType] = useState('')

    const [selected, setSelected] = useState('yes');
    let _contentState = ContentState.createFromText('');
    const raw = convertToRaw(_contentState)
    const [contentState, setContentState] = useState(raw)

    function confirm() {
        setalert(false)
        navigate('/vehicles')
    }

    const handleSubmitSearch = async (event) => {
        var response = ''
        var vehiclegrouparray = null
      
        vehicle_opt.map((opt)=>{
           if(opt.id == formdata.vehicle_grouping){
             vehiclegrouparray = {id: opt.id, name: opt.name}
           }
        })
        console.log(formdata);
        var newformdata = {
            
            vehicle: formdata.vehicle,
            vehicle_number: formdata.vehicle_number,
            driver_id: formdata.driver_id,
            driver_name: formdata.driver_name,
            device_id: formdata.device_id,
            device_name: formdata.device_name,
            model_number: formdata.model_number,
            model_name: formdata.model_name,
            manufacturer_by: formdata.manufacturer_by,
            vehicle_grouping: vehiclegrouparray,
            storage: formdata.storage,
            status: formdata.nameRadio,
            description: formdata.description
        }

        var editformdata = {
            id: formdata.id,
            vehicle: formdata.vehicle,
            vehicle_number: formdata.vehicle_number,
            driver_id: formdata.driver_id,
            driver_name: formdata.driver_name,
            device_id: formdata.device_id,
            device_name: formdata.device_name,
            model_number: formdata.model_number,
            model_name: formdata.model_name,
            manufacturer_by: formdata.manufacturer_by,
            vehicle_grouping: vehiclegrouparray,
            storage: formdata.storage,
            status: formdata.nameRadio,
            description: formdata.description
        }
        
        /* var newformdata = {
            "id": formdata.id,
            "vehicle": formdata.vehicle,
            "vehicle_number": formdata.vehicle_number,
            "driver_id": formdata.driver_id,
            "driver_name": formdata.driver_name,
            "device_id": formdata.device_id,
            "device_name": formdata.device_name,
            "model_number": formdata.model_number,
            "model_name": formdata.model_name,
            "manufacturer_by": formdata.manufacturer_by,
            "vehicle_grouping": formdata.vehicle_grouping
        }
        var editformdata = {
            id: formdata.id,
            vehicle: formdata.vehicle,
            driver_id: formdata.driver_id,
            driver_name: formdata.driver_name,
            device_id: formdata.device_id,
            device_name: formdata.device_name,
            model_number: formdata.model


        } */
        var response = ''
        if (vehicleid) {
            response = await putDataFromApi(
                vehicleUpdate+vehicleid+"/",
                editformdata
            )
        } else {
            response = await postDataFromApi(
                vehicleAdd,
                newformdata
            )
        }
        console.log('response',response)

        if(vehicleid){
            if(response && response.status==200){
                setalertMessage('Vehicle Updated successfully')
                setalert(true)
                setalertType('success')
                    
            } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')
                    
            }
        }else{
            if(response && response.status==200){
                setalertMessage('Vehicle Added successfully')
                setalert(true)
                setalertType('success')
            
            } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')
            
            }
        }

        /* console.log('newformdata', newformdata)
        if (id) {
            response = await postDataFromApi(
                vehicleUpdate,
                editformdata
            )
            console.log('edit')
        } else {
            response = await postDataFromApi(
                vehicleAdd,
                newformdata
            )
            console.log('add')
        }

        var response = ''
        response = await postDataFromApi(
            vehicleAdd,
            newformdata
        )
        if (response && response.status == 200) {
            console.log(response.data)
        } */

    }
    const [formdata, setFormData] = useState({ vehicle: "", vehicle_number: "", driver_id: "", driver_name: "", device_id: "", device_name: "", model_number: "", model_name: "", manufacturer_by: "", vehicle_grouping: "", storage: "", nameRadio: "ACTIVE", description: "" })
    const [singleVehicle, setsingleVehicle] = useState([])
    const [is_edit_loaded, set_is_edit_loaded] = useState(false)
    const handleDateChange = (value, name) => {
        console.log(value)
        console.log(name)
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }
    useEffect(() => {
        if (vehicleid) {
            getsingleVehicle();
        } else {
            set_is_edit_loaded(true)
        }
    }, [])
    const getsingleVehicle = async () => {
        var response = ''
        response = await getDataFromApi(
            vehicleList+vehicleid)
        
        console.log('test1')

        console.log(response)

        if (response && response.status == 200 && response.data != null){
            console.log('test')
            setsingleVehicle(response.data);
            console.log(response)
            console.log('singleVehicle', response.data);

            if (vehicleid) {
                var vehicledata = response.data
                setFormData((formData) => ({
                    ...formData,

                    /* ['id']: vehicledata.id, */
                    ['vehicle']: vehicledata.vehicle,
                    ['vehicle_number']: vehicledata.vehicle_number,
                    ['driver_id']: vehicledata.driver_id,
                    ['driver_name']: vehicledata.driver_name,
                    ['device_id']: vehicledata.device_id,
                    ['device_name']: vehicledata.device_name,
                    ['model_number']: vehicledata.model_number,
                    ['model_name']: vehicledata.model_name,
                    ['manufacturer_by']: vehicledata.manufacturer_by,
                    ['vehicle_grouping']: vehicledata.vehicle_grouping ? vehicledata.vehicle_grouping.id : '',
                    ['storage']: vehicledata.storage,
                    ['status']: vehicledata.status,
                    ['description']: vehicledata.description

                }))
                setTimeout(() => {
                        set_is_edit_loaded(true) 
                }, 500);

            }
        }
    }

    function formdataValueChange(e) {
        var value = e.target.value.trimStart()
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: value,
        }));
    }
    function changeDropdownValue(type, e) {
        if (e) {
            var value = e.id
        } else {
            var value = ""
        }
        setFormData((formData) => ({
            ...formData,
            [type]: value,
        }));
    }

    const onEditorStateChange = (editorState) => {
        console.log(editorState.getCurrentContent());

    };
    function getSelectedItem(id, data = [], multiple = '', label = '') {
        const item = data.find((opt) => {
            if (label) {
                if (opt.label == id) return opt
            } else {
                if (opt.id == id) return opt
            }
        })
        if (multiple) {
            return item || []
        } else {
            return item || null
        }
    }

    return is_edit_loaded ? (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <AlertMessage
                    alert={alert}
                    alertMessage={alertMessage}
                    confirm={confirm}
                    alertType={alertType}
                />
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>{vehicleid ? 'Edit Vehicle' : 'Add Vehicle'}</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span><span className="pointer" onClick={() => navigate('/vehicles')}> Vehicles / {vehicleid ? 'Edit Vehicle' : 'Add Vehicle'}</span> </h6>
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
                                                        label="Enter Vehicle name"
                                                        placeholder="Enter Vehicle name"
                                                        value={formdata.vehicle || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block res-pad-t-0">
                                                    <label>Vehicle Number</label>
                                                    <TextField
                                                        type="text"
                                                        name="vehicle_number"
                                                        id="vehicle_number"
                                                        label="Enter vehicle number"
                                                        placeholder="Enter vehicle number"
                                                        value={formdata.vehicle_number || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Driver ID</label>
                                                    <TextField
                                                        type="text"
                                                        name="driver_id"
                                                        id="driver_id"
                                                        label="Enter driver ID"
                                                        placeholder="Enter driver ID"
                                                        value={formdata.driver_id || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        validators={['required']}
                                                        errorMessages={['this field is required']}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Driver Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="driver_name"
                                                        id="driver_name"
                                                        label="Enter driver name"
                                                        placeholder="Enter driver name"
                                                        value={formdata.driver_name || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Device ID</label>
                                                    <TextField
                                                        type="text"
                                                        name="device_id"
                                                        id="device_id"
                                                        label="Enter Device ID"
                                                        placeholder="Enter Device ID"
                                                        value={formdata.device_id || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Device Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="device_name"
                                                        id="device_name"
                                                        label="Enter Device name"
                                                        placeholder="Enter Device name"
                                                        value={formdata.device_name || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Model Number</label>
                                                    <TextField
                                                        type="text"
                                                        name="model_number"
                                                        id="model_number"
                                                        label="Enter model number"
                                                        placeholder="Enter model number"
                                                        value={formdata.model_number || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Model Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="model_name"
                                                        id="model_name"
                                                        label="Enter model name"
                                                        placeholder="Enter model name"
                                                        value={formdata.model_name || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Manufacturer by</label>
                                                    <TextField
                                                        type="text"
                                                        name="manufacturer_by"
                                                        id="manufacturer_by"
                                                        label="Enter Manufacturer name"
                                                        placeholder="Enter Manufacturer name"
                                                        value={formdata.manufacturer_by || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Vehicle Grouping</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        defaultValue={getSelectedItem(
                                                            formdata.vehicle_grouping,
                                                            vehicle_opt
                                                        )}
                                                        getOptionLabel={(option) => option.name}
                                                        options={vehicle_opt}
                                                        onChange={(event, value) => changeDropdownValue('vehicle_grouping', value)}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                label="Select"
                                                                name="vehicle_grouping"
                                                                placeholder="Select"
                                                                value={formdata.vehicle_grouping || ''}
                                                                /* validators={['required']}
                                                                errorMessages={['this field is required']} */
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
                                                        label="Enter storage capacity"
                                                        placeholder="Enter storage capacity"
                                                        value={formdata.storage || ''}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
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
                                                        name="description"
                                                        id="description"
                                                        value={formdata.description}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        multiline
                                                        rows={5}
                                                    />
                                                    {/* <Editor
                                                        wrapperClassName="custom-editor no-toolbar gm-t-10"
                                                        toolbar={{ options: ['inline'] }}
                                                        placeholder="Enter description"
                                                    /> */}
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
    ) : (
        ''
    )
}

export default AddVehicleIndex;
