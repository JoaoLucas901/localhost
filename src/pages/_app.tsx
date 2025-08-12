import { Provider } from "@/components/ui/provider"
import { SessionProvider } from "@/contexts/SessionContext"
import { Session } from "inspector/promises"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps ) {
  return (
    <Provider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  )
}
