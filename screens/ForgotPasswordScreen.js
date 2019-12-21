import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ThemeProvider,Input, Button, Card } from "react-native-elements";
import styles from '../util/styles'

export class ForgotPasswordScreen extends Component{

  static navigationOptions = {
    title: "Forgot Password",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

  state = {
    email: "",
    isEmailValid: true,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount(){}

  _handleEmailChange = email => {
    this.setState({ email: email });
  };

  _redirectToLogin = () => {
    const { navigation } = this.props;
    this.setState({
      isEmailValid: this.state.email.length > 0 || this.emailInput.shake(),
    })
    navigation.navigate("Login");
  };

  render(){
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
    return(
      <ThemeProvider theme = {theme}>
        <View style = {containerRoot}>
          <Card title = "Forgot your password?" containerStyle = {{borderRadius: 6}} >
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
              ref={input => (this.emailInput = input)}
              errorMessage={
                this.state.isEmailValid ? null : 'Please enter a valid email address'
              }
            />
            <Text style={{margin: 10, alignSelf: 'center'}} >
              We'll send you an email with instructions.
            </Text>
            <Button
              title='Reset password' 
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress={() => this._redirectToLogin()}
            />
          </Card>
        </View>
      </ThemeProvider>
    );
  }

}

export default ForgotPasswordScreen;