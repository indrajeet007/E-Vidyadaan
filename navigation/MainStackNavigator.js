import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from "../screens/ProfileScreen";
import ServiceListScreen from '../screens/ServiceListScreen';
import UserBookings from '../screens/UserBookings';
import BrowseServices from '../screens/BrowseServices';
import Filter from '../screens/Filter';
import ChangePassword from '../screens/ChangePassword';



export default MainStack = createStackNavigator({
    Profile: {screen: ProfileScreen},
    ServiceList: {screen: ServiceListScreen},
    UserBookings: { screen: UserBookings },
    BrowseServices: { screen: BrowseServices },
    Filter: { screen: Filter },
    ChangePassword: { screen: ChangePassword }
})