import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './Tabs';
import { Login, SignUp, ForgotPassword, Announcement } from '../screens';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Announcement" component={Announcement} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Войти' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Зарегистрироваться' }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: 'Восстановить пароль' }}
      />
    </Stack.Navigator>
  );
};
