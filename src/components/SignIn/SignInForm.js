import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";
import { Link } from "react-router-dom";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {
  return (
    <div className="loginBox">
      <h1>Inicie sesión</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <TextField
          name="username"
          floatingLabelText="user name"
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} />
              <FlatButton
                className="pwShowHideBtn"
                label={btnTxt}
                onClick={pwMask}
                style={{
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          )}
        </div>
        <TextField
          type={type}
          name="password"
          floatingLabelText="confirm password"
          value={user.password}
          onChange={onChange}
          errorText={errors.password}
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="Iniciar sesión"
        />
      </form>
      <p>
        <Link to="/signUp">Registrese acá</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
