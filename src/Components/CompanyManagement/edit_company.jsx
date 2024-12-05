import React, { useState } from "react";
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
import {RadioGroup, Radio} from "react-radio-group";
import "react-datepicker/dist/react-datepicker.css";
import Company_Icon from "../../Assets/images/export-logo.png"
import Grey_circle from "../../Assets/images/grey-circle.png"
import edit_company from "../../Assets/images/editcompany.png"
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
const manage_opt=[
    {id: 1,label:"Manage 1"},
    {id: 2,label:"Manage 2"},
    {id: 3,label:"Manage 3"},
]

const AddCompanyManagement=() => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState('yes');
    const handleSubmitSearch = async (event) => {

    }
    const [formdata,setFormData]=useState({dateofBirth:""})
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
                        <h4>EDIT COMPANY</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={ ()=> navigate('/company_management')}>Company Management /</span> Edit Company</h6>
                    </Grid>
                    <Grid item md={12} className="add-user-form-block">
                        <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
                            <div className="search-form extra-padding">
                                <Grid container spacing={3} className="search-form-main">
                                    <Grid item md={6} className="search-form-block">
                                        <label className="font-20 respo-pad-20">User Details</label>
                                    </Grid>
                                    <Grid item md={6} className="search-form-block text-align-right respo-t-center">
                                        <Button variant="contained" color="primary" className="whitebg custom-btn" onClick={ ()=> navigate('/company_management')}>
                                            COMPANY LIST
                                        </Button>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block">
                                        <div className="grey-blocks">
                                            <Grid item md={12} className="search-form-block mar-b-24">
                                                <label className="font-16 font-600">Basic Information</label>
                                            </Grid>
                                            <Grid container spacing={3} className="search-form-main">
                                                <Grid item md={6} className="user-add-block">
                                                    <label>Company Id</label>
                                                    <TextField
                                                        type="text"
                                                        name="company_id"
                                                        id="company_id"
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        value={"2134234"}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block res-pad-t-0">
                                                    <label>Company Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="company_name"
                                                        id="company_name"
                                                        value={"Ipsum Ijsflfo"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Managed by</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0 dark-grey-color"
                                                        fullWidth
                                                        options={manage_opt}
                                                        defaultValue={'Ipdsum'}
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
                                                    <label>Category</label>
                                                    <TextField
                                                        type="text"
                                                        name="category"
                                                        id="category"
                                                        value={"asdfasdf"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Register date</label>
                                                    <DatePicker 
                                                        className="gm-t-10 grey-bg date-custom cal-h dark-grey-bg dark-grey-color"
                                                        placeholderText="DD-MM-YYYY" 
                                                        name="registerdate" 
                                                        value={formdata.dateofBirth || '23-11-21'} 
                                                        onChange={(value, name) => handleDateChange(value, 'dateofBirth')} 
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Website</label>
                                                    <TextField
                                                        type="text"
                                                        name="website"
                                                        id="website"
                                                        value={"www.abbsk.com"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Country</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0 dark-grey-color"
                                                        fullWidth
                                                        options={country_opt}
                                                        defaultValue={'Germany'}
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
                                                    <label>City</label>
                                                    <TextField
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        value={"Heidelberg"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>State</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        options={state_opt}
                                                        defaultValue={'Hamburg'}
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
                                                    <label>Zipcode</label>
                                                    <TextField
                                                        type="text"
                                                        name="zipcode"
                                                        id="zipcode"
                                                        value={"456001"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={12} className="search-form-block mar-b-24">
                                                    <label className="font-16 font-600">Company  Overview</label>
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Title</label>
                                                    <TextField
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        value={"Ipsum Ijsflfo. pvt .lmtd"}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Status</label>
                                                    <RadioGroup name="nameRadio" value={''} className="gm-t-10 flex-content">
                                                        <div className="radio-options">
                                                            <Radio value="active" checked={selected === 'yes'}/>Active
                                                        </div>
                                                        <div className="radio-options">
                                                            <Radio value="inactive" />Inactive
                                                        </div>
                                                    </RadioGroup>
                                                </Grid>
                                                <Grid item md={12} className="user-add-block pad-t-0">
                                                    <label>Description</label>
                                                    <Editor 
                                                        wrapperClassName="custom-editor"
                                                        toolbar={{
                                                            options: ['inline', 'fontSize', 'textAlign', 'remove', 'colorPicker']
                                                        }}
                                                        placeholder="Enter yor contents...."
                                                    />
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item md={5} className="user-add-block">
                                        <Grid item md={12} className="grey-blocks respo-mar-b-30 min-pad">
                                            <h4 className="box-header side-p">LOGO UPLOAD</h4>
                                            <Grid container className="search-form-main">
                                                <Grid item md={12} className="block-padding respo-w-100">
                                                    <Grid container spacing={5} className="search-form-main align-items-center">
                                                        <Grid item md={12} className="search-form-block text-center respo-w-100 respo-t-center p-relative">
                                                            <img className="width-180" src={edit_company}/>
                                                        </Grid>
                                                        <Grid item md={12} className="search-form-block respo-w-100 custom-respo-block text-center">
                                                            <div className="img-upload marg-0-auto upload-logo">
                                                                <input
                                                                    type="file"
                                                                    name="user_img"
                                                                    id="user_img"
                                                                    className="insert-img"
                                                                />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="form-input text-left mar-t-50">
                                <Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
                                    SAVE
                                </Button>
                                <Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={ ()=> navigate('/company_management')}>
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

export default AddCompanyManagement;