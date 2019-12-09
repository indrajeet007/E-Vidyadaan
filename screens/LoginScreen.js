import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {registerUser} from '../services/User.service';

export class LoginScreen extends Component {


    state = {
        user: {}
    }

    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("component mounted")
        let tempUser = {
            username: 'indrajeet4',
            email:'indrajeet4@asd.com',
            password: '69420',
            role: ''
        } 

        this.setState({
            user:tempUser
        }, () => console.log("user is from component ==>", this.state.user))

        
    }

  


    _redirectToRegister  = () => {
        // const {navigation} = this.props
        // console.log("redirect Pressed", navigation)
        // navigation.navigate("Register")

        registerUser(this.state.user)
        .then(res => {
            console.log("data coming from backend is ===> ",res.data)
        })
        .catch(err => {
            console.log("error ==>", err)
        })
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                <Text> textInComponent asdasdasdasd</Text>

                <TouchableOpacity onPress={() => this._redirectToRegister()}>
                    <Text>Register Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default LoginScreen
