import React from "react";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";

export default function StateLogin() {
  const {
    value: emailValue,
    isValid: emailHasEorror,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput("", (value) => isEmail(value) || isNotEmpty(value));

  const {
    value: passwordValue,
    isValid: passwordHasError,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasEorror || passwordHasError) {
      return;
    }

    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleEmailBlur()}
          onChange={(event) => handleEmailChange("email", event.target.value)}
          value={emailValue}
          error={emailHasEorror && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handlePasswordBlur()}
          onChange={(event) =>
            handlePasswordChange("password", event.target.value)
          }
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
