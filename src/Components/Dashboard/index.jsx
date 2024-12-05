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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Autocomplete } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ArrowRightAltIcon from "../../Assets/images/Arrow-right.png";
import people from "../../Assets/images/people.png";
import Eye from "../../Assets/images/Vector.png";
import Trash from "../../Assets/images/trash.png";
import Pencil from "../../Assets/images/Pencil.png";
import User_IMG from "../../Assets/images/prof.png";
import Company_1 from "../../Assets/images/company-1.png";
import Company_2 from "../../Assets/images/company-2.png";
import Company_3 from "../../Assets/images/company-3.png";
import Company_4 from "../../Assets/images/company-4.png";
import Company_5 from "../../Assets/images/company-5.png";
import Company_6 from "../../Assets/images/company-6.png";
import Company_7 from "../../Assets/images/company-7.png";
import dashborad1 from "../../Assets/images/dashborad1.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {companyManagementList,userManagementList, userManagementDelete} from "../../Services/api"
import {getDataFromApi,deleteDataFromApi} from "../../Services/CommonServices"
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: "16px",
}));
const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const country_opt = [
  { id: 1, label: "Country 1" },
  { id: 2, label: "Country 2" },
  { id: 3, label: "Country 3" },
];

const DashboardIndex = () => {
  const navigate = useNavigate();
  const [companyManagement,setcompanyManagement] = useState([])
  const [age, setAge] = React.useState("");
  const [userManagement, setuserManagement] = useState([])
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
		console.log('delete_id', delete_id)
		var query = ""
		var response = ""
		response = await deleteDataFromApi(
			userManagementDelete + delete_id + "/delete",
			query
		)
		console.log(response.status);

		if (response && response.status == 204) {
			setDeleteId("")
			setDeleteOpen(false)
			setalertMessage('User Deleted successfully')
			setalert(true)
			setalertType('success')
			getuserManagement();
		} else {
			setalertMessage('error...')
			setalert(true)
			setalertType('error')
			setDeleteId("")
			setDeleteOpen(false)
			getuserManagement();
		}

	}

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const getcompanyManagement = async () =>{
		var query = ""
    const response = await getDataFromApi(companyManagementList, query);
    if(response && response.status==200 && response.data !=null){
      setcompanyManagement(response.data);
      console.log('userDetails',response.data);
    } 
	}
  const getuserManagement = async () => {
		var query = ""
		const response = await getDataFromApi(userManagementList, query);
		if (response && response.status == 200 && response.data != null) {
			setuserManagement(response.data);
			console.log('userDetails', response.data);
		}
	}
	useEffect(() => {
    getcompanyManagement();
    getuserManagement();
  }, []);

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
                  {/* <IconButton size='large'><GroupsOutlinedIcon/></IconButton> */}
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
                  <Button size="small" onClick={() => navigate("/company_management")}>View All</Button>
                </CardActions>
                <IconButton size="large" className="arrow-icon" onClick={() => navigate("/company_management")}>
                  <img src={ArrowRightAltIcon}/>
                </IconButton>
              </div>
            </Card>
          </Grid>

          <Grid item md={3}>
            <Card sx={{ minWidth: 150 }} className="card-container">
              <CardContent>
                <div className="d-flex-row">
                  {/* <IconButton size='large'><GroupsOutlinedIcon/></IconButton> */}
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
                  <Button size="small" onClick={() => navigate("/events")}>View All</Button>
                </CardActions>
                <IconButton size="large" className="arrow-icon" onClick={() => navigate("/events")}>
                  <img src={ArrowRightAltIcon}/>
                </IconButton>
              </div>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ minWidth: 150 }} className="card-container">
              <CardContent>
                <div className="d-flex-row">
                  {/* <IconButton size='large'><GroupsOutlinedIcon/></IconButton> */}
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
                  <Button size="small" onClick={() => navigate("/vehicles")}>View All</Button>
                </CardActions>
                <IconButton size="large" className="arrow-icon" onClick={() => navigate("/vehicles")}>
                  <img src={ArrowRightAltIcon}/>
                </IconButton>
              </div>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ minWidth: 150 }} className="card-container">
              <CardContent>
                <div className="d-flex-row">
                  {/* <IconButton size='large'><GroupsOutlinedIcon/></IconButton> */}
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
                  <Button size="small" onClick={() => navigate("/drivers")}>View All</Button>
                </CardActions>
                <IconButton size="large" className="arrow-icon" onClick={() => navigate("/drivers")}>
                  <img src={ArrowRightAltIcon}/>
                </IconButton>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3} my={2}>
          <Grid item md={7}>
            <Grid container className="custom-white-box" md={12}>
              <Grid item md={12} className="border_bottom">
                <h4 className="font-14 text-left m-left">
                  RECENTLY ADDED COMPANIES
                </h4>
              </Grid>
              <Grid
                item
                md={12}
                my={3}
                mx={3}
                className="user-list-right overflow-scroll first-table-alignment"
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      {/* <TableCell>ID</TableCell> */}
                      <TableCell>Company Name</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Website</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {companyManagement.map((company,i)=>(
                      <TableRow key={i}>
                        {/* <TableCell>{company.company_id}</TableCell> */}
                        <TableCell><img className="user_img vertical-align-middle" src={Company_6}/> <span className="vertical-align-middle">{company.company_name}</span></TableCell>
                        <TableCell>{company.category}</TableCell>
                        <TableCell>{company.website}</TableCell>
                        <TableCell className="text-center"><span className={company.status=='ACTIVE' ? "active-ta font-12" : "inactive-ta font-12"}>{company.status}</span></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={5}>
            <Grid container className="custom-white-box">
              <Grid container className="border_bottom d-flex-row line-height">
                <Grid item md={6}>
                  <h4 className="font-14 text-left ">EVENTS</h4>
                </Grid>
                <Grid item md={6}>
                  <h6 className="font-grey font-12 font-underline text-align-right m-right pointer" onClick={() => navigate("/events")}>
                    View All
                  </h6>
                </Grid>
              </Grid>

              <Grid item md={12}>
                <Grid item md={12} className="left-heading">
                  <span className="span-heading-small">Company</span>
                </Grid>
                <Box sx={{ minWidth: 80 }}>
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="formcontrol-input calc-100-20"
                  >
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Select"
                      onChange={handleChange}
                      className="input-select-company"
                    >
                      <MenuItem value={10}>company1</MenuItem>
                      <MenuItem value={20}>company2</MenuItem>
                      <MenuItem value={30}>company3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                 
              </Grid>

              <Grid item md={12}>
                <Grid container className="mega line-height2 p-top-8">
                  <Grid item md={2}>
                    <img src={dashborad1} className="dash-image-1" />
                  </Grid>
                  <Grid item md={10}>
                    <Grid container>
                      <Grid container className="details-mega-container">
                        <Grid item md={12}>
                          <span className="bold-text-15 ">
                            Short break event(Event heading)
                          </span>
                        </Grid>
                        <Grid item md={12} className="mar-b-10 mar-t-7">
                          <span className="grey-text">
                            The ct is a long established fact that a render will
                            be...
                          </span>
                        </Grid>

                        <Grid container className="details-grid">
                          <Grid item md={6}>
                            <span>
                              <b>Driver : </b>John Doe
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Vehicle : </b>GJ018965
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Camera :</b> D1-Camera01
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Dt.Time :</b> Dec 12, 2021 12:00 PM
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className="mega p-top-botm-4">
                  <Grid item md={2}>
                    <img src={dashborad1} className="dash-image-1" />
                  </Grid>
                  <Grid item md={10}>
                    <Grid container>
                      <Grid container className="details-mega-container">
                        <Grid item md={12}>
                          <span className="bold-text-15">Overspeed</span>
                        </Grid>
                        <Grid item md={12} className="mar-b-10 mar-t-7">
                          <span className="grey-text">
                            The ct is a long established fact that a render will
                            be...
                          </span>
                        </Grid>

                        <Grid container className="details-grid">
                          <Grid item md={6}>
                            <span>
                              <b>Driver : </b>John Doe
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Vehicle : </b>GJ018965
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Camera :</b> D1-Camera01
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Dt.Time :</b> Dec 12, 2021 12:00 PM
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className="mega p-top-botm-4">
                  <Grid item md={2}>
                    <img src={dashborad1} className="dash-image-1" />
                  </Grid>
                  <Grid item md={10}>
                    <Grid container>
                      <Grid container className="details-mega-container">
                        <Grid item md={12}>
                          <span className="bold-text-15">Break failure</span>
                        </Grid>
                        <Grid item md={12} className="mar-b-10 mar-t-7">
                          <span className="grey-text">
                            The ct is a long established fact that a render will
                            be...
                          </span>
                        </Grid>

                        <Grid container className="details-grid">
                          <Grid item md={6}>
                            <span>
                              <b>Driver : </b>John Doe
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Vehicle : </b>GJ018965
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Camera :</b> D1-Camera01
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Dt.Time :</b> Dec 12, 2021 12:00 PM
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container className="mega p-top-botm-4 border-botm-0">
                  <Grid item md={2}>
                    <img src={dashborad1} className="dash-image-1" />
                  </Grid>
                  <Grid item md={10}>
                    <Grid container>
                      <Grid container className="details-mega-container">
                        <Grid item md={12}>
                          <span className="bold-text-15">Fuel leakage</span>
                        </Grid>
                        <Grid item md={12} className="mar-b-10 mar-t-7">
                          <span className="grey-text">
                            The ct is a long established fact that a render will
                            be...
                          </span>
                        </Grid>

                        <Grid container className="details-grid">
                          <Grid item md={6}>
                            <span>
                              <b>Driver : </b>John Doe
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Vehicle : </b>GJ018965
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Camera :</b> D1-Camera01
                            </span>
                          </Grid>
                          <Grid item md={6}>
                            <span>
                              <b>Dt.Time :</b> Dec 12, 2021 12:00 PM
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container my={3} className="custom-white-box">
          <Grid item md={12} className="respo-table-dashboard respo-w-100">
            <Grid container>
              <Grid container className="border_bottom d-flex-row line-height">
                <Grid item md={6}>
                  <h4 className="font-14 text-left m-left">
                    RECENTLY ADDED USERS
                  </h4>
                </Grid>
                <Grid item md={6}>
                  <h6 className="font-grey font-12 font-underline text-align-right m-right pointer" onClick={() => navigate("/user_management")}>
                    View All
                  </h6>
                </Grid>
              </Grid>
              <Grid
                item
                md={12}
                my={3}
                mx={3}
                className="user-list-right overflow-scroll first-table-alignment"
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User ID</TableCell>
                      <TableCell>User Name</TableCell>
                      <TableCell>Mobile Number</TableCell>
                      <TableCell>Email ID</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userManagement.map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>{user.User_ID}</TableCell>
                        <TableCell><img className="user_img vertical-align-middle" src={User_IMG} /> <span className="vertical-align-middle">{user.User_Name}</span></TableCell>
                        <TableCell>{user.Mobile_Number}</TableCell>
                        <TableCell>{user.Email_ID}</TableCell>
                        <TableCell className="text-center"><span className={user.User_Status == 'Active' ? "active-ta font-12" : "inactive-ta font-12"}>{user.User_Status}</span></TableCell>
                        <TableCell className="text-center"><p className="justify"><span className="eye-icon" onClick={() => navigate('/user_management/view_user/'+user.id)}><img className="table-icons" src={Eye} /></span><span className="table-icons pointer" onClick={() => navigate('/user_management/edit_user/' + user.id)}><img className="table-icons" src={Pencil} /></span><img className="table-icons pointer" src={Trash} onClick={() => handleDeleteOpen(user.id)} /></p></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardIndex;
