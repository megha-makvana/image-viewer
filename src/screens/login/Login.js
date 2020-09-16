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
    usernameRequired: false,
    username: "",
    passwordRequired: false,
    password: "",
    loginError: false,
    loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
  };

  inputUsernameChangeHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
    !e.target.value
      ? this.setState({ usernameRequired: true })
      : this.setState({ usernameRequired: false });
  };
  inputPasswordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
    !e.target.value
      ? this.setState({ passwordRequired: true })
      : this.setState({ passwordRequired: false });
  };

  loginClickHandler = () => {
    this.setState({ loginError: false });
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      if (username === "user" && password === "admin") {
        sessionStorage.setItem(
          "access-token",
          "IGQVJYUG45d085YU56SEFSSnNCdU1Ed21HSDlIamZAEMzRJX2ZAPS1k2VkFPNzQ1ZA0wtaWZAVRnBiSkp6RDk2NDdSUThzcWtVV1MtODlYX2ZAIcHhjQzAwNDJtaVRGY0ZALUzhQaFVoNENmMmJBQmlYZAW41QQZDZD"
        );
        this.props.history.push("/home");
      } else {
        this.setState({ loginError: true });
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
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                {usernameRequired ? (
                  <FormHelperText>
                    <span className="red">required</span>
                  </FormHelperText>
                ) : null}
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
                {passwordRequired ? (
                  <FormHelperText>
                    <span className="red">required</span>
                  </FormHelperText>
                ) : null}
              </FormControl>
              <br />
              <br />
              {loginError ? (
                <FormHelperText>
                  <span className="red">
                    Incorrect username and/or password
                  </span>
                </FormHelperText>
              ) : null}
              <br />
              <Button
                className="login-card-button"
                variant="contained"
                color="primary"
                disabled={username === "" || password === ""}
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
