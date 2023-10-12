import { ReactNode } from 'react'

import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

type ProvidersProps = { children: ReactNode }

export function Providers({ children }: ProvidersProps) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
}
