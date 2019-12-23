import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Header, Input, Card } from "react-native-elements";





export class Filter extends Component {


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
        <View style={{ marginTop: 28 }}>
        </View>

        <Card containerStyle={{
          height: 320, width: 350, margin: 24, borderRadius: 25,
          shadowOffset: {
            width: 0,
            height: 2
          }
        }}>
          <View style={{ marginTop: 6 }}>
          </View>




          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Name</Text>
          <Input
            placeholder=' Maths'
          />
          <View style={{ marginTop: 8 }}>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Category</Text>
          <Input
            placeholder=' Primary education'
          />
          <View style={{ marginTop: 8 }}>
          </View>

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Duration</Text>
          <Input
            placeholder=' 1 Month'
          />
          <View style={styles.confirm}>
            <Button

              title="Save"
              color="#ff5c5c"
              type="solid"
            />
          </View>

        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  ngotext: {
    textAlign: "left",
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
  confirm: {
    width: 107,
    height: 20,
    borderRadius: 25,
    marginLeft: 210,
    marginTop: 32,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ececec"
  }

})
export default Filter;