import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import Trial from '@/components/Trial'

import { Accordion } from 'react-bootstrap-accordion'
const Home = () => {



  const session = useSession()
  const supabase = useSupabaseClient()



  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth 
        providers={["google"]}
        supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <>


<Accordion title='Account Details ->' children={<Account session={session} />} />

        


       
        <Trial session={session}/>
        </>
        
      )}
    </div>
  )
}

export default Home
