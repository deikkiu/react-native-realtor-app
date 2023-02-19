import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { Loading } from '../../components/Loading';
import { View, StyleSheet, Image, Text } from 'react-native';

export const Announcement = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    axios
      .get(`${API_URL}/${id}`)
      .then(({ data }) => setData(data))
      .catch((err) => {
        console.error(err);
        Alert.alert('Ошибка', 'Не удалось получить объявление');
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const { title, price, preview, adress, city, date, img } = data;
  const priceRep = price.replace(/(\\xa)+/g, '');

  return (
    <View style={styles.main}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.content}>
        <Text>{title}</Text>
        <Text>{priceRep}</Text>
        <Text>{adress}</Text>
        <Text>{preview}</Text>
        <Text>{city}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
