import React, { useState } from "react";
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
import editdriver from "../../Assets/images/editdriver.png";
import Grey_circle from "../../Assets/images/grey-circle.png";
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {driverUpdate} from "../../Services/api"
import {postDataFromApi} from "../../Services/CommonServices"


const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
/*const RadioGroup = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))*/
const FormControlLabel = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));
const AutoComplete = styled(Autocomplete)(() => ({
  width: 300,
  marginBottom: "16px",
}));
const gender_opt = [
  { id: 1, label: "Male" },
  { id: 2, label: "Female" },
];
const country_opt = [
  { id: 1, label: "Country 1" },
  { id: 2, label: "Country 2" },
  { id: 3, label: "Country 3" },
];
const state_opt = [
  { id: 1, label: "State 1" },
  { id: 2, label: "State 2" },
  { id: 3, label: "State 3" },
];
const manage_opt = [
  { id: 1, label: "Manage 1" },
  { id: 2, label: "Manage 2" },
  { id: 3, label: "Manage 3" },
];

const EditDriver = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("yes");
  const handleSubmitSearch = async (event) => {
    console.log(formdata)
    var newformdata={
        "Driver_ID": formdata.Driver_ID,
        "Driver_Name": formdata.Driver_Name,
        "Mobile_Number": formdata.Mobile_Number,
        "Email_ID": formdata.Email_ID,
        "Driver_Age": formdata.Driver_Age,
        "Driver_Gender": formdata.Driver_Gender,
        "License_Number": formdata.License_Number,
        "Registerd_Date": formdata.Registerd_Date,
        "Address": formdata.Address,
        "City": formdata.City,
        "State": formdata.State,
        "Country": formdata.Country,
        "ZIP_Code": formdata.ZIP_Code,
        "Description": formdata.Description,
        "Upload_Photo": formdata.Upload_Photo,
        "Documents_Upload": formdata.Documents_Upload,
        "status": formdata.nameRadio,
        
       
    }
    var response=''
    response = await postDataFromApi(
      driverUpdate,
        newformdata
    )
    if(response && response.status==200){
        console.log(response.data)
    }
}
const [formdata,setFormData]=useState({Driver_ID:"",Driver_Name:"",Mobile_Number:"",Email_ID:"",Driver_Age:"",Driver_Gender:"",License_Number:"",Registerd_Date:"",Address:"",City:"",State:"",Country:"",ZIP_Code:"",Description:"",Upload_Photo:"",Documents_Upload:"",nameRadio:""})
const handleDateChange = (value, name) => {
    console.log(value);
    console.log(name);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  function formdataValueChange(e){
    var value=e.target.value.trimStart()
    setFormData((formData) => ({
        ...formData,
        [e.target.name]:value,
    }));
}
function changeDropdownValue(type,e){
    if(e){
       var value=e.id
    }else{
        var value=""
    }
    setFormData((formData) => ({
        ...formData,
        [type]:value,
    }));
}

  return (
    <>
      <Box className="main-box mar-t-24 grey-bg pad-b-50">
        <Grid container spacing={3} className="main-grid">
          <Grid item md={6} className="main-title">
            <h4>Edit Drivers</h4>
          </Grid>
          <Grid item md={6} className="breadcrumb">
            <h6>
              <span className="pointer" onClick={() => navigate("/dashboard")}>
                Home /
              </span>{" "}
              <span className="pointer" onClick={() => navigate("/drivers")}>
                Drivers /
              </span>{" "}
              Edit Driver
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
                            name="Driver_ID"
                            id="driver_id"
                            placeholder="Enter driver Id"
                            className="search-email gm-t-10 custom-input"
                            value={formdata.Driver_ID || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block driver_name-respo">
                          <label>Driver Name</label>
                          <TextField
                            type="text"
                            name="Driver_Name"
                            id="driver_name"
                            placeholder="Enter driver name"
                            className="search-email gm-t-10 custom-input "
                            value={formdata.Driver_Name || ''}
                            onChange={(e)=>formdataValueChange(e)}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Mobile Number</label>
                          <TextField
                            type="text"
                            name="Mobile_Number"
                            id="driver_number"
                            placeholder="Enter driver number"
                            className="search-email gm-t-10 custom-input"
                            value={formdata.Mobile_Number || ''}
                            onChange={(e)=>formdataValueChange(e)}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Email ID</label>
                          <TextField
                            type="email"
                            name="Email_ID"
                            id="email"
                            placeholder="Enter Email"
                            className="search-email gm-t-10 custom-input"
                            value={formdata.Email_ID || ''}
                            onChange={(e)=>formdataValueChange(e)}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Driver Age</label>
                          <DatePicker
                            className="gm-t-10 grey-bg date-custom cal-h search-email"
                            placeholderText="DD-MM-YYYY"
                            name="Driver_Age"
                            value={formdata.Driver_Age || ""}
                            onChange={(value, name) =>
                              handleDateChange(value, "Driver_Age")
                            }
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Driver Gender</label>
                          <AutoComplete
                            className="dropdown gm-t-10 w-100 mar-b-0"
                            fullWidth
                            options={gender_opt}
                            onChange={(event, value) => changeDropdownValue('Driver_Gender',value)}

                            defaultValue={'Male'}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                name="Driver_Gender"
                                placeholder="Gender"
                                value={formdata.Driver_Gender || ''}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>License Number</label>
                          <TextField
                            type="text"
                            name="License_Number"
                            id="license"
                            placeholder="Enter Driver license number"
                            value={formdata.License_Number || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>Registered Date</label>
                          <DatePicker
                            className="gm-t-10 grey-bg date-custom cal-h search-email"
                            placeholderText="DD-MM-YYYY"
                            name="Registerd_Date"
                            value={formdata.Registerd_Date || ""}
                            onChange={(value, name) =>
                              handleDateChange(value, "Registerd_Date")
                            }
                          />
                        </Grid>
                        <Grid item md={12} className="user-add-block pad-t-0">
                          <label>Address</label>
                          <TextField
                            type="text"
                            name="Address"
                            id="address"
                            placeholder="Enter Address"
                            value={formdata.Address || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>City</label>
                          <TextField
                            type="text"
                            name="City"
                            id="City"
                            value={formdata.City || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            placeholder="Enter City"
                            className="search-email gm-t-10 custom-input"
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>State</label>
                          <AutoComplete
                            className="dropdown gm-t-10 w-100 mar-b-0"
                            fullWidth
                            options={state_opt}
                            onChange={(event, value) => changeDropdownValue('State',value)}

                            defaultValue={"Gujarat"}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                name="State"
                                placeholder="State"
                                value={formdata.State || ''}
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
                            onChange={(event, value) => changeDropdownValue('Country',value)}

                            defaultValue={"India"}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className="search-dropdown custom-input"
                                name="Country"
                                placeholder="Country"
                                value={formdata.Country || ''}

                              />
                            )}
                          />
                        </Grid>
                        <Grid item md={6} className="user-add-block pad-t-0">
                          <label>ZIP Code</label>
                          <TextField
                            type="text"
                            name="ZIP_Code"
                            id="zipcode"
                            value={formdata.ZIP_Code || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            placeholder="Enter zipcode"
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
                            name="Description"
                            id="Description"
                            // label="Write something about driver...."
                            placeholder="Write something about driver...."
                            value={formdata.Description || ''}
                            onChange={(e)=>formdataValueChange(e)}
                            className="search-email gm-t-10 custom-input"
                            multiline
                            rows={7}
                            maxRows={10}

                          />
                        </Grid>
                        <Grid
                          container
                          md={12} sm={12}
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
                                src={editdriver}
                                className="driver_user_icon"
                              />
                              <label for="inputTag">
                                <span className="browse">Browse</span>
                                <span className="no_file_chosen">
                                  ipsum.jpg
                                </span>
                                <input id="inputTag" type="file" />
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
                                <label for="inputTag">
                                  <span className="browse">Browse</span>
                                  <span className="no_file_chosen">
                                   isup.pdf
                                  </span>
                                  <input id="inputTag" type="file" />
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
                            md={3} sm={6}
                            className="search-form-block  status-grid"
                          >
                            <label>Status</label>
                            <RadioGroup
                              name="nameRadio"
                              value={formdata.nameRadio || ''}
                              onChange={(e)=>formdataValueChange(e)}
                              className="gm-t-10 flex-content driver_add_status"
                            >
                              <div className="radio-options radio_div_view">
                                <Radio
                                  value="active"
                                  checked={selected === "yes"}
                                />
                                Active
                              </div>
                              <div className="radio-options">
                                <Radio value="inactive" />
                                Inactive
                              </div>
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
  );
};

export default EditDriver;
