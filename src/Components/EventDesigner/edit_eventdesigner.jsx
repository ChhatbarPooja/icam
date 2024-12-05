import React, { useState } from "react";
import { styled } from '@mui/system'
import {
    Box,
    Grid,
    Button,
} from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/material'
import CloseBtn from '../../Assets/images/close.png'
import { useNavigate } from 'react-router-dom'
import { RadioGroup, Radio } from "react-radio-group";
import "react-datepicker/dist/react-datepicker.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabell from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';

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
const driver_opt = [
    { id: 1, label: "Driver Group 1" },
    { id: 2, label: "Driver Group 2" },
    { id: 3, label: "Driver Group 3" },
]
const event_opt = [
    { id: 1, label: "Event 1" },
    { id: 2, label: "Event 2" },
    { id: 3, label: "Event 3" },
]

const EditEventDesigner = () => {
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
    const [addmoreEventOpen, addmoreEventsetOpen] = React.useState(false);
    const addmoreEventhandleOpen = () => addmoreEventsetOpen(true);
    const addmoreEventhandleClose = () => addmoreEventsetOpen(false);

    return (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>Edit Event Designer</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span><span className="pointer" onClick={() => navigate("/event_designer")}> Event Designer /</span> Edit Event Designer </h6>
                    </Grid>
                    <Grid item md={12} className="add-user-form-block">
                        <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
                            <div className="search-form extra-padding">
                                <Grid container spacing={3} className="search-form-main">
                                    <Grid item md={12} className="user-add-block">
                                        <div className="no-border-fieldset">
                                            <Grid container spacing={3} className="search-form-main respo-pad-0-20">
                                                <Grid item md={6} className="user-add-block">
                                                    <label>Event workflow</label>
                                                    <TextField
                                                        type="text"
                                                        name="e_workflow"
                                                        id="e_workflow"
                                                        value={"ipsum"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block res-pad-t-0">
                                                    <label>Vehicle Group</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        options={vehicle_opt}
                                                        defaultValue={'Vehicle Group 1'}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                name="Select"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Driver Group</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        options={driver_opt}
                                                        defaultValue={'Driver Group 2'}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                name="Select"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Type of event</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        options={event_opt}
                                                        defaultValue={'Ipsum'}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                name="Select"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label className="d-block mar-t-24">Event workflow</label>
                                                    <FormGroup className="d-inline-block">
                                                        <FormControlLabell control={<Checkbox defaultChecked />} label="Call to action" />
                                                        <FormControlLabell control={<Checkbox defaultChecked />} label="Inform truck agent" />
                                                    </FormGroup>
                                                    <Button variant="contained" color="primary" className="whitebg custom-btn mar-l-15" type="button" onClick={addmoreEventhandleOpen}>
                                                        Add More
                                                    </Button>
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
                                <Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={() => navigate('/event_designer')}>
                                    CANCEL
                                </Button>
                            </div>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </Box>



            <Modal
                open={addmoreEventOpen}
                onClose={addmoreEventhandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box container
                    sx={{

                        width: 'auto',
                        height: 'auto',
                        padding: 0,
                    }}>

                    <Grid container spacing={4}>

                        <Grid item md={4} xs={8} className="snap-form pl-5 pd-btm">
                            <h4 className="discard-h add-event-add">
                                ADD EVENT WORKFLOW STEPS<img src={CloseBtn} className="snap-close" onClick={addmoreEventhandleClose} /></h4>
                            {/* <h6 className="font-12 font-underline event-text-align-right view-discard">View Events</h6> */}
                            <Grid container md={4} xs={11} className="fix-width b-grid">
                                <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="pd-frm">
                                    <label className="discard-txt">Event step name</label>
                                    <Grid container md={12} xs={8} className="flx-2-prt">
                                        <TextField
                                            className="discard-custom-input fix-width"
                                            id="size-small"
                                            size="small"
                                            placeholder="Enter Event step name" />
                                    </Grid>
                                    <Grid container md={12} xs={8} className="flx-2-prt top-pad">
                                        <label className="discard-txt">Description</label>
                                        <TextField
                                            className="discard-custom-input fix-width"
                                            type="text"
                                            name="Description"
                                            id="Description"
                                            placeholder="Write Here...."
                                            multiline
                                            rows={3}
                                        />

                                    </Grid>
                                    <Grid
                                        justifyContent="left"
                                        alignItems="left">

                                        <label className="radio-txt mt-3 radio-btn-txt">Event PDF Required</label>
                                        <Grid container className="mt-10 pt-15 mt-reduce">
                                            <RadioGroup name="nameRadio" className="escalate-radio mt-10 mid-radio2">
                                                <div className="">
                                                    <Radio value="active" checked={selected === 'yes'} />Yes
                                                </div>
                                                <div className="workflow-radio">
                                                    <Radio />No
                                                </div>
                                            </RadioGroup>
                                        </Grid>

                                    </Grid>

                                    <label className="discard-txt pt-15">User or user groups</label>
                                    <Grid container md={12} xs={8} className="flx-2-prt">
                                        <TextField
                                            className="discard-custom-input fix-width"
                                            id="size-small"
                                            size="small"
                                        />
                                    </Grid>
                                    <button type="button home-button" className="button1 discard-btn mar-r--10">Add</button>
                                    <button type="button contact-button" className="button1 cancel-btn red-btn-cancel" onClick={addmoreEventhandleClose}>Cancel</button>
                                </ValidatorForm>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}

export default EditEventDesigner;
