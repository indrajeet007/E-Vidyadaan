import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { Input, Button } from "react-native-elements";
import { registerUser } from "../services/User.service";
import { decodeJWT, setToStore } from "../util/Token.util";
import { AppLoading } from "expo";

export class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    user: {},
    loading: false
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

  _RegisterUser = async () => {
    const { navigation } = this.props;
    const userData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.email.replace(/@[^@]+$/, "")
    };

    this.setState({
      loading: true
    });

    registerUser(userData)
      .then(res => {
        userResponse = res.data.user;
        // decodedJWT = decodeJWT(res.data.jwt);
        this.setState({
          user: res.data.user,
          loading: false
        });

        setToStore(res.data.jwt)
          .then(res => {
            navigation.navigate("Profile", { user: this.state.user });
          })
          .catch(err => {
            console.error("erro setting token", err);
            this.setState({
              error: "Please Try To Login",
              loading: false
            });
          });
      })
      .catch(err => {
        this.setState({
          error: "User Already Exists",
          loading: false
        });
      });
  };

  render() {
    const { error, loading } = this.state;
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
        {loading == true && <ActivityIndicator size="large" color="#0000ff" />}
        <View style={{ flex: 1, width: 300, height: 50, paddingBottom: 50 }}>
          <Text
            style={{ textAlign: "center", fontSize: 25, paddingBottom: 20 }}
          >
            Register
          </Text>
          <Input
            onChangeText={this._handleEmailChange}
            value={this.state.email}
            label="Enter Email"
            placeholder="email@address.com"
            autoCapitalize="none"
          />
          <Input
            onChangeText={this._handlePasswordChange}
            value={this.state.password}
            label="Enter Password"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 2, width: 150, height: 50 }}>
          <Button onPress={() => this._RegisterUser()} title="Register" />
        </View>
        {error !== "" && (
          <View style={{ flex: 2, width: 150, height: 50 }}>
            <Text>{error}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default RegisterScreen;
