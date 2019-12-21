import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { ThemeProvider, Card, Button } from 'react-native-elements'

export class ServiceCardComponent extends Component{
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
    const {navigation} = this.props;
    //const data = navigation.getParam('selectedListItem', 'NO-ID');
    const serviceList = [
      //This list will be feteched by api
      {
        subject: 'English',
        class: '5th',
        day: 'Sat,Sun',
        time: '9:00 am - 10:30 am'
      }, 
      {
        subject: 'Hindi',
        class: '4th',
        day: 'Sat,Sun,Wed',
        time: '9:00 am - 10:30 am'
      }, 
      {
        subject: 'Science',
        class: '5th',
        day: 'Fri,Sat',
        time: '9:00 am - 10:30 am'
      }, 
    ]
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
        <ScrollView >
         {
          serviceList.map((l, i) => (
            <Card key = {i} title = {l.subject} containerStyle = {{borderRadius: 6, marginBottom:10}}>
              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Available for:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.class}
                </Text>
              </View>
              
              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Day:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.day}
                </Text>
              </View>

              <View style = {{flexDirection: 'row', padding: 10}}>
                <Text style = {{flex: 1,fontSize: 15, flexWrap: 'wrap',alignSelf: 'flex-start',}}>
                  Time:
                </Text>
                <Text style = {{fontSize: 15,alignSelf: 'flex-end'}}>
                  {l.time}
                </Text>
              </View>
              
              <Button
                title = "Request"
                type = 'outline'
              />
            </Card>
          ))
         }
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default ServiceCardComponent;
