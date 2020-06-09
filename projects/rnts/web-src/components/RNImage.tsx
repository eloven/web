import React from 'react'
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  logo: {
    width: 305,
    height: 159,
    marginBottom: 15
  }
})

export default function RNImage() {
  const src = 'https://i.imgur.com/TkIrScD.png'
  return (
    <Image source={{uri: src}} style={styles.logo}/>
  )
}
