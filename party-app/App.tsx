import { StyleSheet, Text, View } from 'react-native';
//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
//Screens
import PartyScreen from './screens/PartyScreen';
import HomeScreen from './screens/HomeScreen';

import { useFonts } from 'expo-font';
import { backgroundColor } from './styles/colors';
import OrderScreen from './screens/OrderScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import HostScreen from './screens/HostScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded, error] = useFonts({
    'RadioCanada': require('./assets/fonts/RadioCanada.ttf'),
    'TiltWarp': require('./assets/fonts/TiltWarp.ttf'),
  });

  //If unable to load fonts
  if (!loaded && !error) {
    return (
      <View>
        <Text>Error: Unable to import Fonts</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'none',
          statusBarStyle: 'inverted',
          presentation: 'transparentModal',
          contentStyle: { backgroundColor: backgroundColor }
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Party" component={PartyScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Host" component={HostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

