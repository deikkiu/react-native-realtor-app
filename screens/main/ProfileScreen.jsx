import { Text, View, TouchableOpacity } from 'react-native';

export const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Now you on ProfileScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{ borderWidth: 1 }}
      >
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
};
