import React, { useState } from "react";

const FormWithValidation = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    setEmail(value);
    const isValid = /\S+@\S+\.\S+/.test(value);
    setError(isValid ? "" : "Invalid email format");
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => validateEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FormWithValidation;
