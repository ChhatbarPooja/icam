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
import AlertMessage from '../commoncomponent/AlertMessage'
import Eye from "../../Assets/images/Vector.png"
import Trash from "../../Assets/images/trash.png"
import Pencil from "../../Assets/images/Pencil.png"
import User_IMG from "../../Assets/images/prof.png"
import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';
import { useNavigate } from 'react-router-dom'
import { userManagementGet, userManagementList, userManagementDelete } from "../../Services/api"
import { getDataFromApi, deleteDataFromApi } from "../../Services/CommonServices"
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
const statusopt = [
	{ id: 1, label: "Active" },
	{ id: 2, label: "Inactive" },
]

const userarray = [
	{ User_ID: 'IC125', User_Name: "John Snow", Mobile_Number: "(848) 339-8535", Email_ID: "johnsnow@nomail.com", User_Status: "Active" },
	{ User_ID: 'IC126', User_Name: "Abacus Pascal", Mobile_Number: "(848) 339-8535", Email_ID: "abacuspascal@gmail.com", User_Status: "Inactive" },
	{ User_ID: 'IC125', User_Name: "Grof Sethy", Mobile_Number: "(848) 339-85333", Email_ID: "grofsethy@nomail.com", User_Status: "Inactive" },
	{ User_ID: 'IC126', User_Name: "Carbon Dating", Mobile_Number: "(848) 339-8535", Email_ID: "carbdating@nomail.com", User_Status: "Inactive" },
	{ User_ID: 'IC125', User_Name: "Frech Sedardin", Mobile_Number: "(848) 339-8535", Email_ID: "Frechsedardin@nomail.com", User_Status: "Active" },
	{ User_ID: 'IC126', User_Name: "Lorem Ipsum", Mobile_Number: "(622) 758-2333", Email_ID: "LoremIpsumipsum@gmail.com", User_Status: "Inactive" },
	{ User_ID: 'IC125', User_Name: "Jamey Lobster", Mobile_Number: "(848) 339-8535", Email_ID: "jameylobster@nomail.com", User_Status: "Active" },
	{ User_ID: 'IC126', User_Name: "Figg Meldon", Mobile_Number: "(622) 758-2333", Email_ID: "figgmeldon@gmail.com", User_Status: "Active" },
	{ User_ID: 'IC125', User_Name: "Samuel Jackson", Mobile_Number: "(848) 339-8535", Email_ID: "samueljackson@nomail.com", User_Status: "Inactive" },
]

const User_Management = () => {
	const navigate = useNavigate();

	const [userManagement, setuserManagement] = useState([])
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
		console.log('delete_id', delete_id)
		var query = ""
		var response = ""
		response = await deleteDataFromApi(
			userManagementDelete + delete_id + "/delete",
			query
		)
		console.log(response.status);

		if (response && response.status == 204) {
			setDeleteId("")
			setDeleteOpen(false)
			setalertMessage('User Deleted successfully')
			setalert(true)
			setalertType('success')
			getuserManagement();
		} else {
			setalertMessage('error...')
			setalert(true)
			setalertType('error')
			setDeleteId("")
			setDeleteOpen(false)
			getuserManagement();
		}

	}

	const handleSubmitSearch = async (event) => {

	}
	const getuserManagement = async () => {
		var query = ""
		const response = await getDataFromApi(userManagementList, query);
		if (response && response.status == 200 && response.data != null) {
			setuserManagement(response.data);
			console.log('userDetails', response.data);
		}
	}

	useEffect(() => {
		getuserManagement();
	}, []);

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>USERS</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={() => navigate('/dashboard')}>Home /</span> User Management</h6>
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
						<Grid item md={6} className="search-form-block">
							<label>Search</label>
							<TextField
								type="text"
								name="name"
								id="name"
								label="Search by name / email"
								placeholder="Search by name / email"
								className="search-email gm-t-10 custom-input"
							/>
						</Grid>
						<Grid item md={4} className="search-form-block">
							<label>Status</label>
							<AutoComplete
								className="dropdown gm-t-10"
								fullWidth
								options={statusopt}
								renderInput={(params) => (
									<TextField
										{...params}
										className="search-dropdown custom-input"
										label="Status"
										name="status"
										placeholder="Status"
									/>
								)}
							/>
						</Grid>
						<Grid item md={2} className="search-form-block align-self-center">
							<Button variant="contained" color="primary" className="whitebg custom-btn" type="submit">
								Search
							</Button>
						</Grid>
					</Grid>
				</ValidatorForm>
				<Grid container spacing={3} className="search-form-main">
					<Grid item md={12} className="search-form-block mar-t-24 text-align-right mar-b-24">
						<Button variant="contained" color="primary" className="whitebg custom-btn" onClick={() => navigate('/user_management/add_user')}>
							ADD USER
						</Button>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={12} className="user-list-block">
						<div className="user-list-start">
							<div className="user-list-top-bar">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={6} className="main-title-user respo-w-fit">
										<h4 className="font-14">LIST OF USERS</h4>
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
											<TreeNode title="User Groups" key="0-0">
												<TreeNode title="User Group 1" key="0-0-0">
													<TreeNode title="User 1" key="0-0-0-0" />
													<TreeNode title="User 2" key="0-0-0-1" />
												</TreeNode>
												<TreeNode title="User Group 2" key="0-0-1">
													<TreeNode title="User 1" key="0-0-1-0" />
													<TreeNode title="User 2" key="0-0-1-1" />
												</TreeNode>
												<TreeNode title="User Group 3" key="0-0-2" >
													<TreeNode title="User 1" key="0-0-2-0" />
													<TreeNode title="User 2" key="0-0-2-1" />
													<TreeNode title="User 3" key="0-0-2-2" />
												</TreeNode>
												<TreeNode title="User Group 4" key="0-0-3" >
													<TreeNode title="User 1" key="0-0-3-0" />
													<TreeNode title="User 2" key="0-0-3-1" />
												</TreeNode>
												<TreeNode title="User Group 5" key="0-0-4" >
													<TreeNode title="User 1" key="0-0-4-0" />
													<TreeNode title="User 2" key="0-0-4-1" />
												</TreeNode>
												<TreeNode title="User Group 6" key="0-0-5" >
													<TreeNode title="User 1" key="0-0-5-0" />
													<TreeNode title="User 2" key="0-0-5-1" />
												</TreeNode>
												<TreeNode title="User Group 7" key="0-0-6" >
													<TreeNode title="User 1" key="0-0-6-0" />
													<TreeNode title="User 2" key="0-0-6-1" />
												</TreeNode>
											</TreeNode>
										</Tree>
									</Grid>
									<Grid item md={10} className="user-list-right overflow-scroll">
										<Table>
											<TableHead>
												<TableRow>
													<TableCell>User ID</TableCell>
													<TableCell>User Name</TableCell>
													<TableCell>Mobile Number</TableCell>
													<TableCell>Email ID</TableCell>
													<TableCell>Status</TableCell>
													<TableCell>Action</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{userManagement.map((user, i) => (
													<TableRow key={i}>
														<TableCell>{user.User_ID}</TableCell>
														<TableCell><img className="user_img vertical-align-middle w-40" src={user.USER_PHOTO} /> <span className="vertical-align-middle">{user.User_Name}</span></TableCell>
														<TableCell>{user.Mobile_Number}</TableCell>
														<TableCell>{user.Email_ID}</TableCell>
														<TableCell className="text-center"><span className={user.User_Status == 'Active' ? "active-ta font-12" : "inactive-ta font-12"}>{user.User_Status}</span></TableCell>
														<TableCell className="text-center"><p className="justify"><span className="eye-icon" onClick={() => navigate('/user_management/view_user/'+user.id)}><img className="table-icons" src={Eye} /></span><span className="table-icons pointer" onClick={() => navigate('/user_management/edit_user/' + user.id)}><img className="table-icons" src={Pencil} /></span><img className="table-icons pointer" src={Trash} onClick={() => handleDeleteOpen(user.id)} /></p></TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
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

export default User_Management;