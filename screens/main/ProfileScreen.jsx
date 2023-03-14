import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { logout } from '../../utils/firebase';
import { useAuth } from '../../auth/useAuth';
import { COLORS } from '../../constants';

export const ProfileScreen = ({ navigation }) => {

  const {isLoggedIn, user} = useAuth();

  const signOut = async () => {
    await logout();
  }

  return (
    <>
      {isLoggedIn
        ?
        <View>
            <Text>
                {user?.email}
            </Text>
            <TouchableOpacity
              style={styles.signout}
              onPress={signOut}
            >
              <Text>
                Выйти с аккаунта
              </Text>
            </TouchableOpacity>
        </View>
        :
        <View style={styles.main}>
          <Text style={styles.title}>Добро пожаловать!</Text>
          <Text style={styles.subtitle}>
            Войдите в систему, чтобы сохранять объявления и получать обновления о
            вашем домашнем поиске
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 32,
    fontWeight: '900',
  },
  subtitle: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.gray,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '900',
  },
  signout: {
    width: '80%',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: COLORS.secondary,
    padding: 12,
    borderRadius: 20,
  }
});
