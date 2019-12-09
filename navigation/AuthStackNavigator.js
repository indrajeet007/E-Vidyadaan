import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';


export default AuthStack = createStackNavigator({
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen}
})