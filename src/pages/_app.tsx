import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'

import { ChakraProvider } from '@chakra-ui/react'

import { queryClient } from '@/services/queryClient'
import { theme } from '@/styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
