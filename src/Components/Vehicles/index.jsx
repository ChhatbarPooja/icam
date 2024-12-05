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
import { Autocomplete } from '@mui/lab'
import Eye from "../../Assets/images/Vector.png"
import Dots from "../../Assets/images/dots.png"
import Trash from "../../Assets/images/trash.png"
import Pencil from "../../Assets/images/Pencil.png"
import { useNavigate } from 'react-router-dom'
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';
import { vehicleList, vehicleDelete } from "../../Services/api"
import { getDataFromApi, deleteDataFromApi } from "../../Services/CommonServices"
import AlertMessage from '../commoncomponent/AlertMessage'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'


const TextField = styled(TextValidator)(() => ({
	width: '100%',
	marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
	width: 300,
	marginBottom: '16px',
}))
const vehicleopt = [
	{ id: 1, label: "Vehicle 1" },
	{ id: 2, label: "Vehicle 2" },
	{ id: 3, label: "Vehicle 3" },
]
const modelopt = [
	{ id: 1, label: "Model 1" },
	{ id: 2, label: "Model 2" },
	{ id: 3, label: "Model 3" },
]
const statusopt = [
	{ id: 1, label: "Active" },
	{ id: 2, label: "Inactive" },
]

const vehiclearray = [
	{ id: 1, vehicle: 'Honda City (Car)', vehicle_number: 'GJ017896', camera_device: "D!-Camera01", camera_model_no: "GHuyt5678", kilometers: "58,963 Km", mileage: "90 KMPL", location: "VIEW MAP", status: "ACTIVE" },
	{ id: 2, vehicle: 'Ecco (Van)', vehicle_number: 'MH035896', camera_device: "D2-Camera02", camera_model_no: "GHuyt5678", kilometers: "76,963 Km", mileage: "87 KMPL", location: "VIEW MAP", status: "INACTIVE" },
	{ id: 3, vehicle: 'Travels (Bus)', vehicle_number: 'JK5258974', camera_device: "D3-Camera03", camera_model_no: "cgushbhfm", kilometers: "57,853 Km", mileage: "76 KMPL", location: "VIEW MAP", status: "INACTIVE" },
	{ id: 4, vehicle: 'Honda Amaze (Car)', vehicle_number: 'GJ018596', camera_device: "D1-Camera02", camera_model_no: "Frtdghb789", kilometers: "38,863 Km", mileage: "82 KMPL", location: "VIEW MAP", status: "ACTIVE" },
	{ id: 5, vehicle: 'Truck', vehicle_number: 'MH035894', camera_device: "D1-Camera03", camera_model_no: "456gtybffgv", kilometers: "25,893 Km", mileage: "52 KMPL", location: "VIEW MAP", status: "ACTIVE" },
	{ id: 6, vehicle: 'School Van', vehicle_number: 'GA581258', camera_device: "D2-Camera02", camera_model_no: "Gh6754hdsh", kilometers: "74,263 Km", mileage: "35 KMPL", location: "VIEW MAP", status: "INACTIVE" },
	{ id: 7, vehicle: 'Truck', vehicle_number: 'MH035894', camera_device: "D1-Camera03", camera_model_no: "456gtybffgv", kilometers: "38,258 Km", mileage: "25 KMPL", location: "VIEW MAP", status: "ACTIVE" },
	{ id: 8, vehicle: 'School Van', vehicle_number: 'GA581258', camera_device: "D2-Camera02", camera_model_no: "Gh6754hdsh", kilometers: "58,963 Km", mileage: "25 KMPL", location: "VIEW MAP", status: "INACTIVE" },
	{ id: 9, vehicle: 'Truck', vehicle_number: 'MH035894', camera_device: "D1 Camera03", camera_model_no: "456gtybffgv", kilometers: "58,963 Km", mileage: "33 KMPL", location: "VIEW MAP", status: "ACTIVE" }


]



const VehiclesIndex = () => {

	const navigate = useNavigate()
	const [vehicle, setVehicle] = useState([])
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
        console.log('delete_id',delete_id)
        var query=""
        var response = ""
        response = await deleteDataFromApi(
			vehicleDelete+delete_id,'',
                    1
        )
        console.log(response.status);
       
        if(response && response.status==200){
                setDeleteId("")
                setDeleteOpen(false)
                setalertMessage('Record deleted successfully')
                setalert(true)
                setalertType('success')
                getVehicle();
        } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')
                setDeleteId("")
                setDeleteOpen(false)
                getVehicle();
        }
        
    }
	const handleSubmitSearch = async (event) => {

	}
	const getVehicle = async () => {
		var query = ""
		const response = await getDataFromApi(vehicleList);
		if (response && response.status == 200 && response.data != null) {
			setVehicle(response.data);
			console.log('vehicleDetails', response.data);
		}
	}

	useEffect(() => {
		getVehicle();
	}, []);



	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>Vehicles</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> Vehicles</h6>
					</Grid>
				</Grid>
				<AlertMessage
					alert={alert}
					alertMessage={alertMessage}
					confirm={confirm}
					alertType={alertType}
				/>
				<ValidatorForm onSubmit={handleSubmitSearch} onError={() => null} className="search-form">
					<Grid container spacing={3} className="search-form-main">
						<Grid item md={3} className="search-form-block">
							<label>Vehicle</label>
							<AutoComplete
								className="dropdown gm-t-10"
								fullWidth
								options={vehicleopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input"
										label="Select"
										name="vehicle"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block res-pad-t-0">
							<label>Model</label>
							<AutoComplete
								className="dropdown gm-t-10"
								fullWidth
								options={modelopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input"
										label="Select"
										name="model"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block res-pad-t-0">
							<label>Status</label>
							<AutoComplete
								className="dropdown gm-t-10"
								fullWidth
								options={statusopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input"
										label="Select"
										name="status"
										placeholder="Select"
									/>
								)}
							/>
						</Grid>
						<Grid item md={3} className="search-form-block align-self-center text-align-right res-pad-t-0">
							<Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
								Search
							</Button>
						</Grid>
					</Grid>
				</ValidatorForm>
				<Grid container spacing={3} className="search-form-main">
					<Grid item md={12} className="search-form-block mar-t-24 text-align-right mar-b-24">
						<Button variant="contained" color="primary" className="whitebg custom-btn" onClick={() => navigate('/vehicles/add_vehicle')}>
							ADD VEHICLE
						</Button>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={12} className="user-list-block">
						<div className="user-list-start">
							<div className="user-list-top-bar">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={6} className="main-title-user respo-w-fit">
										<h4 className="font-14">LIST OF VEHICLES</h4>
									</Grid>
									<Grid item md={6} className="view-all-user respo-w-fit respo-mar-l-auto">
										<h6 className="font-grey font-12 font-underline text-align-right">View all</h6>
									</Grid>
								</Grid>
							</div>
							<div className="user-list-bottom">
								<Grid container spacing={3} className="user-list-main-block">
									<Grid item md={2} className="user-list-left">
										<Tree defaultExpandedKeys={['0-0', '0-0-2']}>
											<TreeNode title="Vehicle Groups" key="0-0">
												<TreeNode title="Group 1" key="0-0-0">
													<TreeNode title="Vehicle 1" key="0-0-0-0" />
													<TreeNode title="Vehicle 2" key="0-0-0-1" />
												</TreeNode>
												<TreeNode title="Group 2" key="0-0-1">
													<TreeNode title="Vehicle 1" key="0-0-1-0" />
													<TreeNode title="Vehicle 2" key="0-0-1-1" />
												</TreeNode>
												<TreeNode title="Group 3" key="0-0-2" >
													<TreeNode title="Vehicle 1" key="0-0-2-0" />
													<TreeNode title="Vehicle 2" key="0-0-2-1" />
													<TreeNode title="Vehicle 3" key="0-0-2-2" />
												</TreeNode>
												<TreeNode title="Group 4" key="0-0-3" >
													<TreeNode title="Vehicle 1" key="0-0-3-0" />
													<TreeNode title="Vehicle 2" key="0-0-3-1" />
												</TreeNode>
												<TreeNode title="Group 5" key="0-0-4" >
													<TreeNode title="Vehicle 1" key="0-0-4-0" />
													<TreeNode title="Vehicle 2" key="0-0-4-1" />
												</TreeNode>
												<TreeNode title="Group 6" key="0-0-5" >
													<TreeNode title="Vehicle 1" key="0-0-5-0" />
													<TreeNode title="Vehicle 2" key="0-0-5-1" />
												</TreeNode>
												<TreeNode title="Group 7" key="0-0-6" >
													<TreeNode title="Vehicle 1" key="0-0-6-0" />
													<TreeNode title="Vehicle 2" key="0-0-6-1" />
												</TreeNode>
											</TreeNode>
										</Tree>
									</Grid>
									<Grid item md={10} className="user-list-right">
										<div className="tab-overflow-scroll overflow-scroll">
											<Table>
												<TableHead>
													<TableRow>
														<TableCell>Sr. No.</TableCell>
														<TableCell>Vehicles</TableCell>
														<TableCell>Vehicles Number</TableCell>
														<TableCell>Camera Device</TableCell>
														<TableCell>Camera Model No.</TableCell>
														<TableCell>Kilometers</TableCell>
														<TableCell>Mileage</TableCell>
														<TableCell>Location</TableCell>
														<TableCell>Status</TableCell>
														<TableCell>Action</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													{vehicle.map((vehicle, i) => (
														<TableRow key={i}>

															<TableCell className="text-center">{vehicle.id}</TableCell>
															<TableCell>{vehicle.vehicle}</TableCell>
															<TableCell>{vehicle.vehicle_number}</TableCell>
															<TableCell>{vehicle.device_name}D!-Camera01</TableCell>
															<TableCell className="text-center">{vehicle.device_id}</TableCell>
															<TableCell>{vehicle.kilometers}58,963 Km</TableCell>
															<TableCell>{vehicle.mileage}90 KMPL</TableCell>
															<TableCell><Button className="table-button" onClick={() => navigate('/vehicles')}>{vehicle.location}VIEW MAP</Button></TableCell>
															<TableCell className="text-center"><span className={vehicle.status == 'ACTIVE' ? "active-ta font-12" : "inactive-ta font-12"}>{vehicle.status}</span></TableCell>
															<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots} /><div className="table-dropdown"><div><span className="eye-icon" onClick={ ()=> navigate('/vehicles/view_vehicle/'+vehicle.id)}><img className="table-icons" src={Eye} /></span> View</div><div onClick={() => navigate('/vehicles/edit_vehicle/' + vehicle.id + '/')}><img className="table-icons" src={Pencil} /> Edit</div><div onClick={() => handleDeleteOpen(vehicle.id)} ><img className="table-icons" src={Trash} /> Delete</div></div></p></TableCell>
														</TableRow>))}


												</TableBody>
											</Table>
										</div>
									</Grid>
								</Grid>
							</div>
						</div>
					</Grid>
				</Grid>
			</Box>
			<Dialog
                open={deleteOpen}
                disableBackdropClick
                disableEscapeKeyDown
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Are You Sure You Want to delete this record?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description"></DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteConfirm} color="primary" variant="contained" className="whitebg">
                        Confirm
                    </Button>
                    <Button variant="outlined" className="whitebg" onClick={handleDeleteClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
		</>
	)
}

export default VehiclesIndex;