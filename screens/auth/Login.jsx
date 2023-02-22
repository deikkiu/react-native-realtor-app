import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, images } from '../../constants';
import { useState } from 'react';

export const Login = ({ navigation }) => {
  const [inputValue, setInputValue] = useState({
    textValue: '',
    passwordValue: '',
  });

  const changeInputValue = (text, name) => {
    setInputValue({
      ...inputValue,
      [name]: text,
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Image source={images.appIcon} style={styles.image} />
            <Text style={styles.brandName}>EstateEasy</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Войдите в систему</Text>
          <TextInput
            style={styles.input}
            value={inputValue.textValue}
            onChangeText={(value) => changeInputValue(value, 'textValue')}
            placeholder="Почта"
          ></TextInput>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Пароль"
            value={inputValue.passwordValue}
            onChangeText={(value) => changeInputValue(value, 'passwordValue')}
          />

          {/* {Login button} */}
          <View style={styles.loginBtnWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Войти</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot password */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPassText}>Забыли пароль?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Нет учетной записи? </Text>
          {/* SignUp button */}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupBtn}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  container: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 70,
    position: 'relative',
    width: '100%',
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
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  loginBtn: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 30,
    backgroundColor: COLORS.secondary,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  forgotPassText: {
    color: COLORS.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.secondary,
    fontWeight: 'bold',
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
