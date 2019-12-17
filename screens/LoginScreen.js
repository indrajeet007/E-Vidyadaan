import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ThemeProvider,Input, Button, Card } from "react-native-elements";
import { loginUser } from "../services/User.service";
import { setToStore } from "../util/Token.util";
import styles from '../util/styles'

export class LoginScreen extends Component {
  
  static navigationOptions = {
    title: "Login",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

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
      <ThemeProvider theme = { theme }>
        <View style={containerRoot}>
          <Card title = "User Sign in" containerStyle = {{borderRadius: 6}} >
            <Input 
              inputContainerStyle={inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'mail' }}
              placeholder="Enter E-mail" 
              value={this.state.email} 
              onChangeText={this._handleEmailChange}
              autoCapitalize="none"
              keyboardType="email-address" 
            />
            <Input 
              inputContainerStyle = {inputContainer}
              leftIconContainerStyle={{
                marginRight: 10,
              }}
              leftIcon={{name: 'lock-outline' }}
              placeholder="Enter Password" 
              value={this.state.password} 
              onChangeText={this._handlePasswordChange}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true} 
              blurOnSubmit={true}
              returnKeyType="done"
            />
          </Card>

          <View style={{ flex: 3, alignItems: 'stretch',  margin: 20}}>
            <Button 
              raised 
              title="Login" 
              containerStyle={{marginBottom: 10}}
              onPress={() => this._redirectToMain()} 
            />
            <Button
              title="Forgot password?"
              containerStyle={{marginBottom: 10}}
              onPress={() => this._redirectToRegister()}
              type="outline"
            />
            <Button
              title="Register"
              containerStyle={{marginBottom: 10}}
              onPress={() => this._redirectToRegister()}
              type="outline"
            />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

export default LoginScreen;
