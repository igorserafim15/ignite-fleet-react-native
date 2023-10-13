import { NativeBaseProvider } from 'native-base'
import { ReactNode } from 'react'
import { theme } from '../theme'

type ProvidersProps = { children: ReactNode }

export function Providers({ children }: ProvidersProps) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
}
