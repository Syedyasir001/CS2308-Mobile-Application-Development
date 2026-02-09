import React from "react";
import { View, Text, Button, Image } from "react-native";

const App = () => {
  return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
      
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={{ width: 150, height: 150, borderRadius: 75 }}
      />

      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
        Syed Yasir
      </Text>

      <Text>CS student</Text>
      <Text>Skills: Python, Git, React Native</Text>

      <Button title="View Projects" onPress={() => {}} />
    </View>
  );
};

export default App;
