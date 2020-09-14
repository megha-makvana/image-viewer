import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "../../common/header/Header";
import AvatarHeader from "../../common/avatarHeader/AvatarHeader";

class Home extends Component {
  state = {
    loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
    userProfileData: null,
    userMediaData: null,
    filterData: null,
  };

  UNSAFE_componentWillMount() {
    if (this.state.loggedIn === false) {
      this.props.history.push("/");
    }

    fetch(
      this.props.baseUrl +
        "?access_token=" +
        sessionStorage.getItem("access-token")
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result...", result);
        },
        (error) => {
          console.log("result...", error);
        }
      );

    fetch(
      this.props.baseUrl +
        "media/recent/?access_token=" +
        sessionStorage.getItem("access-token")
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ userProfileData: result.data });
          this.setState({
            userProfileData: result.data,
            filterData: result.data,
          });
          console.log("result recent...", this.state.userProfileData);
        },
        (error) => {
          console.log("result recent error...", error);
        }
      );
  }

  searchChangeHandler = (event) => {
    console.log("event.target.value..", event.target.value);
    this.setState({ searchValue: event.target.value });
    if (event.target.value && this.state.filterData) {
      const filterValue = this.state.filterData.filter((data) => {
        if (
          data.caption.text.split("#")[0].indexOf(this.state.searchValue) > -1
        ) {
          return data;
        }
      });
      console.log("filterValue..", filterValue);
      this.setState({ filterData: filterValue });
    } else {
      this.setState({ filterData: this.state.userProfileData });
    }
  };

  render() {
    return (
      <div>
        <Header
          {...this.props}
          showSearchBarAndProfileIcon={true}
          searchChangeHandler={this.searchChangeHandler}
        />
        <Container maxWidth="xl">
          <AvatarHeader data={this.state.filterData} />
        </Container>
      </div>
    );
  }
}

export default Home;
