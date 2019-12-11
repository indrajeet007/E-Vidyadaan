import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";

export class LoginScreen extends Component {
  state = {
    user: {}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _redirectToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate("Register");
  };

  _redirectToMain = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "teal",
          paddingTop: 200
        }}
      >
        <View style={{ flex: 1, width: 300, height: 50, paddingBottom: 50 }}>
          <Text
            style={{ textAlign: "center", fontSize: 25, paddingBottom: 20 }}
          >
            Login
          </Text>
          <Input label="Enter Email" placeholder="email@address.com" />
          <Input label="Enter Password" placeholder="Password" />
        </View>
        <View style={{ flex: 2, width: 150, height: 50 }}>
          <Button raised onPress={() => this._redirectToMain()} title="Login" />
          <Button
            onPress={() => this._redirectToRegister()}
            type="clear"
            title="Register"
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
