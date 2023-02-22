import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import Ionicons from '@expo/vector-icons/Ionicons';

export const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>
        Просмотрите свои{' '}
        <Text style={{ color: COLORS.secondary }}> избранные </Text> дома здесь,
        нажав на значок сердца{' '}
        <Ionicons name="heart" size={18} style={{ color: COLORS.secondary }} />
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.onHome}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.onHomeText}>Список домов</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.onLogin}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.onLoginText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.gray,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
  },
  onHome: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 25,
    marginRight: 10,
  },
  onHomeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  onLogin: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 25,
    marginLeft: 10,
    backgroundColor: 'black',
  },
  onLoginText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
