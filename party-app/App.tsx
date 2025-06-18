import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { backgroundColor } from './styles/colors';
import { useFonts } from 'expo-font';

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
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: 30,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: backgroundColor,
  },
});
