import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { registerUser } from '../services/User.service'

export class RegisterScreen extends Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('RegisterScreen component mounted')

        // let tempUser = {
        //     email: '',
        //     password: ''
        // } 

        // this.setState({
        //     user: tempUser
        // }, () => console.log("user is from component ==>", this.state.user))
    }

    handleEmailChange = (email) => {
        this.setState({ email: email })
    }

    handlePasswordChange = (password) => {
        this.setState({ password: password })
    }

    _redirectToLogin = () => {
        const { navigation } = this.props
        const userData = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.email.replace(/@[^@]+$/, '')
        }

        registerUser(userData).then(res => {
            console.log("data coming from backend is ===> ", res.data)
        })
        .catch(err => {
            console.log("error ==>", err)
        })

        navigation.navigate("Login")
    }
    
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'space-around', alignItems:'center', backgroundColor:'teal', paddingTop: 200}}>
                <View style={{ flex: 1, width: 300, height: 50, paddingBottom: 50 }}>
                    <Text style={{textAlign: 'center', fontSize: 25, paddingBottom: 20}}>Register</Text>
                    <Input 
                        onChangeText={this.handleEmailChange} 
                        value={this.state.email} 
                        label='Enter Email' 
                        placeholder='email@address.com' 
                        autoCapitalize='none'/>
                    <Input 
                        onChangeText={this.handlePasswordChange} 
                        value={this.state.password} 
                        label='Enter Password' 
                        placeholder='Password'
                        autoCapitalize='none'
                        secureTextEntry={true}/>
                </View>
                <View style={{ flex: 2, width: 150, height: 50 }}>
                    <Button onPress={() => this._redirectToLogin()} title="Register"/>
                </View>
            </View>
        )
    }
}

export default RegisterScreen
