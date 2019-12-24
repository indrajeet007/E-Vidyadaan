import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import MyBookings from "../Userside/BrowseServices";

export class MyBookings extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
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
            <View>
               
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
         </ThemeProvider>
      );
   }
}

export default MyBookings;