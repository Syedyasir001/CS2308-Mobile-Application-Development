import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SectionList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';


const PAYMENT_METHODS = [
  {
    title: 'Transfer Bank',
    data: [
      { id: '1', name: 'Bank Mandiri', image: 'https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/2560px-Bank_Mandiri_logo.svg.png' },
      { id: '2', name: 'Bank BCA', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png' },
      { id: '3', name: 'Bank BNI', image: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png' },
      { id: '4', name: 'Bank Mega', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bank_Mega_2013.svg/2560px-Bank_Mega_2013.svg.png' },
    ],
  },
  {
    title: 'Virtual Account',
    data: [
      { id: '5', name: 'Virtual Account Mandiri', image: 'https://upload.wikimedia.org/wikipedia/id/thumb/f/fa/Bank_Mandiri_logo.svg/2560px-Bank_Mandiri_logo.svg.png' },
      { id: '6', name: 'Virtual Account BCA', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png' },
      { id: '7', name: 'Virtual Account BNI', image: 'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/1200px-BNI_logo.svg.png' },
      { id: '8', name: 'Virtual Account Mega', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bank_Mega_2013.svg/2560px-Bank_Mega_2013.svg.png' },
    ],
  },
  {
    title: 'Cicilan Tanpa Kartu Kredit',
    data: [
      { id: '9', name: 'Kredivo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kredivo_logo.svg/1200px-Kredivo_logo.svg.png' },
      { id: '10', name: '< 17 Tahun (S&K BERLAKU)', image: 'https://cdn-icons-png.flaticon.com/512/633/633611.png' },
    ],
  },
];

export default function PaymentScreen() {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.itemRow}>
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.bankLogo} 
          resizeMode="contain"
          onError={(e) => console.log(`Failed to load ${item.name}`, e.nativeEvent.error)}
        />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.arrowCircle}>
        <Text style={styles.arrowText}>〉</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pembayaran</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.contentBody}>
        <SectionList
          sections={PAYMENT_METHODS}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled={false}
          ListHeaderComponent={
            <View style={styles.timerContainer}>
               <Text style={styles.timerText}>
                 Selesaikan pemesanan dalam <Text style={styles.timerCount}>00:60:00</Text>
               </Text>
            </View>
          }
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={renderItem}
          contentContainerStyle={styles.listPadding}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8,
    borderRadius: 8,
  },
  backIcon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  contentBody: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timerText: {
    color: '#A066CC',
    fontSize: 14,
  },
  timerCount: {
    color: '#FF6347',
    fontSize: 18,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  logoContainer: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankLogo: {
    width: '100%',
    height: '100%',
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    marginLeft: 20,
  },
  arrowCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8A2BE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: '#8A2BE2',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listPadding: {
    paddingBottom: 40,
  },
});
