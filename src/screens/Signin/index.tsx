import backgroundImg from '../../assets/background.png'

import { Heading, Text, View } from 'native-base'
import { ImageBackground } from 'react-native'

import { Button } from '../../components/Button'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from '@env'
import { useEffect, useState } from 'react'

WebBrowser.maybeCompleteAuthSession()

export function Signin() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  })

  function handleGoogleSignIn() {
    setIsAuthenticating(true)

    googleSignIn().then((response) => {
      if (response.type !== 'success') {
        setIsAuthenticating(false)
      }
    })
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.idToken) {
      const googleUrl = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${response.authentication.idToken}`

      fetch(googleUrl)
        .then((response) => response.json())
        .then(console.log)
    }
  }, [response])

  return (
    <ImageBackground source={backgroundImg} style={{ flex: 1 }}>
      <View justifyContent="center" padding={13} flex={1}>
        <Heading color="primary.300" fontSize={32} textAlign="center">
          Ignite Fleet
        </Heading>
        <Text
          color="gray.100"
          fontSize="md"
          textAlign="center"
          marginBottom="32px"
        >
          Gestão de uso de veículos
        </Text>
        <Button onPress={handleGoogleSignIn} isLoading={isAuthenticating}>
          Entrar com Google
        </Button>
      </View>
    </ImageBackground>
  )
}
