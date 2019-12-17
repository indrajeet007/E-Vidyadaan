import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { ThemeProvider, Input, Button, Card } from "react-native-elements";
import { registerUser, userRoles, editUser } from "../services/User.service";
import { decodeJWT, setToStore } from "../util/Token.util";
import styles from '../util/styles'


export class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Register",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

  state = {
    fullName:"",
    email: "",
    password: "",
    cpassword: "",
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

  _handleFullNameChange = fullName => {
    this.setState({ fullName: fullName });
  };

  _handleEmailChange = email => {
    this.setState({ email: email });
  };

  _handlePasswordChange = password => {
    this.setState({ password: password });
  };

  _handleCpasswordChange = cpassword => {
    this.setState({ cpassword: cpassword });
  };

  _RegisterUser = async () => {
    const { navigation } = this.props;
    const userData = {
      email: this.state.email,
      password: this.state.password,
      //username: this.state.email.replace(/@[^@]+$/, "")
      username: this.state.fullName
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
    const { containerRoot,inputContainer } = styles
    const theme = {
      colors:{
        primary: "#673ab7",
      },
      Icon:{
        size: 22,
        color: "#333",
      },
    }
    return (
      <ThemeProvider theme = {theme}>
        <View style={containerRoot}>
          {loading == true && <ActivityIndicator size="large" color="#0000ff" />}
          <Card title = "User Register" containerStyle = {{borderRadius: 6}}>
            <Input
              placeholder="EnterFull Name"
              inputContainerStyle={inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'person-outline'}}
              onChangeText={this._handleFullNameChange}
              value={this.state.fullName}
              autoCapitalize="words"
            />
            <Input
              placeholder="Enter E-mail"
              inputContainerStyle={inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'mail'}}
              onChangeText={this._handleEmailChange}
              value={this.state.email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              placeholder="Enter Password"
              inputContainerStyle={inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'lock-outline'}}
              onChangeText={this._handlePasswordChange}
              value={this.state.password}
              autoCapitalize="none"
              secureTextEntry={true}
            />
            <Input
              placeholder="Confirm Password"
              inputContainerStyle={inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'lock-outline'}}
              onChangeText={this._handleCpasswordChange}
              value={this.state.cpassword}
              autoCapitalize="none"
              secureTextEntry={true}
              blurOnSubmit={true}
              returnKeyType="done"
            />
          </Card>
          <View style={{ flex: 2, alignItems: 'stretch',  margin: 20 }}>
            <Button 
              title="Register"
              onPress={() => this._RegisterUser()} 
            />
          </View>
          {error !== "" && (
            <View style={{ flex: 2, width: 150, height: 50 }}>
              <Text>{error}</Text>
            </View>
          )}
        </View>
      </ThemeProvider>
    );
  }
}

export default RegisterScreen;
