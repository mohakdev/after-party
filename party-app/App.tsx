import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { backgroundColor } from './styles/colors';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import PartyScreen from './screens/PartyScreen';
import { RootStackParamList } from './types/navigation';

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
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, statusBarStyle: 'inverted' }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Party" component={PartyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

