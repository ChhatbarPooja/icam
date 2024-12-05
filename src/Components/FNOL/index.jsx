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
import { Autocomplete } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import EventImage from "../../Assets/images/event.png"
import CloseBtn from '../../Assets/images/close.png'
import 'rc-tree/assets/index.css'
import DatePicker from "react-datepicker"
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Eye from "../../Assets/images/Vector.png";
import Trash from "../../Assets/images/trash.png";
import Pencil from "../../Assets/images/Pencil.png";
import Switch from "react-switch";
import Modal from '@mui/material/Modal';
import ModalImg from '../../Assets/images/modal-img.png';


const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const vehicleopt = [
    { id: 1, label: "Vehicle 1" },
    { id: 2, label: "Vehicle 2" },
    { id: 3, label: "Vehicle 3" },
    { id: 3, label: "Vehicle 3" },
]
const modelopt = [
    { id: 1, label: "Model 1" },
    { id: 2, label: "Model 2" },
    { id: 3, label: "Model 3" },
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
    { id: 3, label: "Mobile Usage" }
]
const cameradeviceopt = [
    { id: 1, label: "D1-Camera01" },
    { id: 2, label: "D1-Camera02" },
    { id: 3, label: "D2-Camera01" },
    { id: 3, label: "D2-Camera02" },
    { id: 3, label: "D3-Camera01" }
]
const priorityopt = [
    { id: 1, label: "P0" },
    { id: 2, label: "P1" },
    { id: 3, label: "P2" },
    { id: 3, label: "P3" },
];



const FNOLIndex = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('yes');
    const [startDate, setStartDate] = useState(new Date());
    const [formdata, setFormData] = useState({ dateofBirth: "", workflow: "" })
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    // const [eventOpen, eventsetOpen] = React.useState(false);
    // const eventhandleOpen = () => eventsetOpen(true);
    // const eventhandleClose = () => eventsetOpen(false);


    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };



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

    return (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4 className="mt-5 mb-5 font-700">Accident and Loss Events</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6 className="mt-5"><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Events</h6>
                    </Grid>
                </Grid>
                <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="search-form rspd20 mt-5" >
                    <Grid container spacing={3} className="search-form-main">
                        <Grid item md={3} className="search-form-block ">
                            <label className="acci-event-label">Vehicle</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={vehicleopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="vehicle"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Location</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={modelopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="model"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} sx={{ display: 'flex' }} className="search-form-block respo-w-100 respo-pad-t">
                            <Grid>
                                <label className="acci-event-label">Date</label>
                                <DatePicker
                                    className="gm-t-10 grey-bg date-custom pdr-2"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>

                            <Grid sx={{ marginTop: '21px' }} className="respo-date" xs={8}>

                                <DatePicker
                                    className="gm-t-6 grey-bg date-custom res-margin-b-00 lft"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Event Group</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={priorityopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="status"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>

                    </Grid>
                    <Grid container spacing={3} className="search-form-main respo-pad-t">
                        <Grid item md={3} className="search-form-block">
                            <label className="acci-event-label">Event</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={eventopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="vehicle"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Camera Device</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={cameradeviceopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="model"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Driver</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={statusopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="search-dropdown custom-input res-margin-b-00"
                                        label="Select"
                                        name="status"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} sx={{ display: 'flex' }} className="search-form-block respo-w-100 respo-pad-t">
                            <Grid className="pt-30">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Video Only" />

                                </FormGroup>
                            </Grid>

                            <Grid sx={{ marginTop: '36px' }}>
                                <Button variant="contained" color="primary" className="whitebg custom-btn pr-0" type="submit">
                                    Search
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid container spacing={3} className="user-list-main-block pt-20 acci-pl-20">
                    <Grid item md={12} className=" acci-event-list-right event-search-form respo-event-search-form " >
                        <h4 className="pall-10">Accident Events</h4>
                        <Table className="accident-user-list-right">
                            <TableHead className="b-border">
                                <TableRow className="acci-table-row">
                                    <TableCell className="acci-snap">SNAP</TableCell>
                                    <TableCell className="acci-event">EVENTS</TableCell>
                                    <TableCell className="acci-status">STATUS</TableCell>
                                    <TableCell>ACTION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="table-border">
                                <TableRow>
                                    <TableCell>
                                        <div><img src={EventImage} className="acci-event-image" alt="" onClick={handleOpen}></img></div>
                                    </TableCell>
                                    <TableCell>
                                        <p className="event-p1">Short brake event (Event heading)</p>
                                        <p className="acci-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018965 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 12, 2021 12:00 PM </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="acci-progress">65%</div>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <p className="justify pl-20"><span className="eye-icon"><img className="table-icons" src={Eye} /></span><img className="table-icons pointer pl-20" src={Pencil} /><img className="table-icons pointer pl-20" src={Trash} /></p>
                                    </TableCell>
                                </TableRow>


                                <TableRow className="row-bg-color">
                                    <TableCell><img src={EventImage} className="acci-event-image" onClick={handleOpen} alt=""></img></TableCell>
                                    <TableCell >
                                        <p className="event-p1">Overspeed Event</p>
                                        <p className="acci-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018966 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="acci-progress1">100%</div>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <p className="justify pl-20"><span className="eye-icon"><img className="table-icons" src={Eye} /></span><img className="table-icons pointer pl-20" src={Pencil} /><img className="table-icons pointer pl-20" src={Trash} /></p>
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} className="acci-event-image" onClick={handleOpen} alt=""></img></TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Overspeed Event</p>
                                        <p className="acci-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018966 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="acci-progress1">100%</div>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <p className="justify pl-20"><span className="eye-icon"><img className="table-icons" src={Eye} /></span><img className="table-icons pointer pl-20" src={Pencil} /><img className="table-icons pointer pl-20" src={Trash} /></p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="search-form rspd20 mt-5" >
                    <Grid container spacing={3} className="search-form-main">
                        <h4 className="pl-20">ACCIDENT EVENT REPORT</h4><h4 className="b-border-report"></h4>
                        <Grid item md={3} className="search-form-block ">
                            <label className="acci-event-label">Search</label>
                            <TextField
                                className=" custom-input res-margin-b-00 gm-t-10 w10"
                                label="Search..."
                                name="vehicle"
                                placeholder="Search..." />


                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Events</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10"
                                fullWidth
                                options={modelopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="custom-input res-margin-b-00"
                                        label="Select"
                                        name="model"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} sx={{ display: 'flex' }} className="search-form-block respo-w-100 respo-pad-t">
                            <Grid>
                                <label className="acci-event-label">Date</label>
                                <DatePicker
                                    className="gm-t-10  date-custom pdr-2"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>

                            <Grid sx={{ marginTop: '21px' }} className="respo-date" xs={8}>

                                <DatePicker
                                    className="gm-t-6 date-custom res-margin-b-00 lft"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="acci-event-label">Classifications</label>
                            <AutoComplete
                                className="dropdown gm-t-10 w10 w-100"
                                fullWidth
                                options={priorityopt}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        className="custom-input res-margin-b-00"
                                        label="Select"
                                        name="status"
                                        placeholder="Select"
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item md={12} className="accident-user-list-right">
                            <div className="tab-overflow-scroll overflow-scroll">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>SR.NO.</TableCell>
                                            <TableCell>EVENTS</TableCell>
                                            <TableCell>PRIORITY</TableCell>
                                            <TableCell>DATE</TableCell>
                                            <TableCell>CLASSIFICATION</TableCell>
                                            <TableCell>ACCIDENT</TableCell>

                                        </TableRow>

                                    </TableHead>
                                    <TableBody className="txt-gray">
                                        <TableRow className="txt-gray">
                                            <TableCell className="text-center txt-gray border-left">1</TableCell>
                                            <TableCell className="txt-gray">Overspeed</TableCell>
                                            <TableCell><Grid className="acci-priority1"><h6 className="event-h6">P1</h6></Grid></TableCell>
                                            <TableCell className="txt-gray text-center">12-5-2021</TableCell>
                                            <TableCell className="txt-gray text-center">DRIVER</TableCell>
                                            <TableCell><Switch size="small" checked uncheckedIcon checkedIcon className="acci-switch" /></TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-center txt-gray border-left">2</TableCell>
                                            <TableCell className="txt-gray">Fuel Leakage</TableCell>
                                            <TableCell><Grid className="acci-priority2"><h6 className="event-h6">P0</h6></Grid></TableCell>
                                            <TableCell className="txt-gray text-center">08-8-2021</TableCell>
                                            <TableCell className="txt-gray text-center">VEHICLE</TableCell>
                                            <TableCell><Switch size="small" checked uncheckedIcon checkedIcon className="acci-switch" /></TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-center txt-gray border-left">3</TableCell>
                                            <TableCell className="txt-gray">Zebra line crossed</TableCell>
                                            <TableCell><Grid className="acci-priority3"><h6 className="event-h6">P3</h6></Grid></TableCell>
                                            <TableCell className="txt-gray text-center">18-9-2020</TableCell>
                                            <TableCell className="txt-gray text-center">DRIVER</TableCell>
                                            <TableCell><Switch size="small" checked uncheckedIcon checkedIcon className="acci-switch" /></TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-center txt-gray border-left">4</TableCell>
                                            <TableCell className="txt-gray">Tyre blast</TableCell>
                                            <TableCell><Grid className="acci-priority4"><h6 className="event-h6">P2</h6></Grid></TableCell>
                                            <TableCell className="txt-gray text-center">22-12-2019</TableCell>
                                            <TableCell className="txt-gray text-center">VEHICLE</TableCell>
                                            <TableCell><Switch size="small" checked uncheckedIcon checkedIcon className="acci-switch" /></TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="text-center txt-gray border-left">5</TableCell>
                                            <TableCell className="txt-gray">Signal break</TableCell>
                                            <TableCell ><Grid className="acci-priority1"><h6 className="event-h6">P1</h6></Grid></TableCell>
                                            <TableCell className="txt-gray text-center">05-7-2018</TableCell>
                                            <TableCell className="txt-gray text-center">DRIVER</TableCell>
                                            <TableCell><Switch size="small" checked uncheckedIcon checkedIcon className="acci-switch" /></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </Grid>
                    </Grid>
                </ValidatorForm>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box container
                        sx={{
                            width: 'auto',
                            height: 'auto',
                            padding: 0,
                        }}>

                        <Grid container spacing={4} className="pl-20">
                            <Grid item md={4} xs={10} className="snap-form pl-20">
                                <h4 className="snap-h">
                                    SNAP PREVIEW<img src={CloseBtn} className="snap-close pointer" onClick={handleClose} /></h4>
                                <img src={ModalImg} className="snap-model-img"></img>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </Box>
        </>
    )
}

export default FNOLIndex;