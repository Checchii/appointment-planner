import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"; 

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>

      <label htmlFor="date">Date:</label>
      <input type="date" value={date} min={getTodayString()} onChange={(e) => setDate(e.target.value)}></input>

      <label htmlFor="time">Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)}></input>

      <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)} name="contact" />      
      <button type="submit">Submit</button>
    </form>
  );
};
