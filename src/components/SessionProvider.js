import { SessionProvider } from "next-auth/react"

export default function Provider({
 children,
//   pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
{children}
    </SessionProvider>
  )
}