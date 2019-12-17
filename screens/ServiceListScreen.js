import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ThemeProvider, Card, Button } from 'react-native-elements'
import ServiceCard from './components/ServiceCardComponent'
import styles from '../util/styles'

export class ServiceListScreen extends Component{
  static navigationOptions = {
    title: "Browse Services",
    headerTintColor:"#fff",
    headerStyle:{
      backgroundColor:"#673ab7"
    },
  }

  state = {

  }

  constructor(props){
    super(props);
  }

  componentDidMount(){}

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
      <ThemeProvider theme={theme}>
        <ServiceCard></ServiceCard>
      </ThemeProvider>
    );
  }

}

export default ServiceListScreen;
