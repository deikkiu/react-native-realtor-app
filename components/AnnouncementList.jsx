import { Image, Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

export const AnnouncementList = ({ img, title, price, adress, city, date }) => {
  price = price.replace(/(\\xa)+/g, '');

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.adress}>{adress}</Text> */}
          <View style={styles.subinfo}>
            <View style={styles.subinfoDescr}>
              <Text style={styles.subinfoText}>{city} </Text>
              <Text style={styles.subinfoText}> {date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: '#faf1e5',
  },
  container: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    // Shadow
    elevation: 10,
    shadowColor: COLORS.gray,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    marginTop: 8,
  },
  subinfo: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: 4,
  },
  subinfoText: {
    fontSize: 12,
    color: COLORS.black,
  },
  subinfoDescr: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  title: {
    color: COLORS.primary,
    marginTop: 4,
    fontSize: 16,
  },
  adress: {
    fontSize: 13,
  },
  heart: {
    right: 10,
  },
});
