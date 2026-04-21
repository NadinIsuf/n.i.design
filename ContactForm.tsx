"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Name
        <input type="text" name="name" autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Project Type
        <input type="text" name="projectType" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} />
      </label>
      <button type="submit">{sent ? "Inquiry Noted" : "Send Inquiry"}</button>
      {sent ? (
        <p className="form-note">
          Thank you. Please email the project details directly to complete the inquiry.
        </p>
      ) : null}
    </form>
  );
}
