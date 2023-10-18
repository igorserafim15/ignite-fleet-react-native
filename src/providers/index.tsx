import { ReactNode } from 'react'

import { REALM_APP_ID } from '@env'
import { theme } from '../theme'

import { NativeBaseProvider } from 'native-base'
import { AppProvider } from '@realm/react'

type ProvidersProps = { children: ReactNode }

export function Providers({ children }: ProvidersProps) {
  return (
    <AppProvider id={REALM_APP_ID}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </AppProvider>
  )
}
