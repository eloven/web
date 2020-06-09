import { Platform } from 'react-native'

export function isWeb() {
  return Platform.OS === 'web'
}

export function isAndroid() {
  return Platform.OS === 'android'
}

export function isIOS() {
  return Platform.OS === 'ios'
}

export function isWin() {
  return Platform.OS === 'windows'
}

export function isMacOS() {
  return Platform.OS === 'macos'
}
