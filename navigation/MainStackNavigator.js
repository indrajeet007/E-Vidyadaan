import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from "../screens/ProfileScreen";
import ServiceListScreen from '../screens/ServiceListScreen';
import UserBookings from '../screens/UserBookings';
import Filter from '../screens/Filter';
import ChangePassword from '../screens/ChangePassword';

export default MainStack = createStackNavigator({
    UserBookings: { screen: UserBookings },
    Profile: {screen: ProfileScreen},
    ServiceList: {screen: ServiceListScreen},
    Filter: { screen: Filter },
    ChangePassword: { screen: ChangePassword }
})