import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, InputPass, InputSimple } from "../../components";
import { AiFillWarning } from "react-icons/ai";
import "./login.css";
import { loginHandler, useAuth } from "../../helper";
export function Login() {
  const initial = {
    email: "",
    password: "",
    error: false,
    loader: false,
  };
  const { login } = useAuth();
  const [formFields, setFormFields] = useState(initial);
  const { email, password, error, loader } = formFields;
  const guestLogin = () =>
    setFormFields({
      ...formFields,
      email: "dummy@dummy.com",
      password: "1Gucc*asa",
    });

  const submitHandler = (e) =>
    loginHandler(e, setFormFields, login, formFields);

  return (
    <div className="flex login-page align-center justify-center">
      {loader ? (
        <div className="flex flex-column align-center">
          <h2>Logging you in ...</h2>
        </div>
      ) : (
        <form
          onSubmit={submitHandler}
          className=" flex glass flex-column text-white padding-2 gap-1"
        >
          <InputSimple
            title="Email"
            inputType="email"
            inputClass="input-text md"
            inputValue={email}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                email: e.target.value,
              })
            }
            inputPlaceHolder="email..."
          />
          <InputPass
            title="Password"
            inputType="password"
            inputClass="input-text md"
            inputValue={password}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                password: e.target.value,
              })
            }
            inputPlaceHolder="password..."
          />
          {error ? (
            <span className="flex align-center bold text-red">
              Wrong Credentials <AiFillWarning className="text-red" />
            </span>
          ) : (
            <span style={{ opacity: 0 }}>Validate</span>
          )}
          <Button
            btnClass="btn guest-login bold"
            btnText="Guest Login"
            btnFunc={guestLogin}
          />
          <h2 className="flex flex-column text-dark bold">
            New Here?{" "}
            <Link to="/signup">
              <span className="sm register-link text-blue">
                Register Here &gt;{" "}
              </span>
            </Link>
          </h2>
          <Button btnClass=" btn auth-button bold" btnText="Login" />
        </form>
      )}
    </div>
  );
}
