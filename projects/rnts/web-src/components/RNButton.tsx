import React from 'react'
import { Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native'
import { isWeb } from '../utils/check'

export default function RnButton() {
  const handlePress = (e:  NativeSyntheticEvent<NativeTouchEvent>) => {
    e.persist()
    e.stopPropagation()
    if (isWeb()) {
      console.log(e)
    }
  }
  return (
    <Button title="RnButton" color="#f08300" onPress={handlePress} />
  )
}
