import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Input, Button } from 'react-native-elements'

export class LoginScreen extends Component {

    state = {
        user: {}
    }

    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("component mounted")
        // let tempUser = {
        //     username: 'indrajeet5',
        //     email:'indrajeet5@asd.com',
        //     password: '6942055'
        // } 

        // this.setState({
        //     user:tempUser
        // }, () => console.log("user is from component ==>", this.state.user))

        
    }

    _redirectToRegister  = () => {
        const {navigation} = this.props
        // console.log("redirect Pressed", navigation)
        navigation.navigate("Register")

        // .then(res => {
        //     console.log("data coming from backend is ===> ",res.data)
        // })
        // .catch(err => {
        //     console.log("error ==>", err)
        // })
    }

    _redirectToMain = () => {
        
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent:'space-around', alignItems:'center', backgroundColor:'teal', paddingTop: 200}}>
                <View style={{ flex: 1, width: 300, height: 50, paddingBottom: 50 }}>
                    <Text style={{textAlign: 'center', fontSize: 25, paddingBottom: 20}}>Login</Text>
                    <Input label='Enter Email' placeholder='email@address.com'/>
                    <Input label='Enter Password' placeholder='Password'/>
                </View>
                <View style={{ flex: 2, width: 150, height: 50 }}>
                    <Button raised onPress={() => this._redirectToMain()} title="Login"/>
                    <Button onPress={() => this._redirectToRegister()} type="clear" title="Register"/>
                </View>
            </View>
        )
    }
}

export default LoginScreen
