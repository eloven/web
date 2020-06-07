import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Hello = Platform.select({
  ios: "Hello ios",
  android: "Hello android",
  web: "Hello web",
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{Hello}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
