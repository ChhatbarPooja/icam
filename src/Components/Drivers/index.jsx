import React, { useState,useEffect } from "react";
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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Autocomplete } from "@mui/lab";
import Eye from "../../Assets/images/Vector.png";
import Trash from "../../Assets/images/trash.png";
import Pencil from "../../Assets/images/Pencil.png";
import User_IMG from "../../Assets/images/prof.png";
import Tree, { TreeNode } from "rc-tree";
import "rc-tree/assets/index.css";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Dots from "../../Assets/images/dots.png";
import {driverList, driverDelete} from "../../Services/api"
import {getDataFromApi, deleteDataFromApi} from "../../Services/CommonServices"
import AlertMessage from '../commoncomponent/AlertMessage'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: "16px",
}));
const statusopt = [
  { id: 1, label: "Active" },
  { id: 2, label: "Inactive" },
];
const driverarray =[
	{ Driver_ID:'#IC125',logo:{User_IMG},Driver_Name:"Frech Sethy",License_Number:"GJ12589635",Registerd_Date:"Jun 22, 2022",Driver_Age:"25",Email_ID:"demo@example.com",Mobile_Number:"9876543210",status:"Active"},
	{ Driver_ID:'#IC126',logo:{User_IMG},Driver_Name:"Lorem Ipsum",License_Number:"GJ25874123	",Registerd_Date:"Jun 20, 2022",Driver_Age:"28",Email_ID:"demo2@example.com",Mobile_Number:"9876543210",status:"Inactive"},
  { Driver_ID:'#IC125',logo:{User_IMG},Driver_Name:" Dolor Sit",License_Number:"JK5258974",Registerd_Date:"May 18, 2021",Driver_Age:"29",Email_ID:"demo3@example.com",Mobile_Number:"9876543210",status:"Inactive"},
  { Driver_ID:'#IC126',logo:{User_IMG},Driver_Name:"John Marc",License_Number:"GJ018596",Registerd_Date:"Mar 15, 2021",Driver_Age:"36",Email_ID:"demo@example.com",Mobile_Number:"9876543210",status:"Inactive"},
  { Driver_ID:'#IC125',logo:{User_IMG},Driver_Name:"Henry Singh",License_Number:"MH035894",Registerd_Date:"April 16, 2020",Driver_Age:"24",Email_ID:"demo4@example.com",Mobile_Number:"9876543210",status:"Active"},
  { Driver_ID:'#IC126',logo:{User_IMG},Driver_Name:"Herry Dec",License_Number:"GA581258",Registerd_Date:"Jun 22, 2022",Driver_Age:"22",Email_ID:"demo5@example.com",Mobile_Number:"9876543210",status:"Inactive"},
  { Driver_ID:'#IC125',logo:{User_IMG},Driver_Name:"Richard Guat",License_Number:"MH035894",Registerd_Date:"Mar 15, 2021",Driver_Age:"28",Email_ID:"demo6@example.com",Mobile_Number:"9876543210",status:"Active"},
  { Driver_ID:'#IC126',logo:{User_IMG},Driver_Name:"Ajay Singh",License_Number:"GA581258",Registerd_Date:"Mar 15, 2021",Driver_Age:"37",Email_ID:"demo7@example.com",Mobile_Number:"9876543210",status:"Active"},
  { Driver_ID:'#IC125',logo:{User_IMG},Driver_Name:"Ravi Shankar",License_Number:"MH035894",Registerd_Date:"Jun 20, 2022",Driver_Age:"32",Email_ID:"demo8@example.com",Mobile_Number:"9876543210",status:"Active"},

]
const DriversIndex = () => {
  const navigate = useNavigate();
  const [DriverManagement,setDriverManagement] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [formdata, setFormData] = useState({ dateofBirth: "" });
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [delete_id, setDeleteId] = useState('')
  const [alert, setalert] = useState(false)
  const [alertMessage, setalertMessage] = useState('')
  const [alertType, setalertType] = useState('')

  function confirm() {
    setalert(false)
  }

  function handleDeleteClose() {
    setDeleteOpen(false)
    setDeleteId("")
  }
  function handleDeleteOpen(id) {
    setDeleteOpen(true)
    setDeleteId(id)
  }
  const handleDeleteConfirm = async (e) => {
    console.log('delete_id',delete_id)
    var query=""
    var response = ""
    response = await deleteDataFromApi(
      driverDelete+delete_id+"/delete",
      query, 1
    )
    console.log(response.status);
   
    if(response && response.status==204){
      setDeleteId("")
      setDeleteOpen(false)
      setalertMessage('Driver Deleted successfully')
      setalert(true)
      setalertType('success')
      getDriverManagement();
    } else {
      setalertMessage('error...')
      setalert(true)
      setalertType('error')
      setDeleteId("")
      setDeleteOpen(false)
      getDriverManagement();
    }
  }

  const handleSubmitSearch = async (event) => {};

  const handleDateChange = (value, name) => {
    console.log(value);
    console.log(name);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const getDriverManagement = async () =>{
		var query = ""
        const response = await getDataFromApi(driverList, 1);
       if(response && response.status==200 && response.data !=null){
        setDriverManagement(response.data);
            console.log('userDetails',response.data);
        } 
	}

	useEffect(() => {
    getDriverManagement();
  }, []);

  return ( 
    <>
      <Box className="main-box mar-t-24 grey-bg pad-b-50">
        <Grid container spacing={3} className="main-grid">
          <Grid item md={6} className="main-title">
            <h4>Drivers</h4>
          </Grid>
          <Grid item md={6} className="breadcrumb">
            <h6>
              <span className="pointer" onClick={() => navigate("/dashboard")}>
                Home /
              </span>{" "}
              Drivers
            </h6>
          </Grid>
        </Grid>
        <ValidatorForm
          onSubmit={handleSubmitSearch}
          onError={() => null}
          className="search-form"
        >
          <Grid container spacing={3} className="search-form-main">
            <Grid item md={3} className="search-form-block">
              <label>Search</label>
              <TextField
                type="text"
                name="name"
                id="name"
                label="Search by name"
                placeholder="Search by name"
                className="search-email gm-t-10 custom-input"
              />
            </Grid>
            <Grid
              item
              md={4}
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
              <label>Status</label>
              <AutoComplete
                className="dropdown gm-t-10"
                fullWidth
                options={statusopt}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="search-dropdown custom-input status-respo-width"
                    label="Status"
                    name="status"
                    placeholder="Status"
                  />
                )}
              />
            </Grid>
            <Grid item md={2} className="search-form-block align-self-center">
              <Button
                sx={{ marginLeft: "16px" }}
                variant="contained"
                color="primary"
                className="whitebg custom-btn"
                type="submit"
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
        <Grid container spacing={3} className="search-form-main">
          <Grid
            item
            md={12}
            className="search-form-block mar-t-24 text-align-right mar-b-24"
          >
            <Button
              variant="contained"
              color="primary"
              className="whitebg custom-btn"
              onClick={() => navigate("/drivers/add_Driver")}
            >
              ADD DRIVER
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="user-list-main">
          <Grid item md={12} className="user-list-block">
            <div className="user-list-start">
              <div className="user-list-top-bar">
                <Grid container spacing={3} className="search-form-main">
                  <Grid item md={6} className="main-title-user respo-w-fit">
                    <h4 className="font-14">LIST OF DRIVERS</h4>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    className="view-all-user respo-w-fit respo-mar-l-auto"
                  >
                    <h6 className="font-grey font-12 font-underline text-align-right">
                      View all
                    </h6>
                  </Grid>
                </Grid>
              </div>
              <div className="user-list-bottom">
                <Grid container spacing={2} className="user-list-main-block">
                  <Grid item md={1.5} className="user-list-left">
                    <Tree defaultExpandedKeys={["0-0", "0-0-2"]}>
                      <TreeNode title=" Driver Groups" key="0-0">
                        <TreeNode title="Group1" key="0-0-0">
                          <TreeNode title="Driver1" key="0-0-0-0" />
                          <TreeNode title="Driver2" key="0-0-0-1" />
                        </TreeNode>
                        <TreeNode title="Group2" key="0-0-1">
                          <TreeNode title="Driver1" key="0-0-1-0" />
                          <TreeNode title="Driver2" key="0-0-1-1" />
                        </TreeNode>
                        <TreeNode title="Group3" key="0-0-2">
                          <TreeNode title="Driver1" key="0-0-2-0" />
                          <TreeNode title="Driver2" key="0-0-2-1" />
                          <TreeNode title="Driver3" key="0-0-2-2" />
                        </TreeNode>
                        <TreeNode title="Group4" key="0-0-3">
                          <TreeNode title="Driver1" key="0-0-3-0" />
                          <TreeNode title="Driver2" key="0-0-3-1" />
                        </TreeNode>
                        <TreeNode title="Group5" key="0-0-4">
                          <TreeNode title="Driver1" key="0-0-4-0" />
                          <TreeNode title="Driver2" key="0-0-4-1" />
                        </TreeNode>
                        <TreeNode title="Group6" key="0-0-5">
                          <TreeNode title="Driver1" key="0-0-5-0" />
                          <TreeNode title="Driver2" key="0-0-5-1" />
                        </TreeNode>
                        <TreeNode title="Group7" key="0-0-6">
                          <TreeNode title="Driver1" key="0-0-6-0" />
                          <TreeNode title="Driver2" key="0-0-6-1" />
                        </TreeNode>
                      </TreeNode>
                    </Tree>
                  </Grid>
                  <Grid
                    item
                    md={10.5}
                    className="user-list-right overflow-scroll "
                  >
                    <Table className="lastlyadded_table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Driver ID</TableCell>
                          <TableCell>Driver</TableCell>
                          <TableCell>License Number</TableCell>
                          <TableCell>Registered date</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Quality Score</TableCell>
                          <TableCell>Email ID</TableCell>
                          <TableCell>Phone number</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
												{DriverManagement.map((driver,i)=>(
													<TableRow key={i}>
														<TableCell>{driver.driver_id}</TableCell>
														<TableCell><img className="user_img vertical-align-middle" src={User_IMG}/> <span className="vertical-align-middle">{driver.driver_name}</span></TableCell>
														<TableCell>{driver.license_number}</TableCell>
														<TableCell>{driver.registerd_date}</TableCell>
                            <TableCell>{driver.driver_age}</TableCell>
                            <TableCell>
                              <span className="QS_score color_qs1">65</span>
                            </TableCell>
                            <TableCell>{driver.email_id}</TableCell>
                            <TableCell>{driver.mobile_number}</TableCell>
														<TableCell className="text-center"><span className={driver.status=='ACTIVE' ? "active-ta font-12" : "inactive-ta font-12"}>{driver.status}</span></TableCell>
                            <TableCell>
                              <p className="justify p-relative pointer table-drop-icons">
                                <img className="table-drop-icon" src={Dots} />
                                <div className="table-dropdown">
                                  <div onClick={() =>
                                        navigate("/drivers/view_driver/"+driver.id)
                                      }>
                                    <span
                                      className="eye-icon"
                                      
                                    >
                                      <img className="table-icons" src={Eye} />
                                    </span>{" "}
                                    View
                                  </div>
                                  <div onClick={() =>
                                        navigate("/drivers/edit_driver/"+driver.id)
                                      }>
                                    <img className="table-icons" src={Pencil}  />{" "}
                                    Edit
                                  </div>
                                  <div onClick={() => handleDeleteOpen(driver.id)}>
                                    <img className="table-icons" src={Trash} />{" "}
                                    Delete
                                  </div>
                                </div>
                              </p>
                            </TableCell>	
                          </TableRow>												
												))}
											</TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={deleteOpen}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {'Are You Sure You Want to delete this record?'}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDeleteConfirm} color="primary" variant="contained" className="whitebg">
                Confirm
            </Button>
            <Button variant="outlined" className="whitebg" onClick={handleDeleteClose} color="primary">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
    </>
  );
};

export default DriversIndex;
