import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthStack from "./AuthStackNavigator";
import MainStack from "./MainStackNavigator";
export default createAppContainer(
  createSwitchNavigator({
    AuthStack,
    MainStack
  })
);
