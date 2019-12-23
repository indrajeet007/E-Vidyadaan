import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen' ;
import UserBookings from '../screens/UserBookings';
import BrowseServices from '../screens/BrowseServices';
import Filter from '../screens/Filter';
import ChangePassword from '../screens/ChangePassword';


export default AuthStack = createStackNavigator(
    {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
    ForgotPassword: {screen: ForgotPasswordScreen},
	UserBooking: { screen: UserBookings },
	BrowseServices: { screen: BrowseServices },
    ChangePassword: { screen: ChangePassword },
    Filter: { screen: Filter },

    },
    {
        initialRouteName: 'Login',
    }
)