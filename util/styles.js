import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  containerRoot:{
    flex:1,
    margin:10,
    marginBottom:0,
  },
  inputBox:{  // Style for container to hold icon & textinput
    flexDirection:'row',
    alignItems:'center',
    margin:10,
    paddingLeft : 10,
    paddingRight: 10,
    borderColor:"gainsboro",
    borderRadius:4,
    borderWidth:0.5,
  },
  inputContainer:{  // Style for inputContainer of reactnative-elements
    flexDirection:'row',
    alignItems:'center',
    marginTop: 16,
    borderColor:'gainsboro',
    borderRadius:4,
    borderWidth:0.5,
  },
})