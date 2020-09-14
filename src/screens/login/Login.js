import React, { Component } from "react";
import "./Login.css";
import Header from "../../common/header/Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

class Login extends Component {
  state = {
    usernameRequired: "dispNone",
    username: "",
    passwordRequired: "dispNone",
    password: "",
    loginError: "dispNone",
    loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  inputPasswordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  loginClickHandler = () => {
    const { username, password } = this.state;
    this.setState({ loginError: "dispNone" });
    username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });
    password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });

    if (username !== "" && password !== "") {
      if (username === "user" && password === "admin") {
        sessionStorage.setItem(
          "access-token",
          "IGQVJYQm5zRmdtbUQwbUsxMGRycmlWekhRZAzRIM2JPTmZAsQzkyVkROdkl5V0FZAY05JdFZAYS2xuVm9md3ZAnRkhzdjZAydDU5YnlsdmhNa1hlTlJtMWdzMGJIaFJmVE45cWVhc05LV1RBT2tZAUG00WmYySQZDZD"
        );
        this.props.history.push("/home");
      } else {
        this.setState({ loginError: "dispBlock" });
      }
    }
  };
  render() {
    const {
      username,
      password,
      usernameRequired,
      passwordRequired,
      loginError,
    } = this.state;
    return (
      <div>
        <Header {...this.props} showSearchBarAndProfileIcon={false} />
        <div className="login-page-content">
          <Card className="login-card">
            <CardContent className="login-card-content">
              <Typography className="login-card-heading" component="div">
                LOGIN
              </Typography>
              <FormControl className="login-card-form-username" required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  type="text"
                  username={username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={usernameRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl className="login-card-form-password" required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  password={password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={passwordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormHelperText className={loginError}>
                <span className="red">Incorrect username and/or password</span>
              </FormHelperText>
              <br />
              <Button
                className="login-card-button"
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
