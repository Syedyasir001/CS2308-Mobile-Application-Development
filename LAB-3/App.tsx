import React from 'react';
import {
  Text,
  Image,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hi</Text>

      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/502426696/photo/beautiful-seascape.jpg?s=2048x2048&w=is&k=20&c=_4MtYcIXBvjRS1udENVsMdt4cCyiGzl-KdCwnK9vxXk=',
        }}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Press this button"
          onPress={() => Alert.alert('Button Pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a43737',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
  },
});

export default App;
