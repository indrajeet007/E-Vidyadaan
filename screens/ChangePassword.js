import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Input, Card, ThemeProvider } from "react-native-elements";
import styles from '../util/styles'

export class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            passwordConfirmation: "",
            isOldPasswordValid: true,
            isNewPasswordValid: true,
            isConfirmationValid: true,
        }
    }

    _handleOldPasswordChange = password => {
        this.setState({ oldPassword: password });
    };

    _handleNewPasswordChange = password => {
        this.setState({ newPassword: password });
    };
    
    _handlePasswordConfirmationChange = password => {
        this.setState({ passwordConfirmation: password });
    };

    _ChangePassword = async () => {
        const { navigation } = this.props;
    
        this.setState({
        isOldPasswordValid: this.state.oldPassword.length >= 6 || this.oldPasswordInput.shake(),
        isNewPasswordValid: this.state.newPassword.length >= 6 || this.newPasswordInput.shake(),
        isConfirmationValid: this.state.newPassword === this.state.passwordConfirmation || this.confirmationInput.shake(),
        })
    };

    render() {
        const { containerRoot,inputContainer } = styles
        const { isOldPasswordValid, isNewPasswordValid, isConfirmationValid } = this.state;
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
                <View style = {containerRoot} >
                    <Card 
                        tite = "My Bookings" 
                        containerStyle={{
                            width: 350, margin: 10, borderRadius: 10,
                            shadowOffset: {
                                width: 0,
                                height: 2
                            }
                        }}
                    >
                        
                        <Text style={{ fontWeight: "bold" }}>Change Password</Text>
                        <View style={{ marginTop: 8 }}/>

                        <Input
                            placeholder="Enter Old Password"
                            inputContainerStyle={inputContainer}
                            leftIconContainerStyle={{
                                marginRight: 10,
                            }}
                            leftIcon={{name: 'lock-outline'}}
                            onChangeText={this._handleOldPasswordChange}
                            value={this.state.oldPassword}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            ref={input => (this.oldPasswordInput = input)}
                            onSubmitEditing={() => this.newPasswordInput.focus()}
                            errorMessage={
                                isOldPasswordValid
                                ? null
                                : 'Please enter at least 6 characters'
                            }
                        />
                        <Input
                            placeholder="Enter New Password"
                            inputContainerStyle={inputContainer}
                            leftIconContainerStyle={{
                                marginRight: 10,
                            }}
                            leftIcon={{name: 'lock-outline'}}
                            onChangeText={this._handleNewPasswordChange}
                            value={this.state.newPassword}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            ref={input => (this.newPasswordInput = input)}
                            onSubmitEditing={() => this.confirmationInput.focus()}
                            errorMessage={
                                isNewPasswordValid
                                ? null
                                : 'Please enter at least 6 characters'
                            }
                        />
                        <Input
                            placeholder="Confirm Password"
                            inputContainerStyle={inputContainer}
                            leftIconContainerStyle={{
                                marginRight: 10,
                            }}
                            leftIcon={{name: 'lock-outline'}}
                            onChangeText={this._handlePasswordConfirmationChange}
                            value={this.state.passwordConfirmation}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            blurOnSubmit={true}
                            returnKeyType="done"
                            ref={input => (this.confirmationInput = input)}
                            errorMessage={
                                isConfirmationValid
                                ? null
                                : 'Please enter the same password'
                            }
                        />

                        <View style={stylesLocal.confirm}>
                            <Button
                                title="Change"
                                type="solid"
                                onPress = {() => this._ChangePassword() }
                            />
                        </View>
                    </Card>
                </View>
            </ThemeProvider>
        )
    }
}

const stylesLocal = StyleSheet.create({
    confirm: {
        height: 20,
        margin: 20,
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 1,
    },
})
export default ChangePassword;