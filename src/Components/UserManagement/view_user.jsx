import React, { useState,useEffect } from "react";
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
import ProfileImg from "../../Assets/images/view-user-img-new.png"
import UserSmall from "../../Assets/images/user-small.png"
import Location from "../../Assets/images/location-icon-grey.png"
import MSG from "../../Assets/images/msg-icon-grey.png"
import Close_btn from "../../Assets/images/close-btn-list.png"
import { useNavigate } from 'react-router-dom'
import {userManagementGet} from "../../Services/api"
import {getDataFromApi} from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'
import { gender_opt, country_opt, state_opt} from '../commoncomponent/CommonObject'

const ViewUserManagement=() => {
    const navigate = useNavigate()
    let { User_ID } = useParams()
    const [formdata, setFormData] = useState({ User_ID: "", User_Name: "", Mobile_Number: "", DOB: "", Email_ID: "", USER_PHOTO: "", Gender: "", Country: "", State: "", City: "", ZIP_Code: "", Address: "" })
    const [singleUser, setsingleUser] = useState([])

    useEffect(() => {
        getsingleUser();    
    }, [])

    const getsingleUser = async () => {

        var response = ''
        response = await getDataFromApi(
            userManagementGet+User_ID+"/get")

        console.log(response)

        if (response && response.status == 200 && response.data != null) {
            setsingleUser(response.data);
            console.log(response)
            console.log('singleUser', response.data);
            if (User_ID) {
                var userdata = response.data
                setFormData((formData) => ({
                    ...formData,

                    ['Address']: userdata.Address,
                    ['City']: userdata.City,
                    ['DOB']: userdata.DOB,
                    ['Email_ID']: userdata.Email_ID,
                    ['Gender']: userdata.Gender,
                    ['Mobile_Number']: userdata.Mobile_Number,
                    ['State']: userdata.State,
                    ['USER_PHOTO']: userdata.USER_PHOTO,
                    ['User_ID']: userdata.User_ID,
                    ['User_Name']: userdata.User_Name,
                    ['ZIP_Code']: userdata.ZIP_Code,
                    ['id']: userdata.id,
                    ['Country']: userdata.Country

                }))

            }
        }
    }
    return (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>View User</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={ ()=> navigate('/user_management')}>User Management /</span> View User</h6>
                    </Grid>
                </Grid>
                <Grid item md={12} className="add-user-form-block">
                    <div className="search-form pad-b-50">
                        <Grid container spacing={3} className="search-form-main">
                            <Grid item md={1} className="search-form-block">
                                
                            </Grid>
                            <Grid item md={11} className="search-form-block">
                                <Grid container className="search-form-main">
                                    <Grid item md={4} className="user-add-block respo-w-100 respo-t-center">
                                        <img src={ProfileImg}/>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block align-self-center">
                                        <Grid container className="search-form-main">
                                            <Grid item md={4} className="user-add-block respo-w-100">
                                                <h1 className="view-user-main-menu">{formdata.User_Name}</h1>
                                            </Grid>
                                            <Grid item md={8} className="user-add-block respo-w-100">
                                                <p className="d9d9-col user-name"><img className="mar-r-10" src={Location}/><span className="vertical-align-top">{formdata.City}, {formdata.State}</span></p>
                                            </Grid>
                                            <Grid item md={4} className="user-add-block respo-w-100">
                                                <p className="font-bold user-name respo-m-0"><img className="mar-r-10" src={MSG}/><span className="vertical-align-top">Send Message</span></p>
                                            </Grid>
                                            <Grid item md={8} className="user-add-block respo-w-100">
                                                <p className="d9d9-col user-name">Report User</p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={1} className="search-form-block">
                                
                            </Grid>
                            <Grid item md={11} className="search-form-block">
                                <Grid container className="search-form-main custom-grid">
                                    <Grid item md={4} className="user-add-block">
                                        <Grid container className="search-form-main">
                                            <Grid item md={12} className="user-add-block mar-b-24">
                                                <label className="font-18 block-underline half-border"><img className="mar-r-10" src={UserSmall}/>About</label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block respo-mar-t-30">
                                        <Grid container className="search-form-main">
                                            <Grid item md={12} className="user-add-block mar-b-24">
                                                <label className="font-18 block-underline">User Permissions</label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4} className="user-add-block">
                                        <Grid container className="search-form-main responsive-block">
                                            <Grid item md={5} className="user-add-block">
                                                <label>User ID</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block ">
                                                <label className="font-14 grey-txt">: {formdata.id}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Email ID</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.Email_ID}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Mobile Number</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.Mobile_Number}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Date Of Birth</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.DOB}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Gender</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {gender_opt && formdata.Gender && gender_opt.map((opt)=>{ if (opt.id ==  formdata.Gender) return  opt.label })}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Address</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.Address}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>State</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {state_opt && formdata.State && state_opt.map((opt)=>{ if (opt.id == formdata.State) return opt.label})}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Country</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {country_opt && formdata.Country && country_opt.map((opt)=>{ if (opt.id == formdata.Country) return opt.label})}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Status</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt"><span className="active-ta font-12">Active</span></label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block mar-b-24 border-block dp-flex-just-cont respo-w-100 cust-padd-respo">
                                        <ul className="position-list all">
                                            <li>Driver Add <span className="cancel-btn"><img src={Close_btn}/></span></li>
                                            <li>Driver List <span className="cancel-btn"><img src={Close_btn}/></span></li>
                                            <li>Escalate <span className="cancel-btn"><img src={Close_btn}/></span></li>
                                            <li>Action Workflow 1 <span className="cancel-btn"><img src={Close_btn}/></span></li>
                                        </ul>
                                        <div className="text-align-right">
                                            <Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
                                                ADD MORE
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default ViewUserManagement;