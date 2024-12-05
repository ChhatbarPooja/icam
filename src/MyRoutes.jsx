import React from 'react';
import {
	HashRouter as Router,
	Link,
	Route,
	Routes
} from 'react-router-dom';
import { render } from "react-dom";
import CompanyManagement from "./Components/CompanyManagement/index";
import DashboardCompanyManagement from "./Components/CompanyManagement/dashboard";
import ViewCompanyManagement from "./Components/CompanyManagement/view_company";
import AddCompanyManagement from "./Components/CompanyManagement/add_company";
import EditCompanyManagement from "./Components/CompanyManagement/edit_company";
import UserManagement from "./Components/UserManagement/index";
import AddUserManagement from "./Components/UserManagement/add_user";
import EditUserManagement from "./Components/UserManagement/edit_user";
import ViewUserManagement from "./Components/UserManagement/view_user";
import DashboardIndex from "./Components/Dashboard/index";
import EventsIndex from "./Components/Events/index";
import ViewEventsIndex from "./Components/Events/view_events";
import VehiclesIndex from "./Components/Vehicles/index";
import VehiclesView from "./Components/Vehicles/view_vehicle";
import EditVehicles from "./Components/Vehicles/edit_vehicle";
import AddVehicleIndex from "./Components/Vehicles/add_vehicle";
import DriversIndex from "./Components/Drivers/index";
import AddDriver from "./Components/Drivers/add_Driver";
import ViewDriver from "./Components/Drivers/view_driver";
import EditDriver from "./Components/Drivers/edit_Driver";
import VehicleinformationIndex from "./Components/VehicleInformation/index";
import InboxIndex from "./Components/Inbox/index";
import ReportsByDriver from "./Components/Reports/report_by_driver";
import ReportsByUser from "./Components/Reports/report_by_user";
import ReportsByVehicle from "./Components/Reports/report_by_vehicle";
import EventdesignerIndex from "./Components/EventDesigner/index";
import AddEventdesignerIndex from "./Components/EventDesigner/add_eventdesigner";
import EditEventdesignerIndex from "./Components/EventDesigner/edit_eventdesigner";
import Notification from "./Components/UserNotification/notification";
import FNOLIndex from "./Components/FNOL/index";


class MyRoutes extends React.Component {
	render() {
		return (

			<Routes>
				<Route path="/" element={<DashboardIndex />} />
				<Route path="/dashboard" element={<DashboardIndex />} />
				<Route path="/events" element={<EventsIndex />} />
				<Route path="/events/view_events" element={<ViewEventsIndex />} />
				<Route path="/vehicles" element={<VehiclesIndex />} />
				<Route path="/vehicles/view_vehicle" element={<VehiclesView />} />
				<Route path="/vehicles/edit_vehicle/:vehicleid" element={<AddVehicleIndex />} />
				<Route path="/vehicles/add_vehicle" element={<AddVehicleIndex />} />
				<Route path="/drivers" element={<DriversIndex />} />
				<Route path="/drivers/add_driver" element={<AddDriver />} />
				<Route path="/drivers/view_driver/:driverid" element={<ViewDriver />} />
				<Route path="/drivers/edit_driver/:driverid" element={<AddDriver />} />
				<Route path="/vehicle_information" element={<VehicleinformationIndex />} />
				<Route path="/inbox" element={<InboxIndex />} />
				<Route path="/usernotification" element={<Notification />} />
				<Route path="/reports/report_by_driver" element={<ReportsByDriver />} />
				<Route path="/reports/report_by_user" element={<ReportsByUser />} />
				<Route path="/reports/report_by_vehicle" element={<ReportsByVehicle />} />
				<Route path="/event_designer" element={<EventdesignerIndex />} />
				<Route path="/event_designer/add_eventdesigner" element={<AddEventdesignerIndex />} />
				<Route path="/event_designer/edit_eventdesigner" element={<EditEventdesignerIndex />} />
				<Route path="/user_management" element={<UserManagement />} />
				<Route path="/company_management" element={<CompanyManagement />} />
				<Route path="/company_management/dashboard" element={<DashboardCompanyManagement />} />
				<Route path="/company_management/view_company/:companyid" element={<ViewCompanyManagement />} />
				<Route path="/company_management/add_company" element={<AddCompanyManagement />} />
				<Route path="/company_management/edit_company/:companyid" element={<AddCompanyManagement />} />
				<Route path="/user_management/add_user" element={<AddUserManagement />} />
				<Route path="/user_management/view_user/:User_ID" element={<ViewUserManagement />} />
				<Route path="/user_management/edit_user/:User_ID" element={<AddUserManagement />} />
				<Route path="/FNOL" element={<FNOLIndex />} />				
			</Routes>

		)
	}
}

export default MyRoutes;