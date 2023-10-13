import { Center, Spinner } from 'native-base'

export function LoadingScreen() {
  return (
    <Center flex={1} backgroundColor="gray.800">
      <Spinner size={44} color="white" />
    </Center>
  )
}
