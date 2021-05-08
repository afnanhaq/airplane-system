import './App.css';
import Navbar from './components/Navbar';
import EntrancePage from './components/EntrancePage';
import CustomerMainPage from './components/CustomerMainPage';
import BookingAgentMainPage from './components/BookingAgentMainPage';
import StaffMainPage from './components/StaffMainPage';
import SearchFlightCard from './components/SearchFlightCard';
import AddAirplane from './components/AddAirplane';
import AddAirport from './components/AddAirport';
import ViewCommission from './components/ViewCommission';
import FlightSearchTool from './components/FlightSearchTool';
import RateAndComment from './components/RateAndComment';
import ViewTopCustomers from './components/ViewTopCustomers';
import BuyTicket from './components/BuyTicket';
import TrackMySpending from './components/TrackMySpending';
import CreateNewFlight from './components/CreateNewFlight';
import ViewTopDestinations from './components/ViewTopDestinations';
import ComparisonOfRevenue from './components/ComparisonOfRevenue';
import ViewReports from './components/ViewReports';
import ViewBookingAgents from './components/ViewBookingAgents';
import ViewFrequentCustomers from './components/ViewFrequentCustomers';
import FlightRatings from './components/FlightRatings';
import ChangeFlightStatus from './components/ChangeFlightStatus';
import SearchForFlights from './components/SearchForFlights';
import ViewMyFlights from './components/ViewMyFlights';
import SearchAndPurchaseFlights from './components/SearchAndPurchaseFlights';
import SeeFlightStatus from './components/SeeFlightStatus';
import Login from './components/Login';
import Register from './components/Register';

import SearchFlightCards from './components/SearchFlightCards';

import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import {useState} from 'react';

/*
EntrancePage.js
Navbar.js
Login.js
Register.js

CUSTOMER MAIN PAGE - CustomerMainPage.js
ViewMyFlights.js
Search and Purchase - SearchFlightCard.js / SearchFlightCards.js / BuyTicket.js / FlightSearchTools.js
RateAndComment.js
TrackMySpending.js

BOOKING AGENT MAIN PAGE - BookingAgentMainPage.js
ViewMyFlights.js
Search and Purchase - SearchFlightCard.js / SearchFlightCard.js / BuyTicket.js / FlightSearchTools.js
ViewCommission.js
ViewTopCustomers.js

AIRLINE STAFF MAIN PAGE - StaffMainPage.js
ViewMyFlights.js
CreateNewFlight.js
ChangeFlightStatus.js
AddAirplane.js
AddAirport.js
FlightRatings.js
ViewBookingAgents.js
ViewFrequentCustomers.js
ViewReports.js
ComparisonOfRevenue.js
ViewTopDestinations.js
*/


function App() {

  // login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [typeFinal, setTypeFinal] = useState(sessionStorage.getItem('type'))
  const onClick = (typeChosen) => {
      setType(typeChosen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('isLoggedIn', 'true');
    window.sessionStorage.setItem('id', 'abc');
    if (type === "customer") { 
      window.sessionStorage.setItem('type', "customer");
    }
    if (type === "bookingAgent") { 
      window.sessionStorage.setItem('type', "bookingAgent");
    }
    if (type === "staff") { 
      window.sessionStorage.setItem('type', "staff");
    }
    window.location.reload();
  } 
  const checkCustomer = sessionStorage.getItem('type') === "customer" && sessionStorage.getItem('isLoggedIn') === "true";
  const checkBookingAgent = sessionStorage.getItem('type') === "bookingAgent" && sessionStorage.getItem('isLoggedIn') === "true";
  const checkStaff = sessionStorage.getItem('type') === "staff" && sessionStorage.getItem('isLoggedIn') === "true";


  const handleLogout = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem('type', '');
    window.sessionStorage.setItem('id', '');
    window.sessionStorage.setItem('isLoggedIn', 'false');
    window.location.reload();
  }
  return (
    <div>
      <BrowserRouter>
        <div>
            <Navbar handleLogout={handleLogout} />
            <Switch>
            <Route path="/login">
              <Login setType={e => setType(e)} setUsername={e => setUsername(e)} setPassword={e => setPassword(e)} handleSubmit={handleSubmit} />
            </Route>
            <Route path="/register"><Register /></Route>
            <Route path="/searchforflights"><SearchForFlights /></Route>

            <Route path="/" exact><EntrancePage /></Route>
            <Route path="/customer" exact>{checkCustomer ? <CustomerMainPage  /> : <Redirect to="/login" />}</Route>
            <Route path="/bookingagent" exact>{checkBookingAgent ? <BookingAgentMainPage /> : <Redirect to="/login" />}</Route>
            <Route path="/staff" exact>{checkStaff ? <StaffMainPage /> : <Redirect to="/login" />}</Route> 

            <Route path="/searchandpurchase">{checkCustomer || checkBookingAgent ? <SearchAndPurchaseFlights  /> : <Redirect to="/login" />}</Route>
            <Route path="/viewmyflights">{checkCustomer || checkBookingAgent ? <ViewMyFlights /> : <Redirect to="/login" />}</Route>
            <Route path="/trackmyspending">{checkCustomer ? <TrackMySpending  /> : <Redirect to="/login" />}</Route>

            <Route path="/viewcommission">{checkBookingAgent ? <ViewCommission /> : <Redirect to="/login" />}</Route>
            <Route path="/viewtopcustomers">{checkBookingAgent ? <ViewTopCustomers/> : <Redirect to="/login" />}</Route>

            <Route path="/addairplane">{checkStaff ? <AddAirplane /> : <Redirect to="/login" />}</Route>
            <Route path="/addairport">{checkStaff ? <AddAirport /> : <Redirect to="/login" />}</Route>
            <Route path="/createnewflight">{checkStaff ? <CreateNewFlight /> : <Redirect to="/login" />}</Route>
            <Route path="/viewtopdestinations">{checkStaff ? <ViewTopDestinations /> : <Redirect to="/login" />}</Route>
            <Route path="/comparisonofrevenue">{checkStaff ? <ComparisonOfRevenue /> : <Redirect to="/login" />}</Route>
            <Route path="/viewreports">{checkStaff ? <ViewReports /> : <Redirect to="/login" />}</Route>
            <Route path="/viewbookingagents">{checkStaff ? <ViewBookingAgents /> : <Redirect to="/login" />}</Route>
            <Route path="/viewfrequentcustomers">{checkStaff ? <ViewFrequentCustomers /> : <Redirect to="/login" />}</Route>
            <Route path="/viewflightratings">{checkStaff ? <FlightRatings /> : <Redirect to="/login" />}</Route>
            </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
