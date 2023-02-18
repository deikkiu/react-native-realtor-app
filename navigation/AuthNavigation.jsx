import { createStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { ProfileScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return <Stack.Navigator></Stack.Navigator>;
};
