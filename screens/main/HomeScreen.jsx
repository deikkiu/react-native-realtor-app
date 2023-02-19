import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { Loading } from '../../components/Loading';
import { AnnouncementList } from '../../components/AnnouncementList';

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(API_URL)
      .then(({ data }) => setItems(data))
      .catch((err) => {
        console.error(err);
        Alert.alert('Ошибка', 'Не удалось получить объявления');
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(getData, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getData} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Announcement', {
                id: item.id,
              });
            }}
          >
            <AnnouncementList
              img={item.img}
              title={item.title}
              price={item.price}
              adress={item.adress}
              city={item.city}
              date={item.date}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
