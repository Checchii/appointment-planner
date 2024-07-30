import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, createNewAppointment }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = appointments.some(appointment => 
      appointment.name === name && 
      appointment.date === date &&
      appointment.time === time &&
      appointment.contact === contact);
    
    if (isDuplicate) {
      alert("An appointment with these details already exists.");
    } else {
      createNewAppointment(name, contact, date, time);
      setName('');
      setContact('');
      setDate('');
      setTime('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        name={name}
        onNameChange={setName}
        contact={contact}
        onContactChange={setContact}
        contacts={contacts}
        date={date}
        onDateChange={setDate}
        time={time}
        onTimeChange={setTime}
        handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList  tiles={appointments} />
      </section>
    </div>
  );
};