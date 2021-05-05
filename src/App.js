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


import Login from './components/Login';
import Register from './components/Register';

import SearchFlightCards from './components/SearchFlightCards';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
  return (
    <div>
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
    </div>
  );
}

export default App;
