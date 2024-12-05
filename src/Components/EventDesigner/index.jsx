import React from "react";
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

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
}))
const vehicleopt=[
    {id: 1,label:"Vehicle 1"},
    {id: 2,label:"Vehicle 2"},
    {id: 3,label:"Vehicle 3"},
]
const modelopt=[
    {id: 1,label:"Model 1"},
    {id: 2,label:"Model 2"},
    {id: 3,label:"Model 3"},
]
const statusopt=[
    {id: 1,label:"Active"},
    {id: 2,label:"Inactive"},
]

const EventdesignerIndex=() => {
	const navigate = useNavigate()
	const handleSubmitSearch = async (event) => {

	}

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>Event Designer</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span>  Event Designer</h6>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="search-form-main">
					<Grid item md={12} className="search-form-block  text-align-right mar-b-24">
						<Button variant="contained" color="primary" className="whitebg custom-btn" onClick={ ()=> navigate('/event_designer/add_eventdesigner')}>
							Add event Designer
                        </Button>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={12} className="user-list-block">
						<div className="user-list-start">
							<div className="user-list-top-bar">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={6} className="main-title-user respo-w-fit">
										<h4 className="font-14">List of Event workflow</h4>
									</Grid>
									<Grid item md={6} className="view-all-user respo-w-fit respo-mar-l-auto">
										<h6 className="font-grey font-12 font-underline text-align-right">View all</h6>
									</Grid>
								</Grid>
							</div>
							<div className="user-list-bottom">
								<Grid container spacing={3} className="user-list-main-block">
									
									<Grid item md={12} className="user-list-right">
										<div className="tab-overflow-scroll overflow-scroll">
											<Table>
												<TableHead>
													<TableRow>
														<TableCell>Sr. No.</TableCell>
														<TableCell>Workflow name</TableCell>
														<TableCell>Created at</TableCell>
														<TableCell>Created by</TableCell>
														<TableCell>Event Type</TableCell>
														<TableCell>Vehicle Group</TableCell>
														<TableCell>Driver Group</TableCell>
														<TableCell>Action</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<TableRow>
														<TableCell className="text-center">1</TableCell>
														<TableCell>Workflow 1</TableCell>
														<TableCell className="text-center">Jun 18, 2022</TableCell>
														<TableCell>Adom taylor</TableCell>
														<TableCell>Overspeed</TableCell>
														<TableCell className="text-center">Group 1</TableCell>
														<TableCell className="text-center">Driver Group 1</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">2</TableCell>
														<TableCell>Workflow 2</TableCell>
														<TableCell className="text-center">May 27, 2022</TableCell>
														<TableCell>Lorem Ipsum</TableCell>
														<TableCell>Fuel leakage</TableCell>
														<TableCell className="text-center">Group 2</TableCell>
														<TableCell className="text-center">Driver Group 2</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">3</TableCell>
														<TableCell>Workflow 3</TableCell>
														<TableCell className="text-center">May 14, 2022</TableCell>
														<TableCell>John Dolor</TableCell>
														<TableCell>Zebra line crossed</TableCell>
														<TableCell className="text-center">Group 3</TableCell>
														<TableCell className="text-center">Driver Group 3</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">4</TableCell>
														<TableCell>Workflow 4</TableCell>
														<TableCell className="text-center">Apr 15, 2022</TableCell>
														<TableCell>French Marc</TableCell>
														<TableCell>Tyre Blast</TableCell>
														<TableCell className="text-center">Group 4</TableCell>
														<TableCell className="text-center">Driver Group 3</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">5</TableCell>
														<TableCell>Workflow 5</TableCell>
														<TableCell className="text-center">Apr 03, 2022</TableCell>
														<TableCell>Asley Huda</TableCell>
														<TableCell>Brake Failiure</TableCell>
														<TableCell className="text-center">Group 2</TableCell>
														<TableCell className="text-center">Driver Group 3</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">6</TableCell>
														<TableCell>Workflow 6</TableCell>
														<TableCell className="text-center">Apr 01, 2022</TableCell>
														<TableCell>Wager Rec</TableCell>
														<TableCell>Fuel leakage</TableCell>
														<TableCell className="text-center">Group 1</TableCell>
														<TableCell className="text-center">Driver Group 2</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">7</TableCell>
														<TableCell>Workflow 7</TableCell>
														<TableCell className="text-center">Mar 28, 2022</TableCell>
														<TableCell>Rita Roy</TableCell>
														<TableCell>Overspeed</TableCell>
														<TableCell className="text-center">Group 3</TableCell>
														<TableCell className="text-center">Driver Group 1</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">8</TableCell>
														<TableCell>Workflow 8</TableCell>
														<TableCell className="text-center">Mar 21, 2022</TableCell>
														<TableCell>Ronit Singh</TableCell>
														<TableCell>Tyre blast</TableCell>
														<TableCell className="text-center">Group 1</TableCell>
														<TableCell className="text-center">Driver Group 3</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
													<TableRow>
														<TableCell className="text-center">9</TableCell>
														<TableCell>Workflow 9</TableCell>
														<TableCell className="text-center">Mar 17, 2022</TableCell>
														<TableCell>Lorem Ipsum</TableCell>
														<TableCell>Brake failure</TableCell>
														<TableCell className="text-center">Group 3</TableCell>
														<TableCell className="text-center">Driver Group 2</TableCell>
														<TableCell className="text-center"><p className="justify p-relative pointer table-drop-icons"><img className="table-drop-icon" src={Dots}/><div className="table-dropdown"><div><span className="eye-icon"><img className="table-icons" src={Eye}/></span> View</div><div onClick={ ()=> navigate('/event_designer/edit_eventdesigner')}><img className="table-icons" src={Pencil}/> Edit</div><div><img className="table-icons" src={Trash}/> Delete</div></div></p></TableCell>
													</TableRow>
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
		</>
	)
}

export default EventdesignerIndex;