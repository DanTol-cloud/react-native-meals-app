import { Text, View } from 'react-native';
import { useScreens } from 'react-native-screens';
import MealsNavigator from './navigation/MealsNavigator';

useScreens();


export default function App() {
  return <MealsNavigator />;
}
