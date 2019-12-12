import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { loginUser } from "../services/User.service";
import { setToStore } from "../util/Token.util";

export class LoginScreen extends Component {
  state = {
    user: {},
    email: "",
    password: "",
    loading: false,
    error: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _handleEmailChange = email => {
    this.setState({ email: email });
  };

  _handlePasswordChange = password => {
    this.setState({ password: password });
  };

  _redirectToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate("Register");
  };

  _redirectToMain = () => {
    const { navigation } = this.props

    const loginData = {
      identifier: this.state.email,
      password: this.state.password
    }

    this.setState({
      loading: true
    })

    loginUser(loginData)
      .then(res => {
        userResponse = res.data.user;

        this.setState({
          user: res.data.user,
          loading: false
        })

        setToStore(res.data.jwt)
          .then(res => {
            navigation.navigate("Profile", { user: this.state.user })
          })
          .catch(err => {
            console.error("error setting token at login", err)
            this.setState({
              error: "Please Try To Login",
              loading: false
            })
        })
      })
      .catch(err => {
        this.setState({
          error: "User Already Exists",
          loading: false
        });
    })
  };

  render() {
    const { error, loading } = this.state
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
          <Input 
            value={this.state.email} 
            onChangeText={this._handleEmailChange}
            autoCapitalize="none"
            label="Enter Email" 
            placeholder="email@address.com" />
          <Input 
            value={this.state.password} 
            onChangeText={this._handlePasswordChange}
            autoCapitalize="none"
            secureTextEntry={true} 
            label="Enter Password" 
            placeholder="Password" />
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
