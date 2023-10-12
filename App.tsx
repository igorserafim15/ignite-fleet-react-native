import { StatusBar } from 'expo-status-bar'
import { Signin } from './src/screens/Signin'
import { Providers } from './src/providers'

export default function App() {
  return (
    <Providers>
      <Signin />
      <StatusBar style="auto" />
    </Providers>
  )
}
