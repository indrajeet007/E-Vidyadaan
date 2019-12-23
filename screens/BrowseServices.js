import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Header } from "react-native-elements";
import { render } from "react-dom";



export class BrowseServices extends Component {


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

const styles = StyleSheet.create({

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
        margin: 2,
        fontWeight: "100",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        color: "#000000",
        justifyContent: "space-between", textAlign: "justify", fontSize: 14
    },
    Request: {
        width: 104,
        height: 40,
        paddingTop: 10,
        paddingBottom: 34,
        borderRadius: 25,
        marginLeft: 217,
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
    }
})
export default BrowseServices;