import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';


export default AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
})