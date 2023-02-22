import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, COLORS } from '../../constants';
import { Loading } from '../../components/Loading';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import normalizePrice from '../../helpers/normalizePrice';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Announcement = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTransparent: true,
    });
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
  const changedPrice = normalizePrice(price);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
        <Ionicons name="heart-outline" size={26} style={styles.heart} />
        <Ionicons name="share-social-outline" size={26} style={styles.share} />
        <Ionicons name="settings-outline" size={26} style={styles.settings} />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.price}>{changedPrice}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.adress}>Адрес: {adress}</Text>
          <Text style={styles.previewDescr}>Описание:</Text>
          <Text style={styles.preview}>{preview}</Text>
          <View style={styles.data}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 14,
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  precontent: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
  },
  adress: {
    fontSize: 14,
    fontWeight: '700',
  },
  previewDescr: {
    marginTop: 10,
    fontSize: 20,
  },
  preview: {
    fontSize: 14,
    color: COLORS.gray,
  },
  data: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
  },
  city: {
    marginRight: 10,
  },
  // icons
  heart: {
    position: 'absolute',
    top: 50,
    right: 140,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
  },
  share: {
    position: 'absolute',
    top: 50,
    right: 85,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 3,
  },
  settings: {
    position: 'absolute',
    top: 50,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 3,
  },
});
