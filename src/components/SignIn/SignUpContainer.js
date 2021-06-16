import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import actions from "../../redux/actions/userActions";

import { useDispatch } from "react-redux";
const axios = require("axios");

function ChoreForm(props) {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    var params = { username: name, password: password };
    const getToken = async () => {
      const response = await axios.post(
        `https://backend-twitter-react.vercel.app/tokens`,
        {
          username: params.username,
          password: params.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        dispatch(actions.setUser(response.data));
        history.push("/home");
      }
    };
    getToken();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <label>Name</label>
        <input
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          name="passWord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <input className="submitButton" type="submit" value="Log Chore" />
    </form>
  );
}

export default ChoreForm;

// import React, { Component } from "react";

// import SignUpForm from "./SignInForm.js";

// const FormValidators = require("./validate");
// const validateSignUpForm = FormValidators.validateSignUpForm;
// const zxcvbn = require("zxcvbn");

// class SignUpContainer extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       errors: {},
//       user: {
//         username: "",
//         password: "",
//       },
//       btnTxt: "show",
//       type: "password",
//       score: "0",
//     };

//     this.pwMask = this.pwMask.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.submitSignup = this.submitSignup.bind(this);
//     this.validateForm = this.validateForm.bind(this);
//     this.pwHandleChange = this.pwHandleChange.bind(this);
//   }

//   handleChange(event) {
//     const field = event.target.name;
//     const user = this.state.user;
//     user[field] = event.target.value;

//     this.setState({
//       user,
//     });
//   }

//   pwHandleChange(event) {
//     const field = event.target.name;
//     const user = this.state.user;
//     user[field] = event.target.value;

//     this.setState({
//       user,
//     });

//     if (event.target.value === "") {
//       this.setState((state) =>
//         Object.assign({}, state, {
//           score: "null",
//         })
//       );
//     } else {
//       var pw = zxcvbn(event.target.value);
//       this.setState((state) =>
//         Object.assign({}, state, {
//           score: pw.score + 1,
//         })
//       );
//     }
//   }

//   submitSignup(user) {
//     const dispatch = useDispatch();
//     const taskList = useSelector((state) => state);

//     var params = { username: user.usr, password: user.pw };
//     const getToken = async () => {
//       const response = await axios.post(`http://localhost:3001/token`, {
//         username: params.username,
//         password: params.password,
//       });
//       console.log(response.data);
//       if (response.data)
//         dispatch({
//           type: "SET_USER",
//           payload: response.data,
//         });
//     };
//     getToken();

//     // axios
//     //   .post("http://localhost:3001/token", params)
//     //   .then((res) => {
//     //     if (res.data.accessToken) {
//     //       console.log(res.data);
//     //       localStorage.token = res.data.token;
//     //       localStorage.isAuthenticated = true;
//     //       // window.location.reload();
//     //     } else {
//     //       this.setState({
//     //         errors: { message: res.data.message },
//     //       });
//     //     }
//     //   })
//     //   .catch((err) => {
//     //     console.log("Sign up data submit error: ", err);
//     //   });
//   }

//   validateForm(event) {
//     event.preventDefault();
//     var payload = validateSignUpForm(this.state.user);
//     if (payload.success) {
//       this.setState({
//         errors: {},
//       });
//       var user = {
//         usr: this.state.user.username,
//         pw: this.state.user.password,
//       };
//       this.submitSignup(user);
//     } else {
//       const errors = payload.errors;
//       this.setState({
//         errors,
//       });
//     }
//   }

//   pwMask(event) {
//     event.preventDefault();
//     this.setState((state) =>
//       Object.assign({}, state, {
//         type: this.state.type === "password" ? "input" : "password",
//         btnTxt: this.state.btnTxt === "show" ? "hide" : "show",
//       })
//     );
//   }

//   render() {
//     return (
//       <div>
//         <SignUpForm
//           onSubmit={this.validateForm}
//           onChange={this.handleChange}
//           onPwChange={this.pwHandleChange}
//           errors={this.state.errors}
//           user={this.state.user}
//           score={this.state.score}
//           btnTxt={this.state.btnTxt}
//           type={this.state.type}
//           pwMask={this.pwMask}
//         />
//       </div>
//     );
//   }
// }

// export default SignUpContainer;
