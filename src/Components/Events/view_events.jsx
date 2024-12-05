import React,{ useState } from "react";
import { Box, Grid,Button ,IconButton, Icon} from "@mui/material";
import EventMap from "../../Assets/images/event-map.png";
import SearchBar from "../../Assets/images/searchbar.png";
import { useNavigate } from "react-router-dom";
import EventImage from "../../Assets/images/event-details-img.png";
import GoogleMapReact from "google-map-react";
import Modal from "@mui/material/Modal";
import { RadioGroup, Radio } from "react-radio-group";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete } from "@mui/lab";
import pdfimg from "../../Assets/images/pdfimg.png";
import plusimg from "../../Assets/images/plusimg.png";
import CloseBtn from '../../Assets/images/close.png'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import MuiDialogTitle from '@mui/material/DialogTitle'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogActions from '@mui/material/DialogActions'
///import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography';
import ModalImg from '../../Assets/images/modal-img.png';

const DialogTitleRoot = styled(MuiDialogTitle)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(2),
  '& .closeButton': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: '#000',
  },
}))
const DialogTitle = ((props) => {
  const { children, onClose } = props
  return (
      <DialogTitleRoot disableTypography>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
              <IconButton
                  aria-label="Close"
                  className='closeButton'
                  onClick={onClose}
              >
                  <img src={CloseBtn} />
              </IconButton>
          ) : null}
      </DialogTitleRoot>
  )
})

const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: "16px",
}));
const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
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
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const workflowopt = [
  { id: 1, label: "workflow 1" },
  { id: 2, label: "workflow 2" },
  { id: 3, label: "workflow 3" },
];
const statusopt = [
  { id: 1, label: "Active" },
  { id: 2, label: "Inactive" },

]
const EventDetails = () => {
  const navigate = useNavigate();
  
  const [selected, setSelected] = useState("yes");
  
  const handleSubmitSearch = async (event) => {};
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const [openmodal, setOpenmodal] = useState(false);
  const [opennextPage, setopennextPage] = useState(false);
  const [secondmodal, setSecondmodal] = useState(false);
  const [name, setName] = useState("");

  const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
  
  const [discardopen, setdiscardopen] =useState(false);
  const discardhandleOpen = () =>{
    setdiscardopen(true);
    console.log('[fff')
  } 
  const discardhandleClose = () => {
    setdiscardopen(false);
  }
  const [escalateopen, escalatesetOpen] = React.useState(false);
  const escalatehandleOpen = () => escalatesetOpen(true);
  const escalatehandleClose = () => escalatesetOpen(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleOpenmodal = () => {
    setOpenmodal(true);
    console.log('open ')
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
  const handleNextmodal = () => {
    setopennextPage(true);
    setOpenmodal(false);
    setSecondmodal(true);
  };
  return (
    <>
      <Box className="main-box mar-t-24 grey-bg pad-b-50">
        <Grid container spacing={3} className="main-grid">
          <Grid item md={6} className="main-title">
            <h4>Event Details</h4>
          </Grid>
          <Grid item md={6} className="breadcrumb">
            <h6>
              <span className="pointer" onClick={() => navigate("/dashboard")}>
                Home /
              </span>{" "}
              <span
                className="pointer"
                onClick={() => navigate("/user_management")}
              >
                Events /
              </span>{" "}
              Event Details
            </h6>
          </Grid>
        </Grid>

        <Grid container className="search-form-main">
          <Grid item md={8.4}>
            <Grid item md={11.5} className="respo-mar-b-30">
              <div className="parent">
                {/* <img src={EventMap} alt="" className="map" />
                                <img src={SearchBar} alt="" className="searchbar"></img> */}

                <div style={{ height: "100vh", width: "100%" }}>
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
              </div>
            </Grid>

            <Grid item md={1} className="search-form-block"></Grid>
          </Grid>
          <Grid item md={3.5} xs={12} className="user-add-block">
            <Grid
              item
              md={12}
              className="event-custom-white-box respo-mar-b-30"
            >
              <h4 className="text-left box-header pl-20">EVENT DETAILS</h4>
              <Grid item md={12} className="pb-25">
                <Grid container>
                  <Grid item md={12}>
                    <Grid container className="responsive-block pad-r-16 pt-10 responsive-inline">
                      <Grid item md={5} className="user-add-block">
                        <label className="driver-label">Event</label>
                      </Grid>
                      <Grid item md={7} className="user-add-block ">
                        <label className="driver-label event-label font-14 grey-txt">
                          : Overspeed
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Driver</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : John Doe
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Vehicle Number</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : GJ1738750
                        </label>
                      </Grid>

                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Event</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : Overspeed
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Notify By</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : SMS
                        </label>
                      </Grid>

                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Priority</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label">
                          :<div className="event-details-priority">P1</div>
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Date & Time</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : June 21, 2022 10:00 PM
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Probability</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label  event-label font-14 grey-txt">
                          : 0.5
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Classification</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : Drivers
                        </label>
                      </Grid>
                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Description</label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          : Lorem Ipsum is simply dummy text of the printing &
                          typesetting industry. :
                        </label>
                      </Grid>

                      <Grid item md={5} className="user-add-block gm-t-10">
                        <label className="driver-label">Status </label>
                      </Grid>
                      <Grid
                        item
                        md={7}
                        className="user-add-block gm-t-10 respo-mar-t-0"
                      >
                        <label className="driver-label event-label font-14 grey-txt">
                          :<div className="event-details-progress"> 65%</div>
                        </label>
                      </Grid>
                      <Grid item md={12} className="user-add-block gm-t-10 p-relative">
                        <label className="driver-label discard">
                          <span onClick={discardhandleOpen}>Discard</span>
                          <label className="driver-label escalate">
                            <span onClick={escalatehandleOpen}>Escalate</span>{" "}
                            <span>
                              
                              
                             
                            </span>
                          </label>
                        </label>
                        <button className="action-btn curser-pointer-hand-btn spe-pos"  onClick={handleOpenmodal}>
                                Take Action
                              </button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} className="user-add-block pt-20">
              <Grid
                item
                md={12}
                className="event-custom-white-box "
              >
                <h4 className="text-left box-header pl-20">SNAPSHOTS</h4>
                <Grid container className="responsive-block ml-10 pb-20 m-l-00">
                  <Grid container className="responsive-block pt-20 respo-flc">
                    <Grid item md={4} className="res-w-33" >
                      <img src={EventImage} alt="" className="snapshots w10" onClick={handleOpen}/>
                    </Grid>
                    <Grid item md={4} className="res-w-33">
                      <Grid item md={4}>
                        <img src={EventImage} alt="" className="snapshots w10" onClick={handleOpen}/>
                      </Grid>
                    </Grid>
                    <Grid item md={4} className="res-w-33">
                      <Grid item md={4}>
                        <img src={EventImage} alt="" className="snapshots w10" onClick={handleOpen}/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
                open={discardopen}
                onClose={discardhandleClose}
                /* aria-labelledby="modal-modal-title" */
                aria-describedby="modal-modal-description"
                aria-labelledby="form-dialog-title"
            >
              <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
              <DialogTitle id="form-dialog-title" onClose={discardhandleClose}>DISCARD EVENT</DialogTitle>
              <DialogContent className="pad-lr-tb-0-32">
             
                        {/* <Grid item md={6} className="main-title">
                            <h4>Vehicles</h4>
                        </Grid>
                        <Grid item md={6} className="breadcrumb">
                            <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Vehicles </h6>
                        </Grid> */}

                       
                            
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
              <DialogTitle  className="pad-l-17" id="form-dialog-title" onClose={escalatehandleClose}>ESCALATE EVENT</DialogTitle>
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
                                    className="dropdown gm-t-10 text-black"
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
                          className="modal-mega"
                        >
                          <Box
                            container
                            sx={{
                              ...style,
                              width: 600,
                              height: "100%",
                              padding: 0,
                            }}
                            className="modal-event modal-border-radius modal-height"
                          >
                            <Grid item>
                              <Grid
                                container
                                className="action-event d-flx-new respo-actn"
                              >
                                <Grid item md={9.5} className="">
                                  <h4 className="font-14 left-neww">
                                    ACTION EVENT
                                  </h4>
                                </Grid>
                                <Grid item md={2} className="left-neww-2">
                                  <span
                                    className="cross-sign respo-sign"
                                    onClick={handleClosemodal}
                                  >
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
                                className="my-form-v1 pr-0"
                              >
                                <Grid
                                  container
                                  spacing={1}
                                  className="search-form-main"
                                >
                                  <Grid
                                    item
                                    md={5.5}
                                    sm={5.5}
                                    xs={11.5}
                                    className="user-add-block"
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
                                    xs={11.5}
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
                                    md={5.5}
                                    sm={5.5}
                                    xs={11.5}
                                    className="search-form-block"
                                  >
                                    <label className="font-500">Workflow</label>
                                    <AutoComplete
                                      className="dropdown gm-t-10 w-100 mar-b-0"
                                      fullWidth
                                      options={workflowopt}
                                      defaultValue={"workflow 1"}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          className="search-dropdown custom-input form-input-2-popup"
                                          name="Select"
                                          placeholder="Workflow"
                                        />
                                      )}
                                    />
                                  </Grid>
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
                                  <Grid
                                    item
                                    md={11.5}
                                    sm={11.5}
                                    xs={11.5}
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
                                    md={5.5}
                                    xs={11.5}
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
                                            className="whitebg upload-btn docs-btn width-160 border-radius line-height-new btn-mobile btn-768 action-completed-btn-left"
                                            type="submit"
                                            // disabled
                                          >
                                            Action Completed
                                          </Button>
                                        </div>

                                        <div className="btn-2-div-left  btn-2 respo-btns-div btn-768-2 btn-respo-below-768-both">
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
                            sx={{
                              ...style,
                              width: 600,
                              height: "100%",
                              padding: 0,
                            }}
                            className="modal-event modal-border-radius modal-height"
                          >
                            <Grid item>
                              <Grid
                                container
                                className="action-event d-flx-new respo-actn"
                              >
                                <Grid item md={9.5} className="">
                                  <h4 className="font-14 left-neww">
                                    ACTION EVENT
                                  </h4>
                                </Grid>
                                <Grid item md={2} className="left-neww-2">
                                  <span
                                    className="cross-sign respo-sign"
                                    onClick={handleCloseSecondmodal}
                                  >
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
                                className="my-form-v1 pr-0"
                              >
                                <Grid
                                  container
                                  spacing={1}
                                  className="search-form-main"
                                >
                                  <Grid
                                    item
                                    md={5.5}
                                    sm={5.5}
                                    xs={11.5}
                                    className="user-add-block"
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
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={6}
                                    sm={6}
                                    xs={11.5}
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
                                    md={5.5}
                                    sm={5.5}
                                    xs={11.5}
                                    className="search-form-block"
                                  >
                                    <label className="font-500">Workflow</label>
                                    <AutoComplete
                                      className="dropdown gm-t-10 w-100 mar-b-0"
                                      fullWidth
                                      options={workflowopt}
                                      defaultValue={"workflow 1"}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          className="search-dropdown custom-input form-input-2-popup"
                                          name="Select"
                                          placeholder="Workflow"
                                        />
                                      )}
                                    />
                                  </Grid>
                                  <Grid item md={12} sm={12} xs={11.5}>
                                    <div className="btn-flex-alignment width-div margin-auto-div">
                                      <div className="border-div2 padding-special-div-2 padding-special-div-2 respo-div-diagram div-2-truck">
                                        call to the driver
                                      </div>
                                      <hr className="hr-width" />
                                      <div className="border-div padding-special-div-1 padding-special-div-1 div-2-truck">
                                        inform truck agent
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid
                                    item
                                    md={11.5}
                                    sm={11.5}
                                    xs={11.5}
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
                                    md={5.5}
                                    xs={11.5}
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
                                        <div className="btn-2-div-left btn-2 respo-btns-div btn-768-2 cancl-btn-right ">
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
                        <Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>



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

								{/* <h6 className="font-12 font-underline event-text-align-right view-snap">View all</h6> */}

								<img src={ModalImg} className="snap-model-img"></img>
								{/* </Grid> */}
							</Grid>

						</Grid>
					</Box >


				</Modal >
      </Box>
    </>
  );
};

export default EventDetails;
