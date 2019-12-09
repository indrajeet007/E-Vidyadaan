import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export class LoginScreen extends Component {

    componentDidMount() {
        console.log("component mounted")
    }


    _redirectToRegister  = () => {
        const {navigation} = this.props
        console.log("redirect Pressed", navigation)
        navigation.navigate("Register")
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                <Text> textInComponent asdasdasdasd</Text>

                <TouchableOpacity onPress={this._redirectToRegister}>
                    <Text>Register Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginScreen
