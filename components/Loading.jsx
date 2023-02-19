import { View, Text, ActivityIndicator } from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size="large" style={{ marginBottom: 20 }} />
      <Text style={{ fontSize: 16 }}>Загрузка...</Text>
    </View>
  );
};
