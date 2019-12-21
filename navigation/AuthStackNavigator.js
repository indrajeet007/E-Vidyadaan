import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen' ;


export default AuthStack = createStackNavigator(
    {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    ForgotPassword: {screen: ForgotPasswordScreen},
    },
    {
        initialRouteName: 'Login',
    }
)