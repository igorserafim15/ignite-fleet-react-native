/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Signin } from './src/screens/Signin'
import { Providers } from './src/providers'
import { LoadingScreen } from './src/components/LoadingScreen'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <Providers>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      {fontsLoaded ? <Signin /> : <LoadingScreen />}
    </Providers>
  )
}
