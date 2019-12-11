import React, { Component } from "react";
import { Text, View } from "react-native";

export class ProfileScreen extends Component {
  state = {
    user: this.props.navigation.state.params.user
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Logged In User ===> {this.state.user.username} </Text>
      </View>
    );
  }
}

export default ProfileScreen;
