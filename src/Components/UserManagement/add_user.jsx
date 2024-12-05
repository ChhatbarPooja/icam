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
import { userManagementList, userManagementGet, userManagementAdd, userManagementUpdate } from "../../Services/api"
import { postDataFromApi, getDataFromApi, putDataFromApi } from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'
import AlertMessage from '../commoncomponent/AlertMessage'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import moment from 'moment'
import { gender_opt, country_opt, state_opt} from '../commoncomponent/CommonObject'

const TextField = styled(TextValidator)(() => ({
	width: '100%',
	marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
	width: 300,
	marginBottom: '16px',
}))

const permission_opt = [
	{ id: 1, label: "Add" },
	{ id: 2, label: "Action Workflow 1" },
	{ id: 3, label: "Action Workflow 2" },
]
const AddUserManagement = () => {

	let { User_ID } = useParams()
	const navigate = useNavigate()

	const [alert, setalert] = useState(false)
	const [alertMessage, setalertMessage] = useState('')
	const [alertType, setalertType] = useState('')

	const [selected, setSelected] = useState('yes');
	function confirm() {
		setalert(false)
		navigate('/user_management/')
	}
	const [dateopen, setdateOpen] = useState(false);

	const handleSubmitSearch = async (event) => {
		console.log(formdata)
		console.log(formdata.USER_PHOTO)
    	var formData = new FormData();
		formData.append("User_ID",formdata.User_ID);
		formData.append("Mobile_Number",formdata.Mobile_Number);
		formData.append("User_Name",formdata.User_Name);
		formData.append("DOB",formdata.DOB);
		formData.append("Email_ID",formdata.Email_ID);
		formData.append("Gender",formdata.Gender);
		formData.append("Country",formdata.Country);
		formData.append("State",formdata.State);
		formData.append("City",formdata.City);
		formData.append("ZIP_Code",formdata.ZIP_Code);
		formData.append("Address",formdata.Address);
		formData.append("USER_PHOTO",formdata.USER_PHOTO);
		/* var newformdata = {
			// "id": formdata.id,
			User_ID: formdata.User_ID,
			User_Name: formdata.User_Name,
			Mobile_Number: formdata.Mobile_Number,
			DOB: formdata.DOB,
			Email_ID: formdata.Email_ID,
			Gender: formdata.Gender,
			Country: formdata.Country,
			State: formdata.State,
			City: formdata.City,
			ZIP_Code: formdata.ZIP_Code,
			Address: formdata.Address
		}
		var editformdata = {
			User_ID: formdata.User_ID,
			User_Name: formdata.User_Name,
			Mobile_Number: formdata.Mobile_Number,
			DOB: formdata.DOB,
			Email_ID: formdata.Email_ID,
			USER_PHOTO: null,
			Gender: formdata.Gender,
			Country: formdata.Country,
			State: formdata.State,
			City: formdata.City,
			ZIP_Code: formdata.ZIP_Code,
			Address: formdata.Address
		} */

		var response = ''
		if (User_ID) {
			response = await putDataFromApi(
				userManagementUpdate + User_ID + "/update",
				formData
			)
		} else {
			response = await postDataFromApi(
				userManagementAdd,
				formData
			)
		}
		console.log('response', response)
		if (User_ID) {
			if (response && response.status == 200) {
				setalertMessage('User Updated successfully')
				setalert(true)
				setalertType('success')
			} else {
				setalertMessage('error...')
				setalert(true)
				setalertType('error')
			}
		} else {
			if (response && response.status == 201) {
				setalertMessage('User Added successfully')
				setalert(true)
				setalertType('success')

			} else {
				setalertMessage('error...')
				setalert(true)
				setalertType('error')

			}
		}

	}
	const [formdata, setFormData] = useState({ User_ID: "", User_Name: "", Mobile_Number: "", DOB: "", Email_ID: "", USER_PHOTO: "", Gender: "", Country: "", State: "", City: "", ZIP_Code: "", Address: "" })
	const [singleUser, setsingleUser] = useState([])
	const [is_edit_loaded, set_is_edit_loaded] = useState(false)
	const [previewImg,setpreviewImg] = useState('')


	const handleDateChange = (date, name) => {

		const momentdate = moment(date)
		var newdate = momentdate.format('YYYY-MM-DD')

		setFormData((formData) => ({
			...formData,
			[name]: newdate,
		}));
	}
	useEffect(() => {
		if (User_ID) {
			getsingleUser();
		} else {
			set_is_edit_loaded(true)
		}
	}, [])


	const getsingleUser = async () => {

		var response = ''
		response = await getDataFromApi(
			userManagementGet + User_ID + "/get")

		console.log('test1')

		console.log(response)

		if (response && response.status == 200 && response.data != null) {
			console.log('test')
			setsingleUser(response.data);
			console.log(response)
			console.log('singleUser', response.data);
			if (User_ID) {
				var userdata = response.data
				setFormData((formData) => ({
					...formData,
					['User_ID']: userdata.User_ID,
					['User_Name']: userdata.User_Name,
					['Mobile_Number']: userdata.Mobile_Number,
					['DOB']: userdata.DOB,
					['Email_ID']: userdata.Email_ID,
					['USER_PHOTO']:userdata.USER_PHOTO,
					['Gender']: userdata.Gender,
					['Country']: userdata.Country,
					['State']: userdata.State,
					['City']: userdata.City,
					['ZIP_Code']: userdata.ZIP_Code,
					['Address']: userdata.Address,

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
	const onFileChange = async(event) => {

		console.log('event',event.target.name)
		var file=event.target.files[0]
		console.log('file',file)
		
		
		setFormData((formData) => ({
		...formData,
		[event.target.name]:file,
		}));
		setpreviewImg(URL.createObjectURL(file))
		console.log('formdata--->',formdata)		
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
		console.log('mainoptiondata', data)
		const item = data.find((opt) => {
			if (label) {
				if (opt.label == id) return opt
			} else {
				if (opt.id == id) return opt
			}
		})
		console.log('item', item)
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
						<h4>{User_ID ? 'Edit User' : 'Add User'}</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={() => navigate('/user_management')}>User Management /</span>  {User_ID ? 'Edit User' : 'Add User'}</h6>
					</Grid>
					{/* {userarray.map((formdata, i) => ( */}
					<Grid item md={12} className="add-user-form-block">
						<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
							<div className="search-form">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={12} className="search-form-block">
										<label className="font-20">User Details</label>
									</Grid>
									<Grid item md={6} className="user-add-block">
										<Grid item md={12} className="user-add-block">
											<label>User ID</label>
											<TextField
												type="text"
												name="User_ID"
												id="User_ID"
												label="Enter User ID"
												placeholder="Enter User ID"
												value={formdata.User_ID}
												onChange={(e) => formdataValueChange(e)}
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>
										<Grid item md={12} className="user-add-block">
											<label>User Name</label>
											<TextField
												type="text"
												name="User_Name"
												id="user_name"
												label="Enter User name"
												placeholder="Enter User name"
												value={formdata.User_Name}
												onChange={(e) => formdataValueChange(e)}
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>
										<Grid item md={12} className="user-add-block">
											<label>Mobile Number</label>
											<TextField
												type="text"
												name="Mobile_Number"
												id="user_number"
												label="Enter mobile number"
												placeholder="Enter mobile number"
												value={formdata.Mobile_Number}
												onChange={(e) => formdataValueChange(e)}
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>

										<Grid container className="search-form-main">
											<Grid item md={4} className="search-form-block respo-w-100">
												<label>Date Of Birth</label>
												<LocalizationProvider dateAdapter={AdapterDateFns} >
													<DatePicker
														placeholderText="DD-MM-YYYY"
														className="gm-t-10 grey-bg date-custom"
														inputFormat="DD-MM-YYYY"
														name="DOB"
														value={formdata.DOB}
														onChange={(e, name) => handleDateChange(e, 'DOB')}
														renderInput={(props) => (
															<TextField
																{...props}
																value={formdata.DOB}
																// variant="Outlined"
																className="required"
																id="mui-pickers-date"
																label="DD-MM-YYYY"
																sx={{ mb: 2, width: '100%' }}
																onClick={(e) => setdateOpen(true)}
															/>
														)}
													/>
												</LocalizationProvider>

											</Grid>
											<Grid item md={4} className="search-form-block respo-w-100">
												<label>Gender</label>
												<AutoComplete
													className="dropdown gm-t-10 w-100 mar-b-0"
													fullWidth
													options={gender_opt}

													defaultValue={getSelectedItem(
														formdata.Gender,
														gender_opt
													)}
													getOptionLabel={(option) => option.label}

													onChange={(event, value) => changeDropdownValue('Gender', value)}
													renderInput={(params) => (
														<TextField
															{...params}
															className="search-dropdown custom-input"
															label="Gender"
															name="Gender"
															placeholder="Gender"
															validators={['required']}
															errorMessages={['this field is required']}
															value={formdata.Gender}
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
															<img className="width-180" src={previewImg ? previewImg : formdata.USER_PHOTO ? formdata.USER_PHOTO : User_Icon}/>
														</Grid>
														<Grid item md={6} className="search-form-block respo-w-100 custom-respo-block">
															<div className="img-upload">
																<input
																	type="file"
																	name="USER_PHOTO"
																	id="user_img"
																	/* value={formdata.USER_PHOTO} */
																	onChange={(e) => onFileChange(e)}
																	/* onChange={(e) => formdataValueChange(e)} */
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
												name="Email_ID"
												label="Enter email ID"
												placeholder="Enter email ID"
												value={formdata.Email_ID}
												onChange={(e) => formdataValueChange(e)}
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>
									</Grid>
									<Grid item md={3} className="user-add-block pad-t-0">
										<label>Country</label>
										<AutoComplete
											className="dropdown gm-t-10 w-100 mar-b-0"
											fullWidth
											options={country_opt}
											/* value={formdata.Country} */
											defaultValue={getSelectedItem(
												formdata.Country,
												country_opt
											)}
											getOptionLabel={(option) => option.label}
											onChange={(event, value) => changeDropdownValue('Country', value)}
											renderInput={(params) => (
												<TextField
													{...params}
													className="search-dropdown custom-input"
													label="Select"
													name="Country"
													placeholder="Select"
													value={formdata.Country}

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
											/* value={formdata.State} */
											getOptionLabel={(option) => option.label}
											defaultValue={getSelectedItem(
												formdata.State,
												state_opt
											)}
											onChange={(event, value) => changeDropdownValue('State', value)}
											renderInput={(params) => (
												<TextField
													{...params}
													className="search-dropdown custom-input"
													label="Select"
													name="State"
													placeholder="Select"
													value={formdata.State}

												/>
											)}
										/>
									</Grid>
									<Grid item md={6} className="user-add-block pad-t-0">
										<Grid item md={12} className="user-add-block">
											<label>Address</label>
											<TextField
												type="text"
												name="Address"
												id="address"
												label="Enter Address"
												placeholder="Enter Address"
												value={formdata.Address}
												onChange={(e) => formdataValueChange(e)}
												className="search-email gm-t-10 custom-input"
											/>
										</Grid>
									</Grid>
									<Grid item md={3} className="user-add-block pad-t-0">
										<label>City</label>
										<TextField
											type="text"
											name="City"
											id="city"
											label="Enter City"
											placeholder="Enter City"
											value={formdata.City}
											onChange={(e) => formdataValueChange(e)}
											className="search-email gm-t-10 custom-input"
										/>
									</Grid>
									<Grid item md={3} className="user-add-block pad-t-0">
										<label>ZIP Code</label>
										<TextField
											type="text"
											name="ZIP_Code"
											id="zip"
											label="Enter Zip code"
											placeholder="Enter Zip code"
											value={formdata.ZIP_Code}
											onChange={(e) => formdataValueChange(e)}
											className="search-email gm-t-10 custom-input"
										/>
									</Grid>
								</Grid>
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
												<li className="list-radio"><img src={Grey_circle} /></li>
												<li>Driver List <span className="cancel-btn"><img src={Close_btn} /></span></li>
												<li>Action_Workflow 1 <span className="cancel-btn"><img src={Close_btn} /></span></li>
											</ul>
										</Grid>
									</Grid>
								</Grid>
							</div>
							<div className="form-input text-left mar-t-50">
								<Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
									SAVE
								</Button>
								<Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={() => navigate('/user_management')}>
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

export default AddUserManagement;