import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  CreateScreen,
  HomeScreen,
  FavoriteScreen,
  MessageScreen,
  ProfileScreen,
} from '../screens/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
        tabBarIcon: ({ color, size, focused, style }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = !focused ? 'home-outline' : 'home';
              break;
            case 'Favorite':
              iconName = !focused ? 'heart-outline' : 'heart';
              size = 26;
              break;
            case 'Create':
              iconName = !focused ? 'add-circle-outline' : 'add-circle';
              style = { paddingLeft: 3 };
              size = 29;
              break;
            case 'Message':
              iconName = !focused
                ? 'chatbubble-ellipses-outline'
                : 'chatbubble-ellipses';
              break;
            case 'Profile':
              iconName = !focused ? 'person-outline' : 'person';
              size = 25;
              break;
          }

          return (
            <Icon name={iconName} size={size} color={color} style={style} />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Главная' }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: 'Избранное' }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{ title: 'Создать' }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{ title: 'Сообщения' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Профиль' }}
      />
    </Tab.Navigator>
  );
};
