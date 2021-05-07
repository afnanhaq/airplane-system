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
/*
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
*/
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

            <Route path="/" component={EntrancePage} exact/>
            <Route path="/customer" exact>{checkCustomer ? <CustomerMainPage  /> : <Redirect to="/login" />}</Route>
            <Route path="/bookingagent" exact>{checkBookingAgent ? <BookingAgentMainPage /> : <Redirect to="/login" />}</Route>
            <Route path="/staff" exact>{checkStaff ? <StaffMainPage /> : <Redirect to="/login" />}</Route> 

            <Route path="/buyticket"><BuyTicket /></Route>
            <Route path="/viewmyflights"><ViewMyFlights /></Route>
            <Route path="/rateandcomment"><RateAndComment /></Route>
            <Route path="/trackmyspending"><TrackMySpending /></Route>

            <Route path="/viewcommission"><ViewCommission /></Route>
            <Route path="/viewtopcustomers"><ViewTopCustomers /></Route>

            <Route path="/addairplane"><AddAirplane /></Route>
            <Route path="/addairport"><AddAirport /></Route>
            <Route path="/createnewflight"><CreateNewFlight /></Route>
            <Route path="/viewtopdestinations"><ViewTopDestinations /></Route>
            <Route path="/comparisonofrevenue"><ComparisonOfRevenue /></Route>
            <Route path="/viewreports"><ViewReports /></Route>
            <Route path="/viewbookingagents"><ViewBookingAgents /></Route>
            <Route path="/viewfrequentcustomers"><ViewFrequentCustomers /></Route>
            <Route path="/viewflightratings"><FlightRatings /></Route>
            <Route path="/changeflightstatus"><ChangeFlightStatus /></Route>
            </Switch>
        </div> 
      </BrowserRouter>
    {/*
      <Navbar />
      <div className="container">    
        <Link to="/staff"> Staff </Link>
        
        <Link to="/bookingagent"> Booking Agent </Link>
        <Register />
         <Link to="/customer"> Customer </Link>
        <Login />
        <EntrancePage />
        <CustomerMainPage />
        <BookingAgentMainPage />
        <StaffMainPage />
        <SearchFlightCard startingLocation="Budapest, Hungary" destinationLocation="Paris, France" flightNumber="MG 370" isRoundTrip={true} isPurchaseable={true} 
        isForRateAndComment={true} canChangeStatus={true}
        isShowingStatus={true} flightStatus="Delayed"
        departureDate="Sun, 13 Mar 2019" departureTime="6:00pm" returnDate="Mon, 26 Mar 2019" returnTime="8:00PM" returnFlightNumber="GA 366" />
        <AddAirplane />
        <AddAirport />
        <ViewCommission />
        <FlightSearchTool />
        <RateAndComment />
        <ViewTopCustomers />
        <BuyTicket />
        <TrackMySpending />
        <CreateNewFlight />
        <ViewTopDestinations />
        <ComparisonOfRevenue />
        <ViewReports />
        <ViewBookingAgents />
        <ViewFrequentCustomers />
        <FlightRatings />
        <ChangeFlightStatus />
        <SearchFlightCards isRoundTrip={true} />
        <SearchForFlights />
      </div>
    */}
    </div>
  );
}

export default App;
