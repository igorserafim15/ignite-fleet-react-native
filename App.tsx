/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { LoadingScreen } from './src/components/LoadingScreen'
import { Signin } from './src/screens/Signin'
import { Providers } from './src/providers'
import { Home } from './src/screens/Home'

import { UserProvider } from '@realm/react'
import { View } from 'native-base'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <Providers>
      <View backgroundColor="gray.800" flex={1}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        {fontsLoaded && (
          <UserProvider fallback={Signin}>
            <Home />
          </UserProvider>
        )}
        {!fontsLoaded && <LoadingScreen />}
      </View>
    </Providers>
  )
}
