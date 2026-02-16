import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ListRenderItem } from 'react-native';

interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
}

const HOTEL_DATA: Hotel[] = [
  { id: '1', name: 'Hotel Satu', location: 'Indonesia', price: 'Rp 1.000.000', rating: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
  { id: '2', name: 'Hotel Dua', location: 'Indonesia', price: 'Rp 1.000.000', rating: 4, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80' },
  { id: '3', name: 'Hotel Tiga', location: 'Indonesia', price: 'Rp 1.000.000', rating: 4, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80' },
  { id: '4', name: 'Hotel Empat', location: 'Indonesia', price: 'Rp 1.000.000', rating: 4, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=400&q=80' },
  { id: '5', name: 'Hotel Lima', location: 'Indonesia', price: 'Rp 1.000.000', rating: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' },
  { id: '6', name: 'Hotel Enam', location: 'Indonesia', price: 'Rp 1.000.000', rating: 4, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80' },
];

export default function App() {
  
  // 2. Stars rendering logic
  const renderStars = (count: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Text key={i} style={{ color: i < count ? '#FFD700' : '#CCCCCC', fontSize: 12 }}>
          ★
        </Text>
      );
    }
    return <View style={{ flexDirection: 'row' }}>{stars}</View>;
  };

  // 3. Item rendering logic
  const renderItem: ListRenderItem<Hotel> = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.hotelImage} 
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.hotelName}>{item.name}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
        {renderStars(item.rating)}
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Pilihan Hotel</Text>
      <FlatList
        data={HOTEL_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  listContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  hotelImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 15,
    backgroundColor: '#f0f0f0', 
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationIcon: {
    fontSize: 10,
    color: '#8A2BE2',
    marginRight: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#8A2BE2',
  },
  priceContainer: {
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 14, 
    fontWeight: 'bold',
    color: '#8A2BE2',
  },
});
