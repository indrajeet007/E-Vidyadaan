import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'

export class RegisterScreen extends Component {
    state = {
        user: {}
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('RegisterScreen component mounted')

        let tempUser = {
            username: 'indrajeet5',
            email:'indrajeet5@asd.com',
            password: '6942055'
        } 

        this.setState({
            user:tempUser
        }, () => console.log("user is from component ==>", this.state.user))
    }

    _redirectToLogin = () => {
        const { navigation } = this.props
        console.log('redirect to login clicked!', navigation)
        navigation.navigate("Login")
    }
    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'space-around', alignItems:'center', backgroundColor:'teal', paddingTop: 200}}>
                <View style={{ flex: 1, width: 300, height: 50, paddingBottom: 50 }}>
                    <Text style={{textAlign: 'center', fontSize: 25, paddingBottom: 20}}>Register</Text>
                    <Input label='Enter Email' placeholder='email@address.com'/>
                    <Input label='Enter Password' placeholder='Password'/>
                </View>
                <View style={{ flex: 2, width: 150, height: 50 }}>
                    <Button onPress={() => this._redirectToRegister()} title="Register"/>
                </View>
            </View>
        )
    }
}

export default RegisterScreen
