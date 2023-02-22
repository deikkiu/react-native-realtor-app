import { useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';

export const SignUp = ({ navigation }) => {
  const [inputValue, setInputValue] = useState({
    nameValue: '',
    emailValue: '',
    passwordValue: '',
    passwordConfirmValue: '',
  });

  const changeInputValue = (text, name) => {
    setInputValue({
      ...inputValue,
      [name]: text,
    });
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Image source={images.appIcon} style={styles.image} />
            <Text style={styles.brandName}>EstateEasy</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Создайте аккаунт</Text>
          <TextInput
            style={styles.input}
            value={inputValue.nameValue}
            placeholder="Имя"
            onChangeText={(value) => changeInputValue(value, 'nameValue')}
          />
          <TextInput
            style={styles.input}
            value={inputValue.emailValue}
            placeholder="Почта"
            onChangeText={(value) => changeInputValue(value, 'emailValue')}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={inputValue.passwordValue}
            placeholder="Пароль"
            onChangeText={(value) => changeInputValue(value, 'passwordValue')}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={inputValue.passwordConfirmValue}
            placeholder="Подтвердите пароль"
            onChangeText={(value) =>
              changeInputValue(value, 'passwordConfirmValue')
            }
          />

          {/* {SignUp button} */}
          <View style={styles.loginBtnWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Зарегистрироваться</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
  },
  container: {
    paddingVertical: 70,
    paddingHorizontal: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.secondary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 55,
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
    marginRight: 14,
  },
});
