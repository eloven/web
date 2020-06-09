import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native'
import RnButton from './components/RNButton'
import RNImage from './components/RNImage'

const Hello = Platform.select({
  ios: "Hello ios",
  android: "Hello android",
  web: "Hello web",
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <RNImage/>
        <RnButton/>
      </View>
    </SafeAreaView>
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
