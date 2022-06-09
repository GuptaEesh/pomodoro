import { Link } from "react-router-dom";
import { useState } from "react";
import { PassChecker } from "./pass-checker";
import { Input, InputPass, InputSimple } from "../../components";
import "../login/login.css";
import { signUpHandler, useAuth } from "../../helper";
// import { signUpHandler } from '../../helpers/utils'

export function SignUp() {
  const initial = {
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    error: false,
    message: "",
    loader: false,
  };

  const { login } = useAuth();
  const [formFields, setFormFields] = useState(initial);
  const { name, email, password, confirmPass, error, message, loader } =
    formFields;
  const submitHandler = async (e) =>
    signUpHandler(e, setFormFields, login, formFields);

  return (
    <div className="sign-up-page flex align-center flex-column justify-center">
      {loader ? (
        <div className="flex flex-column align-center">
          <h2>Signing you in ...</h2>
        </div>
      ) : (
        <form
          onSubmit={submitHandler}
          className="flex glass flex-column padding-2"
        >
          <InputSimple
            title="Name"
            inputClass="input-text md"
            inputPlaceHolder="type name..."
            inputType="text"
            inputValue={name}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                name: e.target.value,
              })
            }
          />
          <InputSimple
            title="Email"
            inputClass="input-text md"
            inputPlaceHolder="email..."
            inputType="email"
            inputValue={email}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                email: e.target.value,
              })
            }
          />
          <InputPass
            title="Password"
            inputValue={password}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                password: e.target.value,
              })
            }
            inputClass="input-text md"
            inputPlaceHolder="password..."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <InputPass
            title="Repeat Password"
            inputValue={confirmPass}
            inputFunc={(e) =>
              setFormFields({
                ...formFields,
                confirmPass: e.target.value,
              })
            }
            inputClass="input-text md"
            inputPlaceHolder="confirm password.."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
          />
          <PassChecker pass={password} confirmPass={confirmPass} />
          {error ? (
            <span className="text-red">{message}!</span>
          ) : (
            <span className="text-dark vanish">Good to go!</span>
          )}
          <span className="text-dark">
            Already a customer?
            <br />
            <Link to="/login">
              <span className="text-underline text-blue sm">
                Log in here &gt;
              </span>
            </Link>
          </span>
          <Input inputType="submit" inputClass="btn auth-button bold " />
        </form>
      )}
    </div>
  );
}
