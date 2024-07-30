import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 const [contacts, setContacts] = useState([]);

 const [appointments, setAppointments] = useState([]);

 const addNewContact = (name, phone, email) => {
  const newContact = { name, phone, email };
  setContacts((prev) => [...prev, newContact]);
 };

 const createNewAppointment = (name, contact, date, time) => {
  const newAppointment = { name, contact, date, time }
  setAppointments((prev) => [...prev, newAppointment]);
 };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactlist={contacts} onAddNewContact={addNewContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentlist={appointments} contactslist={contacts} onCreateNewAppointment={createNewAppointment} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
