import React, { useState, useEffect } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import User_Icon from "../../Assets/images/user-icon.png"
import Close_btn from "../../Assets/images/close-btn-list.png"
import Grey_circle from "../../Assets/images/grey-circle.png"
import { userManagementGet} from "../../Services/api"
import {getDataFromApi} from "../../Services/CommonServices"

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const gender_opt=[
    {id: 1,label:"Male"},
    {id: 2,label:"Female"},
]
const country_opt=[
    {id: 1,label:"Country 1"},
    {id: 2,label:"Country 2"},
    {id: 3,label:"Country 3"},
]
const state_opt=[
    {id: 1,label:"State 1"},
    {id: 2,label:"State 2"},
    {id: 3,label:"State 3"},
]
const permission_opt=[
    {id: 1,label:"Add"},
    {id: 2,label:"Action Workflow 1"},
    {id: 3,label:"Action Workflow 2"},
]
const userarray =[
	{ User_Id:47,User_Name:"Rohit",Mobile_Number:"22222",DOB:'2022-7-04',Email_ID:"v@nomail.com",USER_PHOTO:"", Gender:"Male", Country:"India", State:"Maharashtra", City:"BJP", ZIP_Code:123, Address:"vvvvvvvvvv"},
]
const EditUserManagement=() => {
	const navigate = useNavigate()
	const [startDate, setStartDate] = useState(new Date());
    const [formdata,setFormData]=useState({dateofBirth:""})
	const [userManagement,setuserManagement] = useState([])

	const getuserManagement = async () =>{
		var query = ""
        const response = await getDataFromApi(userManagementGet, query);
       if(response && response.status==200 && response.data !=null){
            setuserManagement(response.data);
            console.log('userDetails',response.data);
        } 
	}
	useEffect(() => {
        getuserManagement();
    }, []);
	const handleSubmitSearch = async (event) => {

	}

	const handleDateChange = (value, name) =>{
		console.log(value)
		console.log(name)
		setFormData((formData) => ({
            ...formData,
            [name]:value,
        }));
        
	}

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>EDIT USER</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={ ()=> navigate('/user_management')}>User Management /</span> Edit User</h6>
					</Grid>
					<Grid item md={12} className="add-user-form-block">
						<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
							<div className="search-form">
							{userarray.map((user,i)=>(
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={12} className="search-form-block">
										<label className="font-20">User Details</label>
									</Grid>
									<Grid item md={6} className="user-add-block">
										<Grid item md={12} className="user-add-block">
											<label>User ID</label>
											<TextField
				                                type="text"
				                                name="user_id"
				                                id="user_id"
				                                className="search-email gm-t-10 custom-input"
												value={user.User_Id}
				                            />
			                            </Grid>
			                            <Grid item md={12} className="user-add-block">
				                            <label>User Name</label>
											<TextField
				                                type="text"
				                                name="user_name"
				                                id="user_name"
				                                className="search-email gm-t-10 custom-input"
												value={user.User_Name}
				                            />
				                        </Grid>
				                        <Grid item md={12} className="user-add-block">
				                            <label>Mobile Number</label>
											<TextField
				                                type="text"
				                                name="user_number"
				                                id="user_number"
				                                className="search-email gm-t-10 custom-input"
												value={user.Mobile_Number}
				                            />
				                        </Grid>
			                            <Grid container className="search-form-main">
				                            <Grid item md={4} className="search-form-block respo-w-100">
				                            	<label>Date Of Birth</label>
				                            	<DatePicker 
				                            		className="gm-t-10 grey-bg date-custom"
				                            		placeholderText="DD-MM-YYYY" 
				                            		name="dateofBirth" 
				                            		value={user.DOB} 
				                            		onChange={(value, name) => handleDateChange(value, 'dateofBirth')} 
				                            	/>
				                            </Grid>
				                            <Grid item md={4} className="search-form-block respo-w-100">
				                            	<label>Gender</label>
												<AutoComplete
					                                className="dropdown gm-t-10 w-100 mar-b-0"
					                                fullWidth
					                                options={gender_opt}
													value={user.Gender}
													
					                                renderInput={(params) => (
					                                    <TextField
					                                        {...params}
					                                        className="search-dropdown custom-input"
					                                        name="Gender"
					                                        placeholder="Gender"
														
					                                    />
					                                )}
					                            />
				                            </Grid>
				                        </Grid>
									</Grid>
									<Grid item md={6} className="user-add-block">
										<Grid item md={12} className="custom-white-box respo-mar-b-30">
											<h4 className="text-center box-header">USER PHOTO</h4>
											<Grid container className="search-form-main">
												<Grid item md={12} className="block-padding respo-w-100">
													<Grid container spacing={5} className="search-form-main align-items-center">
						                            	<Grid item md={6} className="search-form-block text-align-right respo-w-100 respo-t-center">
															<img className="width-180" src={User_Icon}/>
							                            </Grid>
							                            <Grid item md={6} className="search-form-block respo-w-100 custom-respo-block">
							                            	<div className="img-upload">
																<input
									                                type="file"
									                                name="user_img"
									                                id="user_img"
									                                className="insert-img"
									                            />
								                            </div>
								                            <Button variant="contained" color="primary" className="whitebg custom-btn-sec mar-t-24 respo-mar-t-0">
									                            Delete
									                        </Button>
							                            </Grid>
							                        </Grid>
							                    </Grid>
					                        </Grid>
			                            </Grid>
			                        </Grid>
			                        <Grid item md={6} className="user-add-block pad-t-0">
										<Grid item md={12} className="user-add-block">
											<label>Email ID</label>
											<TextField
				                                type="text"
				                                name="user_emailid"
				                                id="user_emailid"
												placeholder="Enter Email"
				                                className="search-email gm-t-10 custom-input"
												value={user.Email_ID}
				                            />
			                            </Grid>
			                        </Grid>
			                        <Grid item md={3} className="user-add-block pad-t-0">
			                        	<label>Country</label>
										<AutoComplete
			                                className="dropdown gm-t-10 w-100 mar-b-0"
			                                fullWidth
			                                options={country_opt}
											value={user.Country}
			                                renderInput={(params) => (
			                                    <TextField
			                                        {...params}
			                                        className="search-dropdown custom-input"
			                                        name="Select"
			                                        placeholder="Select"
													
			                                    />
			                                )}
			                            />
			                        </Grid>
			                        <Grid item md={3} className="user-add-block pad-t-0">
			                        	<label>State</label>
										<AutoComplete
			                                className="dropdown gm-t-10 w-100 mar-b-0"
			                                fullWidth
			                                options={state_opt}
											value={user.State}
			                                renderInput={(params) => (
			                                    <TextField
			                                        {...params}
			                                        className="search-dropdown custom-input"
			                                        name="Select"
			                                        placeholder="Select"
			                                    />
			                                )}
			                            />
			                        </Grid>
			                        <Grid item md={6} className="user-add-block pad-t-0">
										<Grid item md={12} className="user-add-block">
											<label>Address</label>
											<TextField
				                                type="text"
				                                name="address"
				                                id="address"
				                                placeholder="Enter Address"
				                                className="search-email gm-t-10 custom-input"
												value={user.Address}
				                            />
			                            </Grid>
			                        </Grid>
			                        <Grid item md={3} className="user-add-block pad-t-0">
			                        	<label>City</label>
										<TextField
			                                type="text"
			                                name="city"
			                                id="city"
			                                placeholder="Enter City"
			                                className="search-email gm-t-10 custom-input"
											value={user.City}
			                            />
			                        </Grid>
			                        <Grid item md={3} className="user-add-block pad-t-0">
			                        	<label>ZIP Code</label>
										<TextField
			                                type="text"
			                                name="zip"
			                                id="zip"
			                                placeholder="Enter Zip code"
			                                className="search-email gm-t-10 custom-input"
											value={user.ZIP_Code}
			                            />
			                        </Grid>
								</Grid>))}
							</div>
							<div className="search-form mar-t-50">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={12} className="search-form-block">
										<label className="font-20">Assign Permissions</label>
									</Grid>
									<Grid item md={5} className="user-add-block">
										<Grid item md={12} className="user-add-block">
											<AutoComplete
				                                className="dropdown gm-t-10 w-100 mar-b-0"
				                                fullWidth
				                                options={permission_opt}
												
				                                renderInput={(params) => (
				                                    <TextField
				                                        {...params}
				                                        className="search-dropdown custom-input"
				                                        label="Permission"
				                                        name="permission"
				                                        placeholder="Permission"
				                                    />
				                                )}
				                            />
			                            </Grid>
			                        </Grid>
			                        <Grid item md={5} className="user-add-block laptop-des">
										<Grid item md={12} className="user-add-block">
											<ul className="position-list">
												<li className="list-radio"><img src={Grey_circle}/></li>
												<li>Driver List <span className="cancel-btn"><img src={Close_btn}/></span></li>
												<li>Action_Workflow 1 <span className="cancel-btn"><img src={Close_btn}/></span></li>
											</ul>
										</Grid>
									</Grid>
			                    </Grid>
							</div>
							<div className="form-input text-left mar-t-50">
								<Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
	                                SAVE
	                            </Button>
	                            <Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={ ()=> navigate('/user_management')}>
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

export default EditUserManagement;