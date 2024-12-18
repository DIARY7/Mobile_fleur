import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ProfileScreen from './screens/ProfileScreen';


//NativeStack
// const RootStack = createNativeStackNavigator({
//     initialRouteName: 'Home',
//     screenOptions:{
//         // headerStyle:{ backgroundColor: 'tomato' },
//         headerShown:false
//     },
//     screens: {
//       Home:{
//         screen: HomeScreen,
//         options:{
//             title:"Home"
//         }    
//        } ,
//       Restaurant: RestaurantScreen,
//     },
//   });
  
// const Navigation = createStaticNavigation(RootStack);
  
// export default Navigation

//DrawerNavigator
// const Drawer = createDrawerNavigator();

// export default function Navigation() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={({ route }) => ({
//           drawerIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Restaurant') {
//               iconName = focused ? 'restaurant' : 'restaurant-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }

//             // Retourner l'icône Ionicons
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           drawerActiveTintColor: 'tomato',
//           drawerInactiveTintColor: 'gray',
//           headerShown: true, // Permet d'afficher l'en-tête au-dessus des écrans
//         })}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Restaurant" component={RestaurantScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


//Tab Navigator
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Restaurant') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Retourner l'icône Ionicons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Restaurant" component={RestaurantScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 
