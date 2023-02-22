import { Text, View, StyleSheet } from 'react-native';

export const MessageScreen = () => {
  return (
    <View style={styles.main}>
      <Text>В разработке...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
