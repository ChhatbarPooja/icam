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
import { RadioGroup, Radio } from "react-radio-group";
import { useNavigate } from 'react-router-dom'
import { NavLink, HashRouter as Router } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import MuiDialogTitle from '@mui/material/DialogTitle'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogActions from '@mui/material/DialogActions'
import EventImage from "../../Assets/images/event.png"
import CheckedBtn from '../../Assets/images/check-mark.png'
import CloseBtn from '../../Assets/images/close.png'
import 'rc-tree/assets/index.css'
import DatePicker from "react-datepicker"
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Eye from "../../Assets/images/Vector.png";
import Trash from "../../Assets/images/trash.png";
import Pencil from "../../Assets/images/Pencil.png";
import Dots from "../../Assets/images/dots.png";
import Switch from "react-switch";
import Modal from '@mui/material/Modal';
import ModalImg from '../../Assets/images/modal-img.png';
import pdfimg from "../../Assets/images/pdfimg.png";
import plusimg from "../../Assets/images/plusimg.png";

const manage_opt = [
    { id: 1, label: "Manage 1" },
    { id: 2, label: "Manage 2" },
    { id: 3, label: "Manage 3" },
]

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
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
const workflowopt = [
    { id: 1, label: "workflow 1" },
    { id: 2, label: "workflow 2" },
    { id: 3, label: "workflow 3" },
];


const EventP2 = () => {
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

    const [discardopen, discardsetOpen] = React.useState(false);
    const discardhandleOpen = () => discardsetOpen(true);
    const discardhandleClose = () => discardsetOpen(false);

    const [escalateopen, escalatesetOpen] = React.useState(false);
    const escalatehandleOpen = () => escalatesetOpen(true);
    const escalatehandleClose = () => escalatesetOpen(false);

    const [eventOpen, eventsetOpen] = React.useState(false);
    const eventhandleOpen = () => eventsetOpen(true);
    const eventhandleClose = () => eventsetOpen(false);

    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleNextmodal = () => {
        setopennextPage(true);
        setOpenmodal(false);
        setSecondmodal(true);
    };

    const handleOpenmodal = () => {
        setOpenmodal(true);
    };
    const handleClosemodal = () => {
        setOpenmodal(false);
    };
    const handleopenSecondmodal = () => {
        setSecondmodal(true);
    };
    const handleCloseSecondmodal = () => {
        setSecondmodal(false);
    };

    const [openmodal, setOpenmodal] = useState(false);
    const [opennextPage, setopennextPage] = useState(false);
    const [secondmodal, setSecondmodal] = useState(false);

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
                        <h4>Events</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Events</h6>
                    </Grid>
                </Grid>
                <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="search-form  rspd20" >
                    <Grid container spacing={3} className="search-form-main">
                        <Grid item md={3} className="search-form-block ">
                            <label className="event-label">Vehicle</label>
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
                            <label className="event-label">Location</label>
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
                        <Grid item md={3} xs={12} className="search-form-block respo-w-100 respo-pad-t d-flex">
                            <Grid>
                                <label className="event-label">Date</label>
                                <DatePicker
                                    className="gm-t-10 grey-bg date-custom pdr-2"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>
                            <Grid className="respo-date mt-21" xs={8}>
                                <DatePicker
                                    className="gm-t-10 grey-bg date-custom res-margin-b-00 lft"
                                    placeholderText="DD-MM-YYYY"
                                    name="dateofBirth"
                                    value={formdata.dateofBirth || ''}
                                    onChange={(value, name) => handleDateChange(value, 'dateofBirth')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item md={3} className="search-form-block respo-pad-t">
                            <label className="event-label">Priority</label>
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
                            <label className="event-label">Event</label>
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
                            <label className="event-label">Camera Device</label>
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
                            <label className="event-label">Driver</label>
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
                        <Grid item md={3} className="search-form-block respo-w-100 respo-pad-t d-flex">
                            <Grid className="pt-30">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Video Only" />
                                </FormGroup>
                            </Grid>
                            <Grid className="mt-36">
                                <Button variant="contained" color="primary" className="whitebg custom-btn pr-0" type="submit">
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid container spacing={3} className="user-list-main-block pt-20">
                    <Grid item md={12} className="event-list-right  event-search-form respo-event-search-form" >
                        <div className="event-menu">
                            <NavLink
                                to="/events/eventP0" className="P0-nav">P0</NavLink>
                            <NavLink
                                to="/events/eventP1" className="P0-nav">P1</NavLink>
                            <NavLink
                                to="/events/eventP2" className="P0-nav">P2</NavLink>
                            <NavLink
                                to="/events/accident" className="P0-nav">Accident</NavLink>
                        </div>
                        <p className="b-border"></p>
                        <Table>
                            <TableHead>
                                <TableRow className="event-h-row">
                                    <TableCell className="snap-cell">SNAP</TableCell>
                                    <TableCell className="event-cell">EVENTS</TableCell>
                                    <TableCell className="status-cell">STATUS</TableCell>
                                    <TableCell>ACCIDENT</TableCell>
                                    <TableCell>ACTION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div><img src={EventImage} className="event-image" alt="" onClick={handleOpen}></img></div>
                                    </TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Short brake event (Event heading)</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018965 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 12, 2021 12:00 PM <b>Event Group </b>: Primary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress">65%</div>
                                            <span className="vertical-align-middle">
                                                <Button className="event-action-btn" type="submit" onClick={handleOpenmodal}>
                                                    Take Action
                                                </Button>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span
                                                    className="eye-icon"
                                                    onClick={() =>
                                                        navigate("/Events/view_events")
                                                    }
                                                >
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} className="event-image" onClick={handleOpen} alt=""></img></TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Overspeed Event</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018966 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress1">100%</div>
                                            <span className="vertical-align-middle">
                                                <img src={CheckedBtn} className="check-btn" alt=""></img><p className="action-txt">Action completed</p>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span
                                                    className="eye-icon"
                                                    onClick={() =>
                                                        navigate("/drivers/view_driver")
                                                    }
                                                >
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} className="event-image" onClick={handleOpen} alt=""></img></TableCell>
                                    <TableCell>
                                        <p className="event-p1">Signal Break</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018966 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress1"><div className="progresstext">100%</div></div>
                                            <span className="vertical-align-middle">
                                                <img src={CheckedBtn} className="check-btn" alt=""></img><p className="action-txt">Action completed</p>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span
                                                    className="eye-icon"
                                                    onClick={() =>
                                                        navigate("/drivers/view_driver")
                                                    }
                                                >
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} onClick={handleOpen} className="event-image" alt=""></img></TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Cross Zebra Line</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018965 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress">65%</div>
                                            <span className="vertical-align-middle">
                                                <Button className="event-action-btn" type="submit" onClick={handleOpenmodal}>
                                                    Take Action
                                                </Button>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span
                                                >
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} onClick={handleOpen} className="event-image" alt=""></img></TableCell>
                                    <TableCell>
                                        <p className="event-p1">Overspeed</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018966 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress1">100%</div>
                                            <span className="vertical-align-middle">
                                                <img src={CheckedBtn} className="check-btn"></img><p className="action-txt">Action completed</p></span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span>
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><img src={EventImage} onClick={handleOpen} className="event-image" alt=""></img></TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Speed Change Suddenly</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018965 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 10, 2021 1:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress">40%</div>
                                            <span className="vertical-align-middle">
                                                <Button className="event-action-btn" type="submit" onClick={handleOpenmodal}>
                                                    Take Action
                                                </Button>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span>
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                                <TableRow className="no-bottom-border">
                                    <TableCell><img src={EventImage} onClick={handleOpen} className="event-image" alt=""></img></TableCell>
                                    <TableCell className="event-cell">
                                        <p className="event-p1">Speed Change Suddenly</p>
                                        <p className="event-p2">The ct is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <p className="event-p3"><b>Driver</b> : John Doe <b>Vehicle</b> : GJ018965 <b>Camera </b>: D1-Camera01</p>
                                        <p className="event-p4"><b>Date & Time</b> : Dec 12, 2021 12:00 PM <b>Event Group </b>: Secondary
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Grid container>
                                            <div className="progress">85%</div>
                                            <span className="vertical-align-middle">
                                                <Button className="event-action-btn" type="submit" onClick={handleOpenmodal}>
                                                    Take Action
                                                </Button>
                                            </span>
                                        </Grid>
                                    </TableCell>
                                    <TableCell className="text-center"><Switch checked uncheckedIcon checkedIcon /></TableCell>
                                    <TableCell> <p className="justify p-relative pointer table-drop-icons">
                                        <img className="table-drop-icon" src={Dots} />
                                        <div className="table-dropdown">
                                            <div onClick={() =>
                                                navigate("/Events/view_events")
                                            }>
                                                <span>
                                                    <img className="table-icons" src={Eye} />
                                                </span>{" "}
                                                View
                                            </div>
                                            <div onClick={escalatehandleOpen}>
                                                <img className="table-icons" src={Pencil} />{" "}
                                                Escalate
                                            </div>
                                            <div onClick={discardhandleOpen} >
                                                <img className="table-icons" src={Trash} />{" "}
                                                Delete
                                            </div>
                                        </div>
                                    </p></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box container>
                        <Grid container spacing={4} className="pl-20">
                            <Grid item md={4} xs={10} className="snap-form pl-20">
                                <h4 className="snap-h">
                                    SNAP PREVIEW<img src={CloseBtn} className="snap-close pointer" onClick={handleClose} /></h4>
                                <img src={ModalImg} className="snap-model-img"></img>
                            </Grid>
                        </Grid>
                    </Box >
                </Modal >
                <Dialog
                    open={discardopen}
                    onClose={discardhandleClose}
                    aria-describedby="modal-modal-description"
                    aria-labelledby="form-dialog-title"
                >
                    <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
                        <MuiDialogTitle id="form-dialog-title" onClose={discardhandleClose}>DISCARD EVENT<img src={CloseBtn} className="discard-close-pointer" onClick={discardhandleClose} /></MuiDialogTitle>
                        <DialogContent className="pad-lr-tb-0-32">
                            <Grid className="">
                                <h6 className="font-grey font-12 font-underline text-align-right view">View Events</h6>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label className="discard-txt">Event Description</label>
                                        <TextField
                                            className="discard-custom-input text-black"
                                            id="size-small"
                                            defaultValue="Small"
                                            size="small"
                                            value={"Overspeed"}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label className="discard-txt">Reason<span className="reason">*</span></label>
                                        <TextField
                                            className="discard-custom-input"
                                            type="text"
                                            name="Description"
                                            id="Description"
                                            placeholder="Write Here...."
                                            multiline
                                            rows={3}
                                            maxRows={10}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <button type="button home-button" className="button1 discard-btn mar-b-24">Discard</button>
                            <button type="button contact-button " className="button1 cancel-btn mar-b-24 mar-r-15" onClick={discardhandleClose}>Cancel</button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <Dialog
                    open={escalateopen}
                    onClose={escalatehandleClose}
                    aria-labelledby="form-dialog-title"
                    aria-describedby="modal-modal-description"
                >
                    <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className=" aaa">
                        <MuiDialogTitle className="pad-l-17" id="form-dialog-title" onClose={escalatehandleClose}>ESCALATE EVENT<img src={CloseBtn} className="discard-close-pointer" onClick={escalatehandleClose} /></MuiDialogTitle>
                        <DialogContent className="pad-l-r-t-b">
                            <Grid className="">
                                <h6 className="font-grey font-12 font-underline text-align-right view">View details</h6>
                                <Grid container>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label className="discard-txt">Event Description</label>
                                        <TextField
                                            className="modal-custom-input"
                                            id="size-small"
                                            defaultValue="Small"
                                            size="small"
                                            value={"Overspeed"}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label className="discard-txt">Manager	<span className="reason">*</span></label>
                                        <AutoComplete
                                            className="dropdown gm-t-10 text-black w-100"
                                            fullWidth
                                            options={statusopt}
                                            defaultValue={'Select'}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    className="search-dropdown modal-custom-input text-black"
                                                    name="Select"
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <label className="radio-txt">Notify By<span className="reason">*</span></label>
                                            <RadioGroup name="nameRadio" value={''} className="flex-content escalate-radio">
                                                <div className="p-7">
                                                    <Radio value="active" checked={selected === 'yes'} />Email
                                                </div>
                                                <div className="p-7">
                                                    <Radio />SMS
                                                </div>
                                                <div className="p-7">
                                                    <Radio />Call
                                                </div>
                                                <div className="p-7">
                                                    <Radio />Whatsapp
                                                </div>
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <label className="discard-txt">Description<span className="reason">*</span></label>
                                        <TextField
                                            className="discard-custom-input description"
                                            type="text"
                                            name="Description"
                                            id="Description"
                                            placeholder="Write Here...."
                                            multiline
                                            rows={3}
                                            maxRows={10} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <button type="button home-button" className="button1 discard-btn mar-r-15">Escalate</button>
                            <button type="button contact-button" className="button1 cancel-btn mar-r-15 mar-r-25" onClick={escalatehandleClose}>Cancel</button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <Modal
                    open={openmodal}
                    onClose={handleClosemodal}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    className="modal-mega">
                    <Box container className="modal-event modal-border-radius modal-height event-action-width">
                        <Grid item>
                            <Grid
                                container
                                className="action-event d-flx-new respo-actn ">
                                <Grid item md={9} className="">
                                    <h4 className="font-14 left-neww">
                                        ACTION EVENT
                                    </h4>
                                </Grid>
                                <Grid item md={2} className="left-neww-2">
                                    <span
                                        className="cross-sign respo-sign"
                                        onClick={handleClosemodal}>
                                        &times;
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                item
                                md={12}
                                className="left-neww-2 respo-view-right"
                            >
                                <span
                                    className="viewdetail"
                                    onClick={() =>
                                        navigate("/Events/view_events")
                                    }
                                >
                                    view details
                                </span>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ValidatorForm
                                onSubmit={handleSubmitSearch}
                                onError={() => null}
                                className="my-form-v1 ">
                                <Grid
                                    container
                                    spacing={5}
                                    className="search-form-main ">
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className="user-add-block "
                                    >
                                        <label className="font-500">
                                            Event Description
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            placeholder="Enter Driver name"
                                            className="search-email gm-t-10 custom-input form-input-1-popup"
                                            value={"Overspeed"}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className="user-add-block block-two"
                                    >
                                        <label className="font-500">
                                            Event Priority
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_number"
                                            id="user_number"
                                            placeholder="Enter mobile number"
                                            className="search-email gm-t-10 custom-input form-input-1-popup"
                                            value={"P1"}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={5}
                                        xs={11}
                                        className="search-form-block"
                                    >
                                        <label className="font-500">Workflow</label>
                                        <AutoComplete
                                            className="dropdown gm-t-10 w-100 mar-b-0"
                                            fullWidth
                                            options={workflowopt}
                                            value={formdata.workflow}
                                            onChange={(event, value) => changeDropdownValue('workflow', value)}
                                            defaultValue={"workflow 1"}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    className="search-dropdown custom-input form-input-2-popup"
                                                    name="workflow"
                                                    placeholder="Workflow"
                                                    value={formdata.workflow}
                                                    defaultValue={"workflow 1"}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    {formdata.workflow == 2 ?
                                        <Grid item md={12} sm={12} xs={11.5}>
                                            <div className="btn-flex-alignment workflow-btn-width m-auto workflow-align">
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2 flow-btn text-black">
                                                        Call to the Driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Validation by driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Fix event by driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Inform to Track Agent
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Qualit check vehicle
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr" />
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2 vehicle-btn">
                                                        Vehicle
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>
                                        :
                                        <Grid item md={12} sm={12} xs={11.5}>
                                            <div className="btn-flex-alignment width-div margin-auto-div">
                                                <div className="border-div padding-special-div-2 respo-div-diagram div-2-truck">
                                                    call to the Driver
                                                </div>
                                                <hr className="hr-width" />
                                                <div className="border-div2 padding-special-div-1 div-2-truck">
                                                    inform truck agent
                                                </div>
                                            </div>
                                        </Grid>
                                    }
                                    <Grid
                                        item
                                        md={12}
                                        sm={11}
                                        xs={11}
                                        className="search-form-block mar-b-24 driver_name-respo respo-descriptn grid-bottom-margin-0"
                                    >
                                        <label className="font-500">
                                            Description<b className="redastrik">*</b>
                                        </label>
                                        <TextField
                                            type="text"
                                            name="Description"
                                            id="Description"
                                            label="Write something about driver...."
                                            placeholder="Write something about driver...."
                                            className="search-email gm-t-10 custom-input margin-auto-description form-input-2-popup"
                                            multiline
                                            rows={2}
                                            maxRows={8}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={11}
                                        className="user-add-block"
                                    >
                                        <label className="font-500">
                                            Message to next workflow
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_number"
                                            id="user_number"
                                            value={"Enter message"}
                                            placeholder="Enter mobile number"
                                            className="search-email gm-t-10 custom-input form-input-2-popup"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        className="search-form-block status-grid"
                                    >
                                        <label className="font-500 notify-left-16">
                                            Notify by
                                        </label>
                                        <RadioGroup
                                            name="nameRadio"
                                            value={""}
                                            className="gm-t-10 flex-content font-13 "
                                        >
                                            <div className="radio-options radio_div_view ">
                                                <Radio
                                                    value="active"
                                                    defaultChecked={selected === "yes"}
                                                />
                                                Email
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Sms
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Call
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Whatsapp
                                            </div>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                        className="search-form-block"
                                    >
                                        <label className="font-500">
                                            Documents Upload{" "}
                                        </label>
                                        <div className="docs_div mar-t-13">
                                            <div>
                                                <label for="inputTag">
                                                    <span className="browse">Browse</span>
                                                    <span className="no_file_chosen">
                                                        No File Chosen
                                                    </span>
                                                    <input id="inputTag" type="file" />
                                                </label>
                                            </div>
                                            <div className="btn-flex-alignment rexpo-xyz">
                                                <div className="btn-1">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className="whitebg upload-btn docs-btn width-160 border-radius line-height-new btn-mobile btn-768 action-completed-btn-left btn-ht"
                                                        type="submit"
                                                    >
                                                        Action Completed
                                                    </Button>
                                                </div>
                                                <div className="btn-2-div-left  btn-2 respo-btns-div btn-768-2 btn-respo-below-768-both btn-next-2 action-event-button">
                                                    <Button
                                                        variant="outlined"
                                                        color="error"
                                                        className="cancel-btn2"
                                                        type="submit"
                                                        onClick={handleClosemodal}
                                                    >
                                                        CANCEL
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className="custom-btn docs-btn upload-btn border-radius line-height-new"
                                                        type="submit"
                                                        onClick={handleNextmodal}
                                                    >
                                                        NEXT
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                    </Box>
                </Modal>
                <Modal
                    open={secondmodal}
                    onClose={handleCloseSecondmodal}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    className="modal-mega"
                >
                    <Box
                        container
                        className="modal-event modal-border-radius modal-height event-action-width"
                    >
                        <Grid item>
                            <Grid
                                container
                                className="action-event d-flx-new respo-actn"
                            >
                                <Grid item md={9} className="">
                                    <h4 className="font-14 left-neww">
                                        ACTION EVENT
                                    </h4>
                                </Grid>
                                <Grid item md={2} className="left-neww-2">
                                    <span
                                        className="cross-sign respo-sign"
                                        onClick={handleCloseSecondmodal}									>
                                        &times;
                                    </span>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                item
                                md={12}
                                className="left-neww-2 respo-view-right">
                                <span
                                    className="viewdetail"
                                    onClick={() =>
                                        navigate("/Events/view_events")
                                    }>
                                    view details
                                </span>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ValidatorForm
                                onSubmit={handleSubmitSearch}
                                onError={() => null}
                                className="my-form-v1">
                                <Grid
                                    container
                                    spacing={5}
                                    className="search-form-main">
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className="user-add-block">
                                        <label className="font-500">
                                            Event Description
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            placeholder="Enter Driver name"
                                            className="search-email gm-t-10 custom-input form-input-1-popup"
                                            value={"Overspeed"}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        xs={11}
                                        className="user-add-block"
                                    >
                                        <label className="font-500">
                                            Event Priority
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_number"
                                            id="user_number"
                                            placeholder="Enter mobile number"
                                            className="search-email gm-t-10 custom-input form-input-1-popup"
                                            value={"P1"}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={5}
                                        xs={11}
                                        className="search-form-block"
                                    >
                                        <label className="font-500">Workflow</label>
                                        <AutoComplete
                                            className="dropdown gm-t-10 w-100 mar-b-0"
                                            fullWidth
                                            options={workflowopt}
                                            value={formdata.workflow}
                                            onChange={(event, value) => changeDropdownValue('workflow', value)}
                                            defaultValue={"workflow 1"}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    className="search-dropdown custom-input form-input-2-popup"
                                                    name="workflow"
                                                    placeholder="Workflow"
                                                    value={formdata.workflow}
                                                    defaultValue={"workflow 1"}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    {formdata.workflow == 2 ?
                                        <Grid item md={12} sm={12} xs={11}>
                                            <div className="btn-flex-alignment workflow-btn-width m-auto workflow-align">
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2 flow-btn text-black">
                                                        Call to the Driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Validation by driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Fix event by driver
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Inform to Track Agent
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr"></hr>
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2">
                                                        Qualit check vehicle
                                                    </div>
                                                </Grid>
                                                <hr className="workflow-hr" />
                                                <Grid container xs={6} md={2}>
                                                    <div className="flow-btn2 vehicle-btn">
                                                        Vehicle
                                                    </div>
                                                </Grid>
                                            </div>
                                        </Grid>
                                        :
                                        <Grid item md={12} sm={12} xs={11}>
                                            <div className="btn-flex-alignment width-div margin-auto-div">
                                                <div className="border-div padding-special-div-2 respo-div-diagram div-2-truck">
                                                    call to the Driver
                                                </div>
                                                <hr className="hr-width" />
                                                <div className="border-div2 padding-special-div-1 div-2-truck">
                                                    inform truck agent
                                                </div>
                                            </div>
                                        </Grid>
                                    }
                                    <Grid
                                        item
                                        md={12}
                                        sm={11}
                                        xs={11}
                                        className="search-form-block mar-b-24 driver_name-respo respo-descriptn"
                                    >
                                        <label className="font-500">
                                            Description<b className="red">*</b>
                                        </label>
                                        <TextField
                                            type="text"
                                            name="Description"
                                            id="Description"
                                            label="Write something about driver...."
                                            placeholder="Write something about driver...."
                                            className="search-email gm-t-10 custom-input margin-auto-description form-input-2-popup"
                                            multiline
                                            rows={2}
                                            maxRows={8}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        xs={11}
                                        className="user-add-block"
                                    >
                                        <label className="font-500">
                                            Message to next workflow
                                        </label>
                                        <TextField
                                            type="text"
                                            name="user_number"
                                            id="user_number"
                                            value={"Enter message"}
                                            placeholder="Enter mobile number"
                                            className="search-email gm-t-10 custom-input form-input-2-popup"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md={6}
                                        sm={6}
                                        className="search-form-block  status-grid"
                                    >
                                        <label className="font-500 notify-left-16">
                                            Notify by
                                        </label>
                                        <RadioGroup
                                            name="nameRadio"
                                            value={""}
                                            className="gm-t-10 flex-content font-13 "
                                        >
                                            <div className="radio-options radio_div_view ">
                                                <Radio
                                                    value="active"
                                                    checked={selected === "yes"}
                                                />
                                                Email
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Sms
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Call
                                            </div>
                                            <div className="radio-options">
                                                <Radio value="inactive" />
                                                Whatsapp
                                            </div>
                                        </RadioGroup>
                                    </Grid>
                                    <Grid
                                        item
                                        md={12}
                                        className="search-form-block"
                                    >
                                        <label className="font-500">
                                            Documents Upload{" "}
                                        </label>
                                        <div className="docs_div mar-t-13">
                                            <div>
                                                <label
                                                    for="inputTag"
                                                    className="eklineme"
                                                >
                                                    <span className="img-link-div">
                                                        <img
                                                            src={pdfimg}
                                                            alt={pdfimg}
                                                            className="pdf-border-dotted"
                                                        />
                                                        <a
                                                            href="file.doc"
                                                            className="download"
                                                        >
                                                            Download
                                                        </a>
                                                    </span>
                                                    <span className="plus-div">
                                                        <img
                                                            src={plusimg}
                                                            alt={plusimg}
                                                            className="pluseimg-size"
                                                        />
                                                    </span>
                                                    <input id="inputTag" type="file" />
                                                </label>
                                            </div>
                                            <div className="btn-flex-alignment rexpo-xyz">
                                                <div className="btn-1">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className="whitebg upload-btn docs-btn width-160 border-radius line-height-new btn-mobile btn-768 action-completed-btn-left"
                                                        type="submit"
                                                    >
                                                        Action Completed
                                                    </Button>
                                                </div>
                                                <div className="btn-2-div-left btn-2 respo-btns-div btn-768-2 cancl-btn-right action-event-button2">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        className="cancel-btn2"
                                                        type="submit"
                                                        onClick={handleCloseSecondmodal}
                                                    >
                                                        CANCEL
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                    </Box>
                </Modal>
            </Box >
        </>
    )
}

export default EventP2;