import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <label htmlFor="phone">Phone:</label>
      <input type="tel" value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" required onChange={(e) => setPhone(e.target.value)}></input>
      <label htmlFor="email">Email:</label>
      <input type="email" value={emai} onChange={(e) => setEmail(e.target.value)}></input>
      <button type="submit">Add Contact</button>
    </form>
  );
};

