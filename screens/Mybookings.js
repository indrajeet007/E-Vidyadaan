import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";
import MyBookings from "../Userside/BrowseServices";



export class MyBookings extends Component {


   constructor(props) {
      super(props);
      this.state = {}

   }
   render() {
      return (
         <View>
            <Header style={{ height: 20, width: 200 }}
               placement="left"
               leftComponent={{ icon: 'menu', color: '#fff' }}
               centerComponent={{ text: '', style: { color: '#fff' } }}
               rightComponent={{
                  icon: 'home', color: '#fff'
               }}
            />
            <View style={{ paddingTop: 20 }}></View>


            <View style={styles.rectanglemain}>
               <Text style={styles.Mobiletext}>English Language</Text>
               <Text style={styles.Mobileinnertext}>Description:</Text>
               <Text style={styles.Mobileinnertext}>Category:</Text>
               <Text style={styles.Mobileinnertext}>Duration:</Text>
               <View style={styles.Request}>
                  <Button

                     title="Request"
                     color="#ff5c5c"
                     type="clear"
                  />
               </View>
            </View>
            <View style={{ paddingTop: 20 }}></View>


            <View style={styles.rectanglemain}>

               <Text style={styles.Mobiletext}>Maths</Text>
               <Text style={styles.Mobileinnertext}>Description:</Text>
               <Text style={styles.Mobileinnertext}>Category: </Text>
               <Text style={styles.Mobileinnertext}>Duration:</Text>
               <View style={styles.Request}>
                  <Button

                     title="Request"
                     color="#ff5c5c"
                     type="clear"
                  />
               </View>
            </View>

         </View>
      );

   }
}

export default MyBookings;