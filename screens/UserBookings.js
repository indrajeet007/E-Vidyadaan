import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";




export class UserBookings extends Component {


  constructor(props) {
    super(props);
    this.state = {}

  }
  _redirectToStartTeachingScreen = () => {
    const { navigation } = this.props;
    navigation.navigate("StartTeachingScreen");
  };




  render() {
    return (
      <View>
        <Header style={{ height: 20, width: 200 }}
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: '', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View>
          <Text style={styles.UserText}>User Module</Text>
        </View>
        <View style={styles.rectangle}>

          <Button
            title="Browse Services"
            color="black"
            onPress={() => this.props.navigation.navigate("BrowseServices")}
            type="clear"
          />

        </View>
        <View style={styles.rectangle}>
          <Button
            title="Account"
            onPress={() => this.props.navigation.navigate("ChangePassword")}
            color="#ff5c5c"
            type="clear"
          />

          <View style={{ width: 220, height: 50, paddingBottom: 50, marginTop: 30 }}>
            <Text
              style={{ textAlign: "center", fontSize: 22, paddingBottom: 120, fontWeight: "bold" }} >
              Service Information
  
          </Text>
          </View>

          <View style={styles.rectanglemain}>
            <Text style={styles.Mobiletext}> Science</Text>
            <Text style={styles.Mobileinnertext}>Category:</Text>
            <Text style={styles.Confirmation}>Your Booking is confirmed!</Text>
            <View style={styles.View}>
              <Button

                title="View"
                color="#ff5c5c"
                type="clear"
              />
            </View>
          </View>
          <View style={styles.rectanglemain}>

            <Text style={styles.Mobiletext}>English</Text>
            <Text style={styles.Mobileinnertext}>Category:</Text>
            <Text style={styles.Confirmation}>Your Booking is pending!</Text>
            <View style={styles.View}>
              <Button

                title="View"
                color="#ff5c5c"
                type="clear"
              />
            </View>
          </View>
        </View>

      </View>



    );
  }
}

const styles = StyleSheet.create({

  UserText: {
    textAlign: "left",
    marginLeft: 4,
    fontSize: 17,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#000000",
    justifyContent: "space-between"
  },

  rectangle: {

    width: 329,
    height: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 14,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ececec"
  },
  text1: {


    width: 114,
    height: 20,
    margin: 4,
    marginLeft: 17,
    paddingLeft: 8,
    fontFamily: "Roboto",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  },
  text2: {

    width: 114,
    height: 20,
    margin: 2,
    marginLeft: 0,
    paddingLeft: 2,
    fontFamily: "Roboto",
    justifyContent: "flex-start",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  },
  rectanglemain: {

    width: 329,
    height: 160,
    borderRadius: 25,
    marginBottom: 20,
    marginLeft: 14,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ececec"
  },
  Mobiletext: {
    fontFamily: "Roboto",
    paddingLeft: 15,
    margin: 4,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#000000",
    justifyContent: "space-between", textAlign: "justify", fontSize: 17
  },
  Mobileinnertext: {
    paddingLeft: 15,
    margin: 6,
    fontWeight: "100",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#000000",
    justifyContent: "space-between", textAlign: "justify", fontSize: 14
  },
  View: {
    width: 104,
    height: 40,
    paddingTop: 10,
    paddingBottom: 34,
    borderRadius: 25,
    marginLeft: 217,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 24,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#ececec"
  },

  Confirmation: {
    paddingLeft: 15,
    margin: 2,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 21,
    letterSpacing: 0,
    color: "#4169E1",
    justifyContent: "space-between", textAlign: "justify", fontSize: 18
  }


})
export default UserBookings;