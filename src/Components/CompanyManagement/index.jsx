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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Autocomplete } from '@mui/lab'
import Eye from "../../Assets/images/Vector.png"
import Trash from "../../Assets/images/trash.png"
import Pencil from "../../Assets/images/Pencil.png"
import Company_1 from "../../Assets/images/company-1.png"
import Company_2 from "../../Assets/images/company-2.png"
import Company_3 from "../../Assets/images/company-3.png"
import Company_4 from "../../Assets/images/company-4.png"
import Company_5 from "../../Assets/images/company-5.png"
import Company_6 from "../../Assets/images/company-6.png"
import Company_7 from "../../Assets/images/company-7.png"
import Company_8 from "../../Assets/images/company-8.png"
import Company_9 from "../../Assets/images/company-9.png"
import { useNavigate } from 'react-router-dom'
import {companyManagementList,companyManagementDelete} from "../../Services/api"
import {getDataFromApi,deleteDataFromApi} from "../../Services/CommonServices"
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
const statusopt=[
    {id: 1,label:"Active"},
    {id: 2,label:"Inactive"},
]
const companyarray =[
	{ company_id:'IC125',logo:{Company_1},company_name:"LP Brown",category:"Automobile",website:"www.johnsnowl.com",status:"ACTIVE"},
	{ company_id:'IC126',logo:{Company_2},company_name:"Life Good",category:"Telecome",website:"www.abacuspascal.com",status:"INACTIVE"},
	{ company_id:'IC125',logo:{Company_3},company_name:"Pepsi",category:"Healthcare",website:"www.grofse.net",status:"INACTIVE"},
	{ company_id:'IC126',logo:{Company_4},company_name:"Tide LTD.",category:"Gaming",website:"www.carbondating.com",status:"INACTIVE"},
	{ company_id:'IC125',logo:{Company_5},company_name:"Tesla",category:"Chemical",website:"www.Frechsedardin.com",status:"ACTIVE"},
	{ company_id:'IC126',logo:{Company_6},company_name:"Wolkswagen",category:"Agriculture",website:"www.LoremIpsumipsum.in",status:"INACTIVE"},
	{ company_id:'IC125',logo:{Company_7},company_name:"Burger king",category:"Education",website:"www.jameylobster.de",status:"ACTIVE"},
	{ company_id:'IC126',logo:{Company_8},company_name:"Domino’s",category:"Aerospace",website:"www.figgmeldon.com",status:"ACTIVE"},
	{ company_id:'IC125',logo:{Company_9},company_name:"Lapino’s",category:"Food",website:"www.samueljackson.com",status:"INACTIVE"},
]



const Company_Management=() => {
	const navigate = useNavigate()
	const [companyManagement,setcompanyManagement] = useState([])
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
			companyManagementDelete+delete_id,
                    query
        )
        console.log(response.status);
       
        if(response && response.status==204){
                setDeleteId("")
                setDeleteOpen(false)
                setalertMessage('Company Deleted successfully')
                setalert(true)
                setalertType('success')
                getcompanyManagement();
        } else {
                setalertMessage('error...')
                setalert(true)
                setalertType('error')
                setDeleteId("")
                setDeleteOpen(false)
                getcompanyManagement();
        }
        
    }

	const handleSubmitSearch = async (event) => {

	}
	const getcompanyManagement = async () =>{
		var query = ""
        const response = await getDataFromApi(companyManagementList, query);
       if(response && response.status==200 && response.data !=null){
            setcompanyManagement(response.data);
            console.log('userDetails',response.data);
        } 
	}

	useEffect(() => {
        getcompanyManagement();
    }, []);

	return (
		<>
			<Box className="main-box mar-t-24 grey-bg pad-b-50">
				<Grid container spacing={3} className="main-grid">
					<Grid item md={6} className="main-title">
						<h4>COMPANY LIST</h4>
					</Grid>
					<Grid item md={6} className="breadcrumb">
						<h6><span className="pointer" onClick={ ()=> navigate('/dashboard')}>Home /</span> Company List</h6>
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
                                label="Search by name"
                                placeholder="Search by name"
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
						<Button variant="contained" color="primary" className="whitebg custom-btn" onClick={ ()=> navigate('/company_management/add_company')}>
                            ADD COMPANY
                        </Button>
					</Grid>
				</Grid>
				<Grid container spacing={3} className="user-list-main">
					<Grid item md={12} className="user-list-block">
						<div className="user-list-start">
							<div className="user-list-top-bar">
								<Grid container spacing={3} className="search-form-main">
									<Grid item md={6} className="main-title-user respo-w-fit">
										<h4 className="font-14">LIST OF COMPANIES</h4>
									</Grid>
									<Grid item md={6} className="view-all-user respo-w-fit respo-mar-l-auto">
										<h6 className="font-grey font-12 font-underline text-align-right">View all</h6>
									</Grid>
								</Grid>
							</div>
							<div className="user-list-bottom">
								<Grid container spacing={3} className="user-list-main-block">
									
									<Grid item md={12} className="user-list-right overflow-scroll">
										<Table>
											<TableHead>
												<TableRow>
													{/* <TableCell>Company ID</TableCell> */}
													<TableCell>Company Name</TableCell>
													<TableCell>Category</TableCell>
													<TableCell>Website</TableCell>
													<TableCell>Status</TableCell>
													<TableCell>Action</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{companyManagement.map((company,i)=>(
													<TableRow key={i}>
														{/* <TableCell>{company.company_id}</TableCell> */}
														<TableCell><img className="user_img vertical-align-middle" src={Company_6}/> <span className="vertical-align-middle">{company.company_name}</span></TableCell>
														<TableCell>{company.category}</TableCell>
														<TableCell>{company.website}</TableCell>
														<TableCell className="text-center"><span className={company.status=='ACTIVE' ? "active-ta font-12" : "inactive-ta font-12"}>{company.status}</span></TableCell>
														<TableCell className="text-center"><p className="justify"><span className="eye-icon" onClick={ ()=> navigate('/company_management/view_company/'+company.company_id)}><img className="table-icons" src={Eye}/></span><img className="table-icons pointer" src={Pencil} onClick={ ()=> navigate('/company_management/edit_company/'+company.company_id)}/><img className="table-icons pointer" src={Trash}  onClick={() => handleDeleteOpen(company.company_id)} /></p></TableCell>
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

export default Company_Management;