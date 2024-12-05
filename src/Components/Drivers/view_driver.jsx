import React, { useState,useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DriverProfile from "../../Assets/images/driver-profile.png";
import license from "../../Assets/images/license.png";
import StarRating from "../../Assets/images/star-rating.png";
import Star1 from "../../Assets/images/Star 1.png"
import HelperReview from "../../Assets/images/helper-review.png"
import {driverGet} from "../../Services/api"
import {getDataFromApi} from "../../Services/CommonServices"
import { useParams } from 'react-router-dom'
import { gender_opt, country_opt, state_opt} from '../commoncomponent/CommonObject'

const ViewDriver = () => {
    const navigate = useNavigate()
    let { driverid } = useParams()
    const [formdata, setFormData] = useState({ address: "", city: "", country: "", description: "", documents_upload: "", driver_age: "", driver_gender: "", driver_id: "", driver_name: "", email_id: "", id: "", license_number: "", mobile_number: "", registerd_date: "", state: "", status: "ACTIVE", upload_photo: "", zip_code: "" })
    const [singleUser, setsingleUser] = useState([])

    useEffect(() => {
        getsingleUser();
    }, [])

    const getsingleUser = async () => {
        var response = ''
        response = await getDataFromApi(
            driverGet+driverid+'/get', 1)

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
                    ['id']: userdata.id,
                    ['license_number']: userdata.license_number,
                    ['mobile_number']: userdata.mobile_number,
                    ['registerd_date']: userdata.registerd_date,
                    ['state']: userdata.state,
                    ['status']: userdata.status,
                    ['upload_photo']: userdata.upload_photo,
                    ['zip_code']: userdata.zip_code

                }))
            }
        }
    }

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
                            <span
                                className="pointer"
                                onClick={() => navigate("/drivers")}>
                                Drivers /
                            </span>{" "}
                            Driver Details
                        </h6>
                    </Grid>
                </Grid>

                <Grid container spacing={0} className="search-form-main">
                    <Grid item md={8} className="user-add-block">
                        <Grid item md={11} className="custom-white-box respo-mar-b-30">
                            <h4
                                className="text-left box-header pl-20">
                                ABOUT DRIVER
                            </h4>
                            <p className="driver-p driver-align">{formdata.description}</p>
                            <Grid container spacing={0} className="score">
                                <Grid item md={2} xs={8}>

                                    <b className="q-score">Quality Score: </b><b className="q-no">89</b>

                                </Grid>
                                <Grid item md={3.5} xs={8}>

                                    <b className="q-score">Vehicle: </b><b className="q-no">Honda Amaze (Car)</b>

                                </Grid>
                                <Grid item md={3.5} xs={8}>

                                    <b className="q-score">Vehicle Number : </b><b className="q-no">GJ734827</b>

                                </Grid>
                            </Grid>
                            <hr className="line"></hr>
                            <Grid container spacing={4} className="review">
                                <Grid item md={2.5} xs={6}>

                                    <b className="driver-row-3">$45.00 </b><br></br>
                                    <b className="hour-rate">Hourly Rate</b>
                                </Grid>
                                <Grid item md={2.5} xs={6}>
                                    <b className="driver-row-3">$60K.00</b><br></br>
                                    <b className="hour-rate">Total Earned</b>

                                </Grid>
                                <Grid item md={2.5} xs={6}>

                                    <b className="driver-row-3">15</b><br></br>
                                    <b className="hour-rate">Vehicle Driven</b>

                                </Grid>
                                <Grid item md={3} xs={6}>

                                    <b className="driver-row-3">5+</b><br></br>
                                    <b className="hour-rate">  Years of experience</b>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item md={1} className="search-form-block"></Grid>

                        <Grid container spacing={3} className="pt-20">
                            <Grid item md={12} className="user-add-block">
                                <Grid item md={11} className="custom-white-box respo-mar-t-20">
                                    <h4 className="text-left box-header pl-20"> DOCUMENTS </h4>
                                    <Grid item md={3} className="respo-w-100 respo-mar-b-20">
                                        <img className="doc-img" alt="" src={formdata.documents_upload}></img>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3} className="search-form-main pt-20">
                                    <Grid item md={11} className="user-add-block">
                                        <Grid item md={12} className="custom-white-box respo-mar-b-30">
                                            <h4 className="text-left pl-20">REVIEWS</h4>
                                            <hr></hr>
                                            <Grid item md={2} className="search-form-main"></Grid>
                                            <Grid container spacing={10} className="text-gray">
                                                <Grid item md={3} xs={6} className="rating" >
                                                    <h1 className="rating-no"> 4.02 </h1>

                                                    <h4 className="review-h4">Excellent(1K)</h4>
                                                    <h4 className="review-h4">Good(155)</h4>
                                                    <h4 className="review-h4" >Average(35)</h4>

                                                    <h4 className="review-h4">Bad(14)</h4>
                                                    <h4 className="review-h4">Very Bad(51)</h4>

                                                </Grid>
                                                <Grid item md={4} xs={6}>
                                                    <img src={StarRating} className="review-star" alt=""></img>
                                                    <p className="driver-p review-rate">2K Rating</p>
                                                    <Grid className="custom-white-box excellent"></Grid>
                                                    <Grid className="custom-white-box good"></Grid>
                                                    <Grid className="custom-white-box average" ></Grid>
                                                    <Grid className="custom-white-box bad" ></Grid>
                                                    <Grid className="custom-white-box very-bad"> </Grid>

                                                </Grid>
                                            </Grid>
                                            <h4 className="text-left pl-20">
                                                MOST HELPFUL REVIEWS
                                            </h4>
                                            <Grid container>
                                                <Grid item md={2} >
                                                    <img src={HelperReview} alt="" className="helper-img"></img>
                                                </Grid>
                                                <Grid item md={8} className="review-text">
                                                    <b className="pl-10 ">Annonymus</b><br></br>
                                                    <h6 className="date pl-10 pt-3">April 22, 2010</h6>
                                                    <p className="driver-p pl-10 pt-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </Grid>
                                                <Grid item md={2}>
                                                    <img src={Star1} alt="" className="rate-img"></img>4
                                                </Grid>
                                            </Grid>
                                            <hr className="line"></hr>
                                            <Grid container className="pb-20">
                                                <Grid item md={2}>
                                                    <img src={HelperReview} alt="" className="helper-img"></img>
                                                </Grid>
                                                <Grid item md={8} className="review-text">
                                                    <b className="pl-10">Annonymus</b><br></br>
                                                    <h6 className="date pl-10 pt-3">April 22, 2010</h6>
                                                    <p className="driver-p pl-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </Grid>
                                                <Grid item md={2}>
                                                    <img src={Star1} alt="" className="rate-img"></img><b></b>4
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} xs={12} className="user-add-block">
                        <Grid item md={12} className="custom-white-box respo-mar-b-30">
                            <h4
                                className="text-left box-header pl-20">PROFILE DETAILS</h4>
                            <img src={DriverProfile} alt="" className="driver-image" />
                            <h2 className="text-center img-text">{formdata.driver_name}</h2>
                            <img src={StarRating} alt="" className="p-5"></img>

                            <Grid container spacing={2}>
                                <Grid item md={4}>

                                </Grid>
                                <Grid item md={2} xs={6}>
                                    <img src={Star1} alt=""></img><b className="pl-3 res-pl-3">4.02</b>
                                    <br></br>
                                    <h6 className="rate res-pl-3">Rating</h6>
                                </Grid>
                                <Grid item md={2.5} xs={3}>
                                    <b className="pl-3 res-pl">258</b>
                                    <br></br>
                                    <h6 className="rate res-pl">Booking</h6>
                                </Grid>
                                <Grid item md={4}>

                                </Grid>
                            </Grid>
                            <hr className="mt-0"></hr>
                            <Grid item md={12} className="search-form-block pb-14">
                                <Grid container className="search-form-main custom-grid">

                                    <Grid item md={12} className="user-add-block">
                                        <Grid container className="search-form-main responsive-block pt-10">
                                            <Grid item md={5} className="user-add-block">
                                                <label className="driver-label">Driver ID</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block ">
                                                <label className="font-14 grey-txt driver-label">: {formdata.id}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Email ID</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {formdata.email_id}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Mobile Number</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {formdata.mobile_number}</label>
                                            </Grid>

                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Age</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {formdata.driver_age}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Gender</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {gender_opt && formdata.driver_gender && gender_opt.map((opt)=>{ if (opt.id ==  formdata.driver_gender) return  opt.label })}</label>
                                            </Grid>

                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Registered Date</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {formdata.registerd_date}</label>
                                            </Grid>
                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">License NUmber</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {formdata.license_number}</label>
                                            </Grid>

                                            <Grid item md={5} className="user-add-block gm-t-10">
                                                <label className="driver-label">Status</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-10 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">
                                                    <span className="active-ta font-12">{formdata.status}</span>
                                                </label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} className="user-add-block pt-20">
                            <Grid item md={12} className="custom-white-box respo-mar-b-30">
                                <h4
                                    className="text-left box-header pl-20">
                                    ADDRESS DETAILS
                                </h4>
                                <Grid container className="responsive-block pb-20">
                                    <Grid item md={5} className="user-add-block">
                                        <label className="driver-label">City</label>
                                    </Grid>
                                    <Grid item md={7} className="user-add-block respo-mar-t-0">
                                        <label className="font-14 grey-txt driver-label">: {formdata.city}</label>
                                    </Grid>
                                    <Grid container className="responsive-block">
                                        <Grid item md={5} className="user-add-block gm-t-15">
                                            <label className="driver-label">State</label>
                                        </Grid>
                                        <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                            <label className="font-14 grey-txt driver-label">: {state_opt && formdata.state && state_opt.map((opt)=>{ if (opt.id == formdata.state) return opt.label})}</label>
                                        </Grid>

                                        <Grid container className="responsive-block">
                                            <Grid item md={5} className="user-add-block gm-t-15">
                                                <label className="driver-label">Country</label>
                                            </Grid>
                                            <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                <label className="font-14 grey-txt driver-label">: {country_opt && formdata.country && country_opt.map((opt)=>{ if (opt.id == formdata.country) return opt.label})}</label>
                                            </Grid>

                                            <Grid container className="responsive-block">
                                                <Grid item md={5} className="user-add-block gm-t-15">
                                                    <label className="driver-label">Zip Code</label>
                                                </Grid>
                                                <Grid item md={7} className="user-add-block gm-t-15 respo-mar-t-0">
                                                    <label className="font-14 grey-txt driver-label">: {formdata.zip_code}</label>
                                                </Grid>

                                                <Grid container className="responsive-block">
                                                    <Grid
                                                        item
                                                        md={5}
                                                        className="user-add-block gm-t-15"
                                                    >
                                                        <label className="driver-label">Address</label>
                                                    </Grid>
                                                    <Grid
                                                        item
                                                        md={7}
                                                        className="user-add-block gm-t-15 respo-mar-t-0"
                                                    >
                                                        <label className="font-14 grey-txt driver-label text-left">
                                                            : {formdata.address}
                                                        </label>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Box >

        </>
    );
};

export default ViewDriver;
