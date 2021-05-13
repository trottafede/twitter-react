import React from "react";
import SignIn from "../SignIn/SignUpContainer";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function SignUp() {
  return (
    <>
      <MuiThemeProvider>
        <SignIn />
      </MuiThemeProvider>
    </>
  );
}

export default SignUp;
