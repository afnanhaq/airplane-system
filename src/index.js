import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

import SearchForFlights from './components/SearchForFlights';

import CustomerMainPage from './components/CustomerMainPage';
import BookingAgentMainPage from './components/BookingAgentMainPage';
import StaffMainPage from './components/StaffMainPage';

// FOR VIEWING FLIGHTS
import BuyTicket from './components/BuyTicket';
import SearchFlightCard from './components/SearchFlightCard';
import FlightSearchTool from './components/FlightSearchTool';


// FOR CUSTOMER
import ViewMyFlights from './components/ViewMyFlights';
import RateAndComment from './components/RateAndComment';
import TrackMySpending from './components/TrackMySpending';

// FOR BOOKING AGENT
import ViewCommission from './components/ViewCommission';
import ViewTopCustomers from './components/ViewTopCustomers';

// FOR STAFF
import AddAirplane from './components/AddAirplane';
import AddAirport from './components/AddAirport';
import CreateNewFlight from './components/CreateNewFlight';
import ViewTopDestinations from './components/ViewTopDestinations';
import ComparisonOfRevenue from './components/ComparisonOfRevenue';
import ViewReports from './components/ViewReports';
import ViewBookingAgents from './components/ViewBookingAgents';
import ViewFrequentCustomers from './components/ViewFrequentCustomers';
import FlightRatings from './components/FlightRatings';
import ChangeFlightStatus from './components/ChangeFlightStatus';

import {useState} from 'react';



ReactDOM.render(

  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
