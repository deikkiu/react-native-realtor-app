// Изменить цвет png tintColor
import { Tabs } from './navigation/Tabs';
import { Login } from './screens/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
}
