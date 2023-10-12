import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Signin } from './src/screens/Signin'

export default function App() {
  return (
    <View>
      <Signin />
      <StatusBar style="auto" />
    </View>
  )
}
