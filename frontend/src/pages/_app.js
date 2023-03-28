import '@/styles/black.css'
import '@/styles/blue.css'
import '@/styles/green.css'
import '@/styles/indigo.css'
import '@/styles/orange.css'
import '@/styles/pink.css'
import '@/styles/purple.css'
import '@/styles/red.css'
import '@/styles/teal.css'
import '@/styles/default.css'





import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient())
  return (
  <SessionContextProvider 
  supabaseClient={supabase}  
  appearance={{ theme: ThemeSupa }} 
  initialSession={pageProps.initialSession}
  theme=""
  >
  <Component {...pageProps} />
  
  </SessionContextProvider>
  )

}
