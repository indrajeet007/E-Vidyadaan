import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from "../screens/ProfileScreen";
import ServiceListScreen from '../screens/ServiceListScreen';


export default MainStack = createStackNavigator({
    Profile: {screen: ProfileScreen},
    ServiceList: {screen: ServiceListScreen}
})