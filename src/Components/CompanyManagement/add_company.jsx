import React, { useState, useEffect } from "react";
import { useTheme, styled } from '@mui/system'
import {
    Box,
    Grid,
    Button,

} from '@mui/material'
import { ContentState, convertToRaw } from 'draft-js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import "react-datepicker/dist/react-datepicker.css";
import Company_Icon from "../../Assets/images/export-logo.png"
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { companyManagementAdd ,companyManagementGet,companyManagementUpdate} from "../../Services/api"
import { putDataFromApi ,postDataFromApi, getDataFromApi } from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'
import AlertMessage from '../commoncomponent/AlertMessage'
import {country_opt,state_opt,manage_opt} from '../commoncomponent/CommonObject'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import moment from 'moment'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))


const AddCompanyManagement = () => {
    let { companyid } = useParams()
    const navigate = useNavigate()
   
    const [alert, setalert] = useState(false)
    const [alertMessage, setalertMessage] = useState('')
    const [alertType, setalertType] = useState('')

    const [selected, setSelected] = useState('yes');
    let _contentState = ContentState.createFromText('');
    const raw = convertToRaw(_contentState)
    const [contentState, setContentState] = useState(raw)
    
    function confirm() {
        setalert(false)
        navigate('/company_management/')
    }

    const [dateopen, setdateOpen] = useState(false);

    const handleSubmitSearch = async (event) => {
        console.log(formdata)
        console.log(formdata.USER_PHOTO)
    	var formData = new FormData();
		formData.append("company_name",formdata.company_name);
		formData.append("managed_by",formdata.managed_by);
		formData.append("category",formdata.category);
		formData.append("register_date",formdata.register_date);
		formData.append("website",formdata.website);
		formData.append("country",formdata.country);
		formData.append("city",formdata.city);
		formData.append("state",formdata.state);
		formData.append("zipcode",formdata.zipcode);
		formData.append("title",formdata.title);
		formData.append("status",formdata.status);
        formData.append("description",formdata.description);
		formData.append("logo",formdata.logo);
        /* var newformdata = {
            
            company_name: formdata.company_name,
            managed_by: formdata.managed_by,
            category: formdata.category,
            register_date: formdata.dateofBirth,
            website: formdata.website,
            country: formdata.country,
            city: formdata.city,
            state: formdata.state,
            zipcode: formdata.zipcode,
            title: formdata.title,
            status: formdata.nameRadio,
            description: formdata.description,
            logo: null
        }

        var editformdata = {
            company_name: formdata.company_name,
            managed_by: formdata.managed_by,
            category: formdata.category,
            register_date: formdata.dateofBirth,
            website: formdata.website,
            country: formdata.country,
            city: formdata.city,
            state: formdata.state,
            zipcode: formdata.zipcode,
            title: formdata.title,
            status: formdata.nameRadio,
            description: formdata.description,
            logo: null
        } */

        var response = ''
        if (companyid) {
            response = await putDataFromApi(
                companyManagementUpdate+companyid,
                formdata
            )
        } else {
            response = await postDataFromApi(
                companyManagementAdd,
                formdata
            )
        }
        console.log('response',response)
        if(companyid){
            if(response && response.status==200){
                setalertMessage('Company Updated successfully')
                setalert(true)
                setalertType('success')                    
            } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')                    
            }
        }else{
            if(response && response.status==201){
                setalertMessage('Company Added successfully')
                setalert(true)
                setalertType('success')
            
            } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')
            
            }
        }
        
    }
    const [formdata, setFormData] = useState({ company_id: "", company_name: "", managed_by: "", category: "", dateofBirth: "", website: "", country: "", city: "", state: "", zipcode: "", title: "", nameRadio: "ACTIVE", description: "" })
    const [singleUser, setsingleUser] = useState([])
    const [is_edit_loaded, set_is_edit_loaded] = useState(false)
    const [previewImg,setpreviewImg] = useState('')

    const handleDateChange = (date,name) => {
        
        const momentdate = moment(date)
        var newdate = momentdate.format('DD-MM-YYYY')
        
        setFormData((formData) => ({
            ...formData,
            [name]:newdate,
        }));
    }
    useEffect(() => {
        if (companyid) {
            getsingleUser();
        } else {
            set_is_edit_loaded(true)
        }
    }, [])
    const getsingleUser = async () => {

        var response = ''
        response = await getDataFromApi(
        companyManagementGet+'/'+companyid)
        /* var response = {
            status: 200,
            data: {
                company_id: 2134234, company_name: "Ipsum Ijsflfo", managed_by: "Ipdsum", category: 'asdfasdf', register_date: "23-11-2021",
                website: "www.abbsk.com", country: "Germany", city: "Heidelberg", state: "Hamburg", zipcode: 456001,
                title: "Ipsum Ijsflfo. pvt .lmtd", status: "ACTIVE", description: "Enter yor contents....", logo: ""
            }
        }
 */
        console.log('test1')

        console.log(response)

        if (response && response.status == 200 && response.data != null) {
            console.log('test')
            setsingleUser(response.data);
            console.log(response)
            console.log('singleUser', response.data);
            if (companyid) {
                var userdata = response.data
                setFormData((formData) => ({
                    ...formData,

                    ['company_id']: userdata.company_id,
                    ['company_name']: userdata.company_name,
                    ['managed_by']: userdata.managed_by,
                    ['category']: userdata.category,
                    ['register_date']: userdata.register_date ? moment(userdata.register_date).format('DD-MM-YYYY'):'',
                    ['website']: userdata.website,
                    ['country']: userdata.country,
                    ['city']: userdata.city,
                    ['state']: userdata.state,
                    ['zipcode']: userdata.zipcode,
                    ['title']: userdata.title,
                    ['status']: userdata.nameRadio,
                    ['description']: userdata.description,
                    ['logo']: userdata.logo

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
            var value = e.label
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

    const fileHandler = (event) => {
        console.log(event.target.files[0])
    }
    const alt = (event) => {
        return(event.target.files[0].name)
    }
    const preview = (event) => {
        return (
            URL.createObjectURL(event.target.files[0])
        )
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
                        <h4>{companyid ? 'Edit Company' : 'Add Company'}</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={() => navigate('/company_management')}>Company Management /</span>{companyid ? 'Edit Company' : 'Add Company'}</h6>
                    </Grid>
                    <Grid item md={12} className="add-user-form-block">
                        <ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="">
                            <div className="search-form extra-padding">
                                <Grid container spacing={3} className="search-form-main">
                                    <Grid item md={6} className="search-form-block">
                                        <label className="font-20 respo-pad-20">Company Details</label>
                                    </Grid>
                                    <Grid item md={6} className="search-form-block text-align-right respo-t-center">
                                        <Button variant="contained" color="primary" className="whitebg custom-btn" onClick={() => navigate('/company_management')}>
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
                                                        label="Enter company Id"
                                                        placeholder="Enter company Id"
                                                        value={formdata.company_id}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block res-pad-t-0">
                                                    <label>Company Name</label>
                                                    <TextField
                                                        type="text"
                                                        name="company_name"
                                                        id="company_name"
                                                        label="Enter company name"
                                                        placeholder="Enter company name"
                                                        value={formdata.company_name}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        validators={['required']}
                                                        errorMessages={['this field is required']}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Managed by</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0 dark-grey-color"
                                                        fullWidth
                                                        options={manage_opt}
                                                        defaultValue={getSelectedItem(
                                                            formdata.managed_by,
                                                            manage_opt
                                                        )}
                                                        getOptionLabel={(option) => option.label}
                                                        onChange={(event, value) => changeDropdownValue('managed_by', value)}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                label="Select"
                                                                name="managed_by"
                                                                placeholder="Select"
                                                                validators={['required']}
                                                                errorMessages={['this field is required']}
                                                                value={formdata.managed_by}
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
                                                        label="Enter category"
                                                        placeholder="Enter category"
                                                        value={formdata.category}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        validators={['required']}
                                                        errorMessages={['this field is required']}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Register date</label>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                                        <DatePicker
                                                            placeholderText="DD-MM-YYYY"
                                                            className="gm-t-10 grey-bg date-custom cal-h dark-grey-bg dark-grey-color"
                                                            inputFormat="DD-MM-YYYY"
                                                            value={formdata.register_date}
                                                            /* open={dateopen}
                                                            onOpen={() => setdateOpen(true)}
                                                            onClose={() => setdateOpen(false)}  */
                                                            onChange={(e,name)=>handleDateChange(e,'register_date')}
                                                            renderInput={(props) => (
                                                                <TextField
                                                                    {...props}
                                                                    value={formdata.register_date}
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
                                                    {/* <DatePicker
                                                        className="gm-t-10 grey-bg date-custom cal-h dark-grey-bg dark-grey-color"
                                                        placeholderText="DD-MM-YYYY"
                                                        name="register_date"
                                                        value={formdata.register_date}
                                                        onChange={(value, name) => handleDateChange(value, 'register_date')}
                                                    /> */}
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Website</label>
                                                    <TextField
                                                        type="text"
                                                        name="website"
                                                        id="website"
                                                        label="Enter website link"
                                                        placeholder="Enter website link"
                                                        value={formdata.website}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Country</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0 dark-grey-color"
                                                        fullWidth
                                                        options={country_opt}
                                                        value={formdata.country}
                                                        onChange={(event, value) => changeDropdownValue('country', value)}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                label="Select"
                                                                name="country"
                                                                placeholder="Select"
                                                                validators={['required']}
                                                                errorMessages={['this field is required']}
                                                                value={formdata.country}
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
                                                        label="Enter city name"
                                                        placeholder="Enter city name"
                                                        value={formdata.city}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        validators={['required']}
                                                        errorMessages={['this field is required']}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>State</label>
                                                    <AutoComplete
                                                        className="dropdown gm-t-10 w-100 mar-b-0"
                                                        fullWidth
                                                        options={state_opt}
                                                        value={formdata.state}
                                                        onChange={(event, value) => changeDropdownValue('state', value)}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                className="search-dropdown custom-input dark-grey-bg dark-grey-color"
                                                                label="Select"
                                                                name="state"
                                                                placeholder="Select"
                                                                value={formdata.state}
                                                                validators={['required']}
                                                                 errorMessages={['this field is required']}
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
                                                        label="Enter zipcode"
                                                        placeholder="Enter zipcode"
                                                        value={formdata.zipcode}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        validators={['required']}
                                                        errorMessages={['this field is required']}
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
                                                        label="Enter yor title"
                                                        placeholder="Enter yor title"
                                                        value={formdata.title}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        errorMessages={['this field is required']}
                                                        validators={['required']}
                                                    />
                                                </Grid>
                                                <Grid item md={6} className="user-add-block pad-t-0">
                                                    <label>Status</label>
                                                    <RadioGroup name="nameRadio" value={formdata.nameRadio || ''} onChange={(e) => formdataValueChange(e)} className="gm-t-10 flex-content pad-t-0 flex-d-row">
                                                        <FormControlLabel
                                                            value="ACTIVE"
                                                            control={<Radio />}
                                                            label="Active"
                                                        />
                                                        <FormControlLabel
                                                            value="INACTIVE"
                                                            control={<Radio />}
                                                            label="Inactive"
                                                        />
                                                    </RadioGroup>
                                                </Grid>
                                                <Grid item md={12} className="user-add-block pad-t-0">
                                                    <label>Description</label>
                                                    <TextField
                                                        type="text"
                                                        name="description"
                                                        id="description"
                                                        value={formdata.description}
                                                        onChange={(e) => formdataValueChange(e)}
                                                        className="search-email gm-t-10 custom-input dark-grey-bg dark-grey-color"
                                                        multiline
                                                        rows={5}
                                                    />
                                                    {/* <Editor
                                                        wrapperClassName="custom-editor"
                                                        name="description"
                                                        toolbar={{
                                                            options: ['inline', 'fontSize', 'textAlign', 'remove', 'colorPicker']
                                                        }}
                                                        defaultContentState={contentState}
                                                        onContentStateChange={setContentState}
                                                        value={formdata.description}>

                                                    </Editor> */}

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
                                                            <img className="width-180" src={previewImg ? previewImg : formdata.logo ? Company_Icon : Company_Icon} />
                                                            <h4 className="absolute-text">{previewImg ? "" : formdata.logo ? "LOGO" : "LOGO"}</h4>
                                                            {/* <img src={preview} alt={alt}/> */}
                                                        </Grid>
                                                        <Grid item md={12} className="search-form-block respo-w-100 custom-respo-block text-center">
                                                            <div className="img-upload marg-0-auto upload-logo">
                                                                <input
                                                                    type="file"
                                                                    name="user_img"
                                                                    id="user_img"
                                                                    className="insert-img"
                                                                    onChange={(e) => onFileChange(e)}
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
                                <Button variant="contained" color="primary" className="whitebg custom-btn-sec" onClick={() => navigate('/company_management')}>
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

export default AddCompanyManagement;