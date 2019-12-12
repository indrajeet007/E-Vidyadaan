import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { deleteFromStore } from "../util/Token.util";

export class ProfileScreen extends Component {
  state = {
    user: this.props.navigation.state.params.user
  };

  _logoutUser() {
    const {navigation} = this.props
    deleteFromStore()
    .then(res => {
      navigation.navigate("Login")
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent:'space-evenly', alignItems:'center'}}>
        <Text> Logged In User ===> {this.state.user.username} </Text>
        <Button onPress={() => this._logoutUser()} title="Logout User"></Button>
      </View>
    );
  }
}

export default ProfileScreen;
