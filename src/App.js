import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      PUTA QUE PARIU
      <form name="contact" netlify netlify-honeypot="bot-field">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button type="submit">Send email</button>
      </form>
    </div>
  );
}
