import React, { useState, useEffect } from "react";
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
import { Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { RadioGroup, Radio } from "react-radio-group";
import "react-datepicker/dist/react-datepicker.css";
import User_Icon from "../../Assets/images/user-icon.png";
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { driverUpdate, driverCreate, driverGet } from "../../Services/api";
import { postDataFromApi, putDataFromApi, getDataFromApi } from "../../Services/CommonServices";
import { useParams } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import AlertMessage from '../commoncomponent/AlertMessage'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import moment from 'moment'
import { gender_opt, country_opt, state_opt} from '../commoncomponent/CommonObject'

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: "16px",
}));

const manage_opt = [
  { id: 1, label: "Manage 1" },
  { id: 2, label: "Manage 2" },
  { id: 3, label: "Manage 3" },
];

const AddDriver = () => {
  let { driverid } = useParams();
  const navigate = useNavigate();

  const [alert, setalert] = useState(false)
	const [alertMessage, setalertMessage] = useState('')
	const [alertType, setalertType] = useState('')
  const [formdata, setFormData] = useState({ address: "", city: "", country: "", description: "", documents_upload: "", driver_age: "", driver_gender: "", driver_id: "", driver_name: "", email_id: "", id: "", license_number: "", mobile_number: "", registerd_date: "", state: "", status: "ACTIVE", upload_photo: "", zip_code: "" })
  const [singleUser, setsingleUser] = useState([])
	const [is_edit_loaded, set_is_edit_loaded] = useState(false)
  const [selected, setSelected] = useState("yes");
  const [previewImg,setpreviewImg] = useState('')

  function confirm() {
		setalert(false)
		navigate('/drivers/')
	}
	const [dateopen, setdateOpen] = useState(false);
  
  const handleSubmitSearch = async (event) => {
    console.log(formdata);
    console.log(formdata.documents_upload)
    var formData = new FormData();
    formData.append("address",formdata.address);
    formData.append("city",formdata.city);
    formData.append("country",formdata.country);
    formData.append("description",formdata.description);
    formData.append("documents_upload",formdata.documents_upload);
    formData.append("driver_age",formdata.driver_age);
    formData.append("driver_gender",formdata.driver_gender);
    formData.append("driver_id",formdata.driver_id);
    formData.append("driver_name",formdata.driver_name);
    formData.append("email_id",formdata.email_id);
   /*  formData.append("id",formdata.id); */
    formData.append("license_number",formdata.license_number);
    formData.append("mobile_number",formdata.mobile_number);
    formData.append("registerd_date",formdata.registerd_date);
    formData.append("state",formdata.state);
    formData.append("status",formdata.status);
    formData.append("upload_photo",formdata.upload_photo);
    formData.append("zip_code",formdata.zip_code);

    var response = "";
    if (driverid) {
			response = await putDataFromApi(
				driverUpdate + driverid + "/update",
				formData, 1
			)
		} else {
			response = await postDataFromApi(
				driverCreate,
				formData, 1,1
			)
		}
    console.log('response', response)
    if (driverid) {
			if (response && response.status == 200) {
				setalertMessage('Driver Updated successfully')
				setalert(true)
				setalertType('success')
			} else {
				setalertMessage('error...')
				setalert(true)
				setalertType('error')
			}
		} else {
			if (response && response.status == 201) {
				setalertMessage('Driver Added successfully')
				setalert(true)
				setalertType('success')

			} else {
				setalertMessage('error...')
				setalert(true)
				setalertType('error')

			}
		}
  };


  const handleDateChange = (date, name) => {

		const momentdate = moment(date)
		var newdate = momentdate.format('YYYY-MM-DD')
    console.log("newdate")
    console.log(newdate)
    console.log("newdate")

		setFormData((formData) => ({
			...formData,
			[name]: newdate,
		}));
	}
  useEffect(() => {
		if (driverid) {
			getsingleUser();
		} else {
			set_is_edit_loaded(true)
		}
	}, [])
  const getsingleUser = async () => {

		var response = ''
		response = await getDataFromApi(
			driverGet + driverid + "/get", 1)

		console.log('test1')

		console.log(response)

		if (response && response.status == 200 && response.data != null) {
			console.log('test')
			setsingleUser(response.data);
			console.log(response)
			console.log('singleUser', response.data);
			if (driverid) {
				var userdata = response.data
				setFormData((formData) => ({
					...formData,
					['address']: userdata.address,
					['city']: userdata.city,
					['country']: userdata.country,
					['description']: userdata.description,
					['documents_upload']: userdata.documents_upload,
					['driver_age']: userdata.driver_age,
					['driver_gender']: userdata.driver_gender,
					['driver_id']: userdata.driver_id,
					['driver_name']: userdata.driver_name,
					['email_id']: userdata.email_id,
					['license_number']: userdata.license_number,
					['mobile_number']: userdata.mobile_number,
          ['registerd_date']: userdata.registerd_date,
					['state']: userdata.state,
					['status']: userdata.status,
					['upload_photo']: userdata.upload_photo,
					['zip_code']: userdata.zip_code,
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
    console.log(value)
	}
  function formdataValueChangeRadio(e,name) {
   
		var value = e
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
    console.log(value)
	}

  const onFileChange = async(event) => {

    console.log('event',event.target.name)
    var file=event.target.files[0]
    console.log('file',file)
    
    
    setFormData((formData) => ({
    ...formData,
    [event.target.name]:file,
    }));
    if(event.target.name == 'upload_photo'){
      setpreviewImg(URL.createObjectURL(file))
    }
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
            <h4>{driverid ? "Edit Drivers" : "Drivers"}</h4>
          </Grid>
          <Grid item md={6} className="breadcrumb">
            <h6>
              <span className="pointer" onClick={() => navigate("/dashboard")}>
                Home /
              </span>{" "}
              <span className="pointer" onClick={() => navigate("/drivers")}>
                Drivers /
              </span>{" "}
              {driverid ? "Edit driver" : "Add driver"}
            </h6>
          </Grid>
          <Grid item md={12} className="add-user-form-block">
            <ValidatorForm
              onSubmit={handleSubmitSearch}
              onError={() => null}
              className=""
            >
              <div className="search-form">
                <Grid container spacing={3} className="search-form-main">
                  <Grid item md={12} className="user-add-block">
                    <div>
                      <Grid container spacing={3} className="search-form-main">
                        <Grid item md={6} className="user-add-block">
                          <label>Driver Id</label>
                          <TextField
                            type="text"
                            name="driver_id"
                            id="driver_id"
                            label="Enter driver Id"
                            placeholder="Enter driver Id"
                            value={formdata.driver_id || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid
                          item
                          md={6}
                          className="user-add-block driver_name-respo"
                        >
                          <label>Driver Name</label>
                          <TextField
                            type="text"
                            name="driver_name"
                            id="driver_name"
                            label="Enter driver name"
                            placeholder="Enter driver name"
                            value={formdata.driver_name || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input "
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Mobile Number</label>
                          <TextField
                            type="text"
                            name="mobile_number"
                            id="mobile_number"
                            label="Enter driver number"
                            placeholder="Enter driver number"
                            value={formdata.mobile_number || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Email ID</label>
                          <TextField
                            type="email"
                            name="email_id"
                            id="email_id"
                            label="Enter Email"
                            placeholder="Enter Email"
                            value={formdata.email_id || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Driver Age</label>
                          <TextField
                            type="text"
                            name="driver_age"
                            id="driver_age"
                            label="Enter Driver Age"
                            placeholder="Enter Driver Age"
                            value={formdata.driver_age || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Driver Gender</label>
                          <AutoComplete
                            className="dropdown gm-t-10 w-100 mar-b-0"
                            fullWidth
                            options={gender_opt}
                            defaultValue={getSelectedItem(
                              formdata.driver_gender,
                              gender_opt
                            )}
                            getOptionLabel={(option) => option.label}
                            onChange={(event, value) => changeDropdownValue('driver_gender', value)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                label="Gender"
                                name="driver_gender"
                                placeholder="Gender"
                                validators={['required']}
															  errorMessages={['this field is required']}
															  value={formdata.driver_gender}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>License Number</label>
                          <TextField
                            type="text"
                            name="license_number"
                            id="license_number"
                            label="Enter Driver license number"
                            placeholder="Enter Driver license number"
                            value={formdata.license_number || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Registered Date</label>
                          <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DatePicker
                              placeholderText="DD-MM-YYYY"
                              className="gm-t-10 grey-bg date-custom cust-width"
                              inputFormat="DD-MM-YYYY"
                              name="registerd_date"
                              value={formdata.registerd_date}
                              onChange={(e, name) => handleDateChange(e, 'registerd_date')}
                              renderInput={(props) => (
                                <TextField
                                  {...props}
                                  value={formdata.registerd_date}
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
                        <Grid item md={12} className="user-add-block pad-t-0">
                          <label>Address</label>
                          <TextField
                            type="text"
                            name="address"
                            id="address"
                            label="Enter Address"
                            placeholder="Enter Address"
                            value={formdata.address || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>City</label>
                          <TextField
                            type="text"
                            name="city"
                            id="city"
                            label="Enter City"
                            placeholder="Enter City"
                            value={formdata.city || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>State</label>
                          <AutoComplete
                            className="dropdown gm-t-10 w-100 mar-b-0"
                            fullWidth
                            options={state_opt}
                            getOptionLabel={(option) => option.label}
                            defaultValue={getSelectedItem(
                              formdata.state,
                              state_opt
                            )}
											      onChange={(event, value) => changeDropdownValue('state', value)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                label="State"
                                name="state"
                                placeholder="Select"
                                value={formdata.state || ""}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Country</label>
                          <AutoComplete
                            className="dropdown gm-t-10 w-100 mar-b-0"
                            fullWidth
                            options={country_opt}
                            defaultValue={getSelectedItem(
                              formdata.country,
                              country_opt
                            )}
                            getOptionLabel={(option) => option.label}
                            onChange={(event, value) => changeDropdownValue('country', value)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                label="Country"
                                name="country"
                                placeholder="Select"
                                value={formdata.country || ""}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>ZIP Code</label>
                          <TextField
                            type="text"
                            name="zip_code"
                            id="zip_code"
                            label="Enter zipcode"
                            placeholder="Enter zipcode"
                            value={formdata.zip_code || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid
                          item
                          md={12}
                          className="search-form-block mar-b-24 driver_name-respo"
                        >
                          <label className="font-16 font-600">
                            Description
                          </label>
                          <TextField
                            type="text"
                            name="description"
                            id="description"
                            label="Write something about driver...."
                            placeholder="Write something about driver...."
                            value={formdata.description || ""}
                            onChange={(e) => formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                            multiline
                            rows={7}
                            maxRows={10}
                          />
                        </Grid>
                        <Grid
                          container
                          md={12}
                          sm={12}
                          className="profile-docs-container f-d-column"
                        >
                          <Grid
                            item
                            md={4}
                            className="search-form-block mar-b-24 profile-grid"
                          >
                            <label className="upload_profile">
                              Upload Profile
                            </label>

                            <div className="driver_profile">
                              <img
                                src={previewImg ? previewImg : formdata.upload_photo ? formdata.upload_photo : User_Icon}
                                className="driver_user_icon"
                              />
                              <label for="inputTag">
                                <span className="browse">Browse</span>
                                <span className="no_file_chosen">
                                  No File Chosen
                                </span>
                                <input
																	type="file"
																	name="upload_photo"
																	id="inputTag"
																	
																	onChange={(e) => onFileChange(e)}
																	className="insert-img"
																/>
                              </label>
                            </div>

                            <Button
                              variant="contained"
                              color="primary"
                              className="whitebg custom-btn upload-btn"
                              type="submit"
                            >
                              UPLOAD
                            </Button>
                          </Grid>
                          <Grid
                            item
                            md={4}
                            className="search-form-block mar-b-24 docs_div2"
                          >
                            <label>Documents Upload </label>
                            <div className="docs_div">
                              <div className="driver_profile docs_file">
                                <label for="documents_upload">
                                  <span className="browse">Browse</span>
                                  <span className="no_file_chosen">
                                    No File Chosen
                                  </span>
                                  <input
                                    type="file"
                                    name="documents_upload"
                                    id="documents_upload"
                                    /* value={formdata.documents_upload} */
                                    onChange={(e) => onFileChange(e)}
                                    className="insert-img"
                                  />
                                </label>
                              </div>
                              <Button
                                variant="contained"
                                color="primary"
                                className="whitebg custom-btn upload-btn docs-btn"
                                type="submit"
                              >
                                UPLOAD
                              </Button>
                            </div>
                          </Grid>

                          <Grid
                            item
                            md={3}
                            sm={6}
                            className="search-form-block  status-grid"
                          >
                            <label>Status</label>
                            <RadioGroup
                              name= "status"
                              value={formdata.status || ''}
                              onChange={(e) => formdataValueChangeRadio(e,'status')}
                              className="gm-t-10 flex-content driver_add_status flex-d-row gm-t-10 flex-content pad-t-0 flex-d-row"
                            >
                              <FormControlLabel
                                value="ACTIVE"  
                                control={<Radio />}
                                label="Active"
                                className="radio-options"
                              />

                              <FormControlLabel
                                value="INACTIVE"
                                control={<Radio />}
                                label="Inactive"
                                className="radio-options"
                              />
                            </RadioGroup>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>

              <div className="form-input text-left mar-t-50">
                <Button
                  variant="contained"
                  color="primary"
                  className="whitebg custom-btn"
                  type="submit"
                >
                  SAVE
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="whitebg custom-btn-sec"
                  onClick={() => navigate("/user_management")}
                >
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
};

export default AddDriver;
