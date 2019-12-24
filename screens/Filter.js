import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ThemeProvider, Button, Input, Card } from "react-native-elements";
import stylesG from '../util/styles'

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      category : "",
      duration : "",
      isNameValid : true,
      isCategoryValid : true,
      isDurationValid : true,
    }
  }

  _handleNameChange = name => {
    this.setState({ name: name });
  };

  _handleCategoryChange = category => {
    this.setState({ category: category });
  };

  _handleDurationChange = duration => {
    this.setState({ duration: duration });
  };

  _FetchFilterResult = async () => {
    const { navigation } = this.props;
    
    this.setState({
      isNameValid:this.state.name.length>0 || this.nameInput.shake(),
      isCategoryValid: this.state.category.length > 0 || this.categoryInput.shake(),
      isDurationValid: this.state.duration.length > 0 || this.durationInput.shake(),
    })
  }
  render() {
    const { containerRoot, container, inputContainer } = stylesG
    const { isNameValid, isCategoryValid, isDurationValid } = this.state;
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
          
          <View style={{ marginTop: 28 }}>
          </View>

          <Card containerStyle={{
            width: 350, margin: 20, borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2
            }
          }}>

            <Input
              label = "Subject name"
              placeholder = "Maths"
              containerStyle = {container}
              inputContainerStyle = {inputContainer}
              leftIconContainerStyle = {{
                marginRight: 10,
              }}
              leftIcon = {{name: 'person-outline'}}
              onChangeText = {this._handleNameChange}
              value = {this.state.name}
              autoCapitalize = "words"
              ref = {input => (this.nameInput = input)}
              onSubmitEditing = {() => this.categoryInput.focus()}
              errorMessage = {
                isNameValid
                  ? null
                  : 'Please enter name'
              }
            />

            <Input
              label = "Category"
              placeholder = "Primary Education"
              containerStyle = {container}
              inputContainerStyle = {inputContainer}
              leftIconContainerStyle = {{
                marginRight: 10,
              }}
              leftIcon = {{name: 'format-list-bulleted-type', type: 'material-community'}}
              onChangeText = {this._handleCategoryChange}
              value = {this.state.category}
              autoCapitalize = "words"
              ref = {input => (this.categoryInput = input)}
              onSubmitEditing = {() => this.durationInput.focus()}
              errorMessage = {
                isCategoryValid
                  ? null
                  : 'Please enter category'
              }
            />

            <Input
              label = "Duration"
              placeholder = "1 months"
              containerStyle = {container}
              inputContainerStyle = {inputContainer}
              leftIconContainerStyle = {{
                marginRight: 10,
              }}
              leftIcon = {{name: 'time-slot', type: 'entypo'}}
              onChangeText = {this._handleDurationChange}
              value = {this.state.duration}
              ref = {input => (this.durationInput = input)}
              returnKeyType = 'done'
              errorMessage = {
                isDurationValid
                  ? null
                  : 'Please enter duration'
              }
            />

            <View style={styles.confirm}>
              <Button
                title="Fetch Results"
                color="#ff5c5c"
                type="solid"
                onPress = {() => this._FetchFilterResult()}
              />
            </View>
          </Card>
        </View>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  confirm: {
    height: 20,
    margin: 20,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  }
})
export default Filter;