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
import CompanyImg from "../../Assets/images/view-company.png"
import UserSmall from "../../Assets/images/user-small.png"
import Location from "../../Assets/images/location-icon-grey.png"
import MSG from "../../Assets/images/msg-icon-grey.png"
import Close_btn from "../../Assets/images/close-btn-list.png"
import Grey_circle from "../../Assets/images/grey-circle.png"
import { useNavigate } from 'react-router-dom'
import {companyManagementGet} from "../../Services/api"
import {getDataFromApi} from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'

const ViewUserManagement=() => {
    const navigate = useNavigate()
    let { companyid } = useParams()
    const [formdata, setFormData] = useState({ company_id: "", company_name: "", managed_by: "", category: "", dateofBirth: "", website: "", country: "", city: "", state: "", zipcode: "", title: "", nameRadio: "ACTIVE", description: "" })
    const [singleUser, setsingleUser] = useState([])

    useEffect(() => {
        
            getsingleUser();
        
    }, [])

    const getsingleUser = async () => {

        var response = ''
        response = await getDataFromApi(
            companyManagementGet+'/'+companyid)

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
                    ['register_date']: userdata.register_date,
                    ['website']: userdata.website,
                    ['country']: userdata.country,
                    ['city']: userdata.city,
                    ['state']: userdata.state,
                    ['zipcode']: userdata.zipcode,
                    ['title']: userdata.title,
                    ['status']: userdata.status,
                    ['description']: userdata.description,
                    ['logo']: null

                }))

            }
        }
    }

    return (
        <>
            <Box className="main-box mar-t-24 grey-bg pad-b-50">
                <Grid container spacing={3} className="main-grid">
                    <Grid item md={6} className="main-title">
                        <h4>View Company</h4>
                    </Grid>
                    <Grid item md={6} className="breadcrumb">
                        <h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> <span className="pointer" onClick={ ()=> navigate('/company_management')}>Company Management /</span> View Company</h6>
                    </Grid>
                </Grid>
                <Grid item md={12} className="add-user-form-block">
                    <div className="search-form pad-b-50">
                        <Grid container spacing={3} className="search-form-main">
                            <Grid item md={1} className="search-form-block">
                                
                            </Grid>
                            <Grid item md={11} className="search-form-block">
                                <Grid container className="search-form-main displ-grid">
                                    <Grid item md={4} className="user-add-block respo-w-100 respo-t-center">
                                        <img src={CompanyImg}/>
                                    </Grid>
                                    <Grid item md={6} className="user-add-block align-self-center">
                                        <Grid container className="search-form-main">
                                            <Grid item md={5} className="user-add-block respo-w-100">
                                                <h1 className="view-user-main-menu">{formdata.title}</h1>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block respo-w-100">
                                                <p className="d9d9-col user-name"><img className="mar-r-10" src={Location}/><span className="vertical-align-top">{formdata.city},{formdata.state}</span></p>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={2} className="user-add-block respo-w-100 respo-t-center mar-t-24">
                                        <Button variant="contained" color="primary" className="whitebg custom-btn font-600 respo-small" onClick={ ()=> navigate('/company_management/')}>
                                            DASHBOARD
                                        </Button>
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
                                                <label className="font-18 block-underline">Description</label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4} className="user-add-block">
                                        <Grid container className="search-form-main responsive-block">
                                            <Grid item md={5} className="user-add-block">
                                                <label>Company ID</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block ">
                                                <label className="font-14 grey-txt">: {formdata.company_id}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Website</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.website}</label>
                                            </Grid>
                                            {/* <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Mobile Number</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: 9876543210</label>
                                            </Grid> */}
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Registered Date</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.register_date}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Category</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.category}</label>
                                            </Grid>
                                            {/* <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Address</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: Werdestrabe 5, Mannheim</label>
                                            </Grid> */}
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>State</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.state}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Country</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt">: {formdata.country}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label>Status</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt"><span className={formdata.status == 'ACTIVE' ? "active-ta font-12" : "inactive-ta font-12"}>{formdata.status}</span></label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block mar-b-24 dp-flex-just-cont respo-w-100">
                                        <div className="grey-block">
                                            <p>{formdata.description}
                                            </p>
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