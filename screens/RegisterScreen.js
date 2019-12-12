import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { Input, Button } from "react-native-elements";
import { registerUser, userRoles, editUser } from "../services/User.service";
import { decodeJWT, setToStore } from "../util/Token.util";


export class RegisterScreen extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    user: {},
    loading: false,
    role: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    userRoles().then(res => {
      let roles = res.data.roles;

      // console.log('Roles All: ', roles)
      // console.log('Roles Length: ', roles.length)

      let i = 0;

      for (i; i <= roles.length; i++) {
        console.log("Role Name ===>", roles[i].name);
        console.log("Role ID ===>", roles[i].id);

        if (roles[i].name === "User") {
          this.setState(
            {
              role: roles[i].id
            },
            () => console.log("Role ID after setState: ", this.state.role)
          );
          break;
        }
      }
    });
  }

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

    console.log("userData: ", userData);

    this.setState({
      loading: true
    });

    registerUser(userData)
      .then(res => {
        userResponse = res.data.user;
        // decodedJWT = decodeJWT(res.data.jwt);
        console.log("userResponse: ", res.data);
        this.setState({
          user: res.data.user,
          loading: false
        });

        setToStore(res.data.jwt)
          .then(res => {
            navigation.navigate("Profile", { user: this.state.user });
          })
          .catch(err => {
            console.error("error setting token at register", err);
            this.setState({
              error: "Please Try To Login",
              loading: false
            });
          });

        tempUserRoleObj = {
          role: this.state.role
        };

        editUser(res.data.user._id, tempUserRoleObj)
          .then(res => {
            console.log("is role assigned ? ", res.data);
          })
          .catch(err => {
            console.log("error ASsigning Role", err);
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
